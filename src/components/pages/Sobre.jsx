import { useTranslation } from 'react-i18next';
import './Sobre.css';
import profilePlaceholder from '../../assets/profile-placeholder.png';

function Sobre() {
  const { t } = useTranslation();

  return (
    <div className="sobre-container">
      <div className="sobre-imagem">
        <img src={profilePlaceholder} alt={t('hero_name')} />
      </div>
      <div className="sobre-texto">
        <h2>{t('about_title')}</h2>
        <p>{t('about_text')}</p>
        <h3>{t('about_skills_title')}</h3>
        <div className="skills-container">
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">Agile Methodologies</span>
        </div>
      </div>
    </div>
  );
}

export default Sobre;