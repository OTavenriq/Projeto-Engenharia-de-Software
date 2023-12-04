import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <a href="" className="sidebar-logo">
          <img src="/images/logo.png"></img>
        </a>
        <li>
          <Link to="/Customer">Gerenciar Clientes</Link>
        </li>
        <li>
          <Link to="/Rental">Gerenciar Locações</Link>
        </li>
        <Link to="/">
          <button className="logoutBtn">Logout</button>
        </Link>
      </ul>
    </div>
  );
}
