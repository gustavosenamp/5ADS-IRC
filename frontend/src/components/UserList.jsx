import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";


function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div class="userlist-wrapper">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Usuários Cadastrados</h1>
      {users.length === 0 ? (
        <p className="text-gray-500">Nenhum usuário cadastrado ainda.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="space-y-1">
                <p className="text-xl font-semibold text-gray-800">{user.name}</p>
                <p className="text-gray-600">📧 {user.email}</p>
                <p className="text-gray-600">📞 {user.phone}</p>
                <p className="text-gray-600">🏷️ {user.role}</p>
              </div>
              <button
                onClick={() => deleteUser(user.id)}
                className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                🗑️ Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;