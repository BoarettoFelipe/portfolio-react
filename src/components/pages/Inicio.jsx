import { profile } from '../../data/profile';
import { useTranslation } from 'react-i18next';
import './Inicio.css';

function Inicio({ nameRef, nameInHeader }) {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <div className="hero-main-content">
        <h1 ref={nameRef} className={`hero-name${nameInHeader ? ' transferred' : ''}`}>{profile.name}</h1>
        <p>{t('hero_subtitle')}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projetos">{t('hero_projects')} <span aria-hidden="true">↗</span></a>
          <a className="btn btn-secondary" href={profile.resume.url} download={profile.resume.filename}>{t('resume_download_button')}</a>
        </div>
        <div className="hero-links">
          {profile.linkedin && (
            <div className="social-link-wrapper">
              <a aria-label="LinkedIn" href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className="social-link" draggable="false">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7h.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" /></svg>
              </a>
              <div className="tooltip">{profile.linkedin.label}</div>
            </div>
          )}
          <div className="social-link-wrapper">
            <a aria-label="GitHub" href={profile.github.url} target="_blank" rel="noopener noreferrer" className="social-link" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <div className="tooltip">{profile.github.username}</div>
          </div>
          <div className="social-link-wrapper">
            <a aria-label="WhatsApp" href={profile.whatsapp.url} target="_blank" rel="noopener noreferrer" className="social-link" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <div className="tooltip">{profile.whatsapp.label}</div>
          </div>
          <div className="social-link-wrapper">
            <a aria-label={t('contact_email')} href={'mailto:' + profile.email} className="social-link" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <div className="tooltip">{profile.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
