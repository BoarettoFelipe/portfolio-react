import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contato.css';

function Contato() {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const sending = useRef(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending.current) return;
    const currentErrors = {};
    for (const field of ['from_name', 'reply_to', 'message']) {
      if (!form.current.elements[field].value.trim()) currentErrors[field] = 'contact_field_required';
    }
    if (!currentErrors.reply_to && !form.current.reply_to.validity.valid) currentErrors.reply_to = 'contact_email_invalid';
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length) {
      setStatus('invalid');
      form.current.elements[Object.keys(currentErrors)[0]].focus();
      return;
    }
    sending.current = true;
    setStatus('sending');
    try {
      await emailjs.sendForm('service_syddtjc', 'template_aouzz4r', form.current, 'zTL5eoqQygEEHtEDB');
      form.current.reset();
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('failure');
    } finally {
      sending.current = false;
    }
  };

  const fieldProps = (name) => ({
    name,
    required: true,
    readOnly: status === 'sending',
    className: errors[name] ? 'error' : '',
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });
  const errorFor = (name) => errors[name] && <p className="field-error" id={`${name}-error`}>{t(errors[name])}</p>;
  const statusKey = { invalid: 'contact_error_fields', sending: 'contact_sending', success: 'contact_success', failure: 'contact_failure' }[status];

  return (
    <div className="contato-container">
      <div className="contato-intro">
        <h2>{t('contact_title')}</h2>
        <p>{t('contact_intro')}</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contato-form" noValidate aria-busy={status === 'sending'}>
        <div className="form-group">
          <label htmlFor="name">{t('contact_name')}</label>
          <input type="text" id="name" autoComplete="name" {...fieldProps('from_name')} />
          {errorFor('from_name')}
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('contact_email')}</label>
          <input type="email" id="email" autoComplete="email" {...fieldProps('reply_to')} />
          {errorFor('reply_to')}
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('contact_message')}</label>
          <textarea id="message" rows="5" {...fieldProps('message')} />
          {errorFor('message')}
        </div>
        <button type="submit" className="btn btn-primary submit-button" disabled={status === 'sending'}>{t(status === 'sending' ? 'contact_sending' : 'contact_send_button')}</button>
        <p role="status" className={`status-message ${status === 'failure' || status === 'invalid' ? 'error-text' : status === 'success' ? 'success-text' : ''}`}>{statusKey ? t(statusKey) : ''}</p>
      </form>
    </div>
  );
}
export default Contato;
