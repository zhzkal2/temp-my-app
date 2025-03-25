import { Link } from "react-router-dom";
import "../styles/Components/header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="https://ankh-systems.co.jp/">
        <div className="header__logo-container">
          <img
            src="logo@2x.png"
            alt="AnkSystems_Logo"
            width={125}
            height={14}
          />
        </div>
      </Link>
    </header>
  );
}
