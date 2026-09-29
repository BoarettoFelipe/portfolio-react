import { useTranslation } from 'react-i18next';
import { experience } from '../../data/experience';
import { getTechnology } from '../../data/technologies';
import './Experiencia.css';

function Experiencia() {
  const { t, i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || i18n.language || 'pt').split('-')[0];
  const localized = (text) => text?.[language] || text?.pt || text?.en || '';

  return (
    <div className="experience-container">
      <h2 id="experience-title">{t('experience_title')}</h2>
      {experience.length > 0 && (
        <div className="experience-list">
          {experience.map((entry) => (
            <article key={entry.id} className="experience-entry">
              <h3>{entry.company}</h3>
              <p className="experience-role">{localized(entry.role)}</p>
              {entry.program && <p className="experience-program">{localized(entry.program)}</p>}
              <p className="experience-meta">
                {localized(entry.period)}
                {entry.location && <> · {localized(entry.location)}</>}
              </p>
              {entry.summary && <p>{localized(entry.summary)}</p>}
              {entry.rotations?.length > 0 && (
                <div className="experience-rotations">
                  <h4>{t('experience_rotations')}</h4>
                  <ul>
                    {entry.rotations.map((rotation) => (
                      <li key={rotation.id}>
                        <h5>{localized(rotation.title)}</h5>
                        <p>{localized(rotation.description)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {entry.highlights?.length > 0 && (
                <ul className="experience-highlights">{entry.highlights.map((highlight, index) => <li key={index}>{localized(highlight)}</li>)}</ul>
              )}
              {entry.technologies?.length > 0 && (
                <ul className="experience-technologies">
                  {entry.technologies.map((id) => <li key={id}>{getTechnology(id).label}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Experiencia;
