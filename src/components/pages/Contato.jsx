import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contato.css';

function Contato() {
  const { t } = useTranslation();
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const currentErrors = {};
    if (!form.current.from_name.value) {
      currentErrors.from_name = true;
    }
    if (!form.current.reply_to.value) {
      currentErrors.reply_to = true;
    }
    if (!form.current.message.value) {
      currentErrors.message = true;
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatusMessage(t('contact_error_required'));
      return;
    }
    
    setStatusMessage('Enviando...');

    emailjs
      .sendForm('service_syddtjc', 'template_aouzz4r', form.current, 'zTL5eoqQygEEHtEDB')
      .then(
        (result) => {
          setStatusMessage('Mensagem enviada com sucesso!');
          form.current.reset();
          setErrors({});
        },
        (error) => {
          setStatusMessage('Falha ao enviar. Tente novamente.');
        }
      );
  };

  return (
    <div className="contato-container">
      <h2>{t('contact_title')}</h2>
      <p>{t('contact_intro')}</p>
      <form ref={form} onSubmit={sendEmail} className="contato-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">{t('contact_name')}</label>
          <input 
            type="text" 
            id="name" 
            name="from_name" 
            className={errors.from_name ? 'error' : ''} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('contact_email')}</label>
          <input 
            type="email" 
            id="email" 
            name="reply_to" 
            className={errors.reply_to ? 'error' : ''} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('contact_message')}</label>
          <textarea 
            id="message" 
            name="message" 
            rows="6" 
            className={errors.message ? 'error' : ''} 
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">{t('contact_send_button')}</button>
        {statusMessage && <p className={`status-message ${Object.keys(errors).length > 0 ? 'error-text' : ''}`}>{statusMessage}</p>}
      </form>
    </div>
  );
}

export default Contato;