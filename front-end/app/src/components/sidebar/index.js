import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <a href="" className="sidebar-logo">
          logo
        </a>
        <li>
          <Link to="">Gerenciar Clientes</Link>
        </li>
        <li>
          <Link to="">Gerenciar Locações</Link>
        </li>
        <Link to="">
          <button className="logoutBtn">Logout</button>
        </Link>
      </ul>
    </div>
  );
}
