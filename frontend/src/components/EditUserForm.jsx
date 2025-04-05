import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function EditUserForm({ userId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${userId}`).then((res) => {
      const { name, email, phone, role } = res.data;
      setName(name);
      setEmail(email);
      setPhone(phone);
      setRole(role);
    });
  }, [userId]);

  const updateUser = () => {
    api.put(`/users/${userId}`, {
      name,
      email,
      phone,
      role,
    }).then(() => navigate("/users"))
      .catch((err) => {
        console.error("Erro ao atualizar usuário:", err);
      });
  };

  return (
    <div className="user-form-wrapper">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Editar Usuário</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Cargo"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg"
        />
      </div>

      <button
        onClick={updateUser}
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        💾 Atualizar Usuário
      </button>
    </div>
  );
}

export default EditUserForm;
