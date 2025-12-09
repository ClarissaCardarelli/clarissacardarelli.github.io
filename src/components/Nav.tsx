import "../css/Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#skills" className="nav-link">
            Mes Compétences
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Mes Projets
          </a>
        </li>
        <li>
          <a href="" download className="body-text nav-link btn orange-btn">
            <i className="bi bi-file-earmark-arrow-down btn-icon" />
            Mon CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
