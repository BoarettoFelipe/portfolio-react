import './Sobre.css';

import profilePlaceholder from '../../assets/profile-placeholder.png'; 

function Sobre() {
  return (
    <div className="sobre-container">
      {/* Coluna da Imagem */}
      <div className="sobre-imagem">
        <img src={profilePlaceholder} alt="Felipe Boaretto" />
      </div>

      {/* Coluna do Texto */}
      <div className="sobre-texto">
        <h2>Sobre Mim</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </p>
        
        <h3>Minhas Habilidades</h3>
        <div className="skills-container">
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">Metodologias Ágeis</span>
        </div>
      </div>
    </div>
  );
}

export default Sobre;