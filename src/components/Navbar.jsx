import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 20) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <div className="navbar-container"> 
      <nav className={`navbar ${show ? 'visible' : 'hidden'}`}>
        <span className="line line-top"></span>
        <span className="line line-right"></span>
        <span className="line line-bottom"></span>
        <span className="line line-left"></span>
        
        <ul className="navbar-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#curriculo">Meu Currículo</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;