import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {/* 2. Trocamos 'a href' por 'Link to'. O 'to' deve corresponder ao 'path' da rota */}
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre Mim</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/curriculo">Meu Currículo</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;