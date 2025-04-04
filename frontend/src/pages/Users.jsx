import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import "./UsersPage.css";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);

  const addUser = () => {
    axios.post("http://localhost:5000/users", { name, email, phone, role }).then((res) => {
      setUsers([...users, res.data]);
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
    });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div className="ml-64 min-h-screen user-page">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white user-header">
        <h1 className="text-4xl font-bold">👥 Gerenciar Usuários</h1>
      </div>

      <div className="user-form-container">
        <UserForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          role={role}
          setRole={setRole}
          addUser={addUser}
        />
      </div>

      <div className="user-list-container">
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </div>

  );
}
