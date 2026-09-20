import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import './Curriculo.css';

function Curriculo() {
  const { t } = useTranslation();

  return (
    <div className="curriculo-card">
      <h2>{t('nav_curriculo')}</h2>
      <p>{t('resume_intro')}</p>
      
      <div className="curriculo-viewer">
        <div className="pdf-embed-container">
          <embed
            src={profile.resume.url}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </div>
        <img 
          src={profile.resume.preview} 
          alt="Prévia do currículo" 
          className="pdf-preview-image"
        />
      </div>

      <a className="download-button" href={profile.resume.url} download={profile.resume.filename}>
        {t('resume_download_button')}
      </a>
    </div>
  );
}

export default Curriculo;