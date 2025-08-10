import { useTranslation } from 'react-i18next';
import meuCurriculoPDF from '../../assets/Boaretto-Curriculo.pdf';
import curriculoPreview from '../../assets/Boaretto-Curriculo.jpg';
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
            src={meuCurriculoPDF}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </div>
        <img 
          src={curriculoPreview} 
          alt="Prévia do currículo" 
          className="pdf-preview-image"
        />
      </div>

      <a className="download-button" href={meuCurriculoPDF} download="FelipeBoaretto-Curriculo.pdf">
        {t('resume_download_button')}
      </a>
    </div>
  );
}

export default Curriculo;