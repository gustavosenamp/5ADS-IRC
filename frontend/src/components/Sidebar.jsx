import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">⚙️ Painel Admin</div>
      <nav className="sidebar-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          🏠 Início
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          👥 Listar Usuários
        </NavLink>
        <NavLink
          to="/users/new"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          ➕ Cadastrar Usuário
        </NavLink>
      </nav>
    </div>
  );
}
