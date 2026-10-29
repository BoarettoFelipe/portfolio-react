import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { certifications } from '../../data/certifications'
import './Certificacoes.css'

const localized = (value, language) =>
  typeof value === 'string' ? value : value?.[language] ?? value?.pt ?? value?.en ?? ''
const getPageSize = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3

export default function Certificacoes() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt'
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(getPageSize)
  const pageCount = Math.ceil(certifications.length / pageSize)
  const currentPage = Math.min(page, Math.max(0, pageCount - 1))
  const visibleCertifications = certifications.slice(currentPage * pageSize, (currentPage + 1) * pageSize)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const desktop = window.matchMedia('(min-width: 1024px)')
    const updatePageSize = () => {
      setPageSize(getPageSize())
      setPage(0)
    }
    mobile.addEventListener('change', updatePageSize)
    desktop.addEventListener('change', updatePageSize)
    return () => {
      mobile.removeEventListener('change', updatePageSize)
      desktop.removeEventListener('change', updatePageSize)
    }
  }, [])

  return (
    <div className="certificacoes-container">
      <h2>{t('certifications_title')}</h2>
      <p className="certificacoes-intro">{t('certifications_intro')}</p>

      <div key={`${pageSize}-${currentPage}`} className="certificacoes-grid certificacoes-grid--enter">
        {visibleCertifications.map((certification) => (
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
      {pageCount > 1 && (
        <nav className="certificacoes-pagination" aria-label={t('certifications_navigation')}>
          <button type="button" className="certificacoes-pagination-button" disabled={currentPage === 0} aria-label={t('certifications_previous')} onClick={() => setPage(currentPage - 1)}><span aria-hidden="true">‹</span></button>
          <p className="certificacoes-pagination-status" aria-live="polite">{t('certifications_page', { page: currentPage + 1, total: pageCount })}</p>
          <button type="button" className="certificacoes-pagination-button" disabled={currentPage === pageCount - 1} aria-label={t('certifications_next')} onClick={() => setPage(currentPage + 1)}><span aria-hidden="true">›</span></button>
        </nav>
      )}
    </div>
  )
}
