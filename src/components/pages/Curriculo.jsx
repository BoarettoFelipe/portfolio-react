import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import meuCurriculoPDF from '../../assets/Boaretto-Curriculo.pdf';

import './Curriculo.css';

console.log("Caminho do PDF:", meuCurriculoPDF); 

//pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

function Curriculo() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="curriculo-container">
      <h2>Meu Currículo</h2>
      
      <a className="download-button" href={meuCurriculoPDF} download="Boaretto-Curriculo.pdf">
        Download do Currículo
      </a>

      <div className="pdf-viewer">
        <Document file={meuCurriculoPDF} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default Curriculo;