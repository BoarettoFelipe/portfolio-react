import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import './Footer.css';

const sections = ['perfil', 'experiencia', 'projetos', 'certificacoes', 'contato'];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-identity">
            <p className="site-footer-name">{profile.name}</p>
            <p>{t('hero_subtitle')}</p>
          </div>

          <nav aria-label={t('menu_title')}>
            <h2>{t('menu_title')}</h2>
            <ul>
              {sections.map((id) => (
                <li key={id}><a href={`#${id}`}>{t(`nav_${id}`)}</a></li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-professional">
            <h2>{t('footer_professional_links')}</h2>
            <ul>
              <li><a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={profile.github.url} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={`mailto:${profile.email}`}>{t('contact_email')}</a></li>
              <li><a href={profile.resume.url} download={profile.resume.filename}>{t('resume_download_button')}</a></li>
            </ul>
          </div>
        </div>

        <p className="site-footer-copyright">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}

export default Footer;
