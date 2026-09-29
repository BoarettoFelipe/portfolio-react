import { useTranslation } from 'react-i18next'
import { certifications } from '../../data/certifications'
import './Certificacoes.css'

const localized = (value, language) =>
  typeof value === 'string' ? value : value?.[language] ?? value?.pt ?? value?.en ?? ''

export default function Certificacoes() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt'

  return (
    <div className="certificacoes-container">
      <h2>{t('certifications_title')}</h2>
      <p className="certificacoes-intro">{t('certifications_intro')}</p>

      <div className="certificacoes-grid">
        {certifications.map((certification) => (
          <article className="certificacao-card" key={certification.id}>
            {certification.image && (
              <img
                className="certificacao-image"
                src={certification.image}
                alt=""
                loading="lazy"
              />
            )}
            <div className="certificacao-heading">
              <h3>{localized(certification.title, language)}</h3>
              <p className="certificacao-issuer">{certification.issuer}</p>
              {certification.date && (
                <p className="certificacao-date">{localized(certification.date, language)}</p>
              )}
            </div>
            <p className="certificacao-description">
              {localized(certification.description, language)}
            </p>
            {(certification.location || certification.details) && (
              <p className="certificacao-details">
                {[
                  certification.location,
                  localized(certification.details, language),
                ].filter(Boolean).join(' · ')}
              </p>
            )}
            {(certification.credentialUrl || certification.certificateUrl) && (
              <div className="certificacao-links">
                {certification.credentialUrl && (
                  <a className="certificacao-link" href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {t('certifications_view_credential')}
                  </a>
                )}
                {certification.certificateUrl && (
                  <a className="certificacao-link" href={certification.certificateUrl} target="_blank" rel="noopener noreferrer">
                    {t('certifications_view_certificate')}
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
