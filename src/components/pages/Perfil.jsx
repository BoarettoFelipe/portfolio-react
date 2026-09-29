import { profile } from '../../data/profile';
import { getTechnology } from '../../data/technologies';
import { useTranslation } from 'react-i18next';
import './Perfil.css';
import profilePhoto from '../../assets/profile/felipe-boaretto.jpg';

function Perfil() {
  const { t } = useTranslation();

  return (
    <div className="perfil-container">
      <div className="perfil-imagem">
        <img loading="lazy" src={profilePhoto} alt={t('profile_photo_alt')} />
      </div>
      <div className="perfil-texto">
        <h2>{t('profile_title')}</h2>
        {t('profile_paragraphs', { returnObjects: true }).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="perfil-skills">
        <h3>{t('profile_skills_title')}</h3>
        <div className="skill-groups">
          {profile.skillGroups.map((group) => (
            <div className="skill-group" key={group.id}>
              <h4>{t(group.labelKey)}</h4>
              <ul>{group.technologies.map((id) => <li key={id}>{getTechnology(id).label}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
