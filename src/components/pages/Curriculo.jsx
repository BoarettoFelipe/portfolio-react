import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import './Curriculo.css';

function Curriculo() {
  const { t } = useTranslation();
  return (
    <div className="curriculo-card">
      <div className="curriculo-copy">
        <h2>{t('nav_curriculo')}</h2>
        <p>{t('resume_intro')}</p>
        <div className="curriculo-actions">
          <a className="btn btn-primary" href={profile.resume.url} download={profile.resume.filename}>{t('resume_download_button')}</a>
          <a className="btn btn-ghost" href={profile.resume.url} target="_blank" rel="noopener noreferrer">{t('resume_open')} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <a className="curriculo-viewer" href={profile.resume.url} target="_blank" rel="noopener noreferrer" aria-label={t('resume_open')}>
        <img src={profile.resume.preview} alt={t('resume_preview')} className="pdf-preview-image" loading="lazy" />
      </a>
    </div>
  );
}
export default Curriculo;
