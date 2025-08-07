import './Contato.css';

function Contato() {
  return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <p>
        Sinta-se à vontade para me enviar uma mensagem através do formulário abaixo ou conectar-se comigo em outras plataformas.
      </p>
      
      {/* Formulário de contato simples. Por enquanto, ele é apenas visual. */}
      <form className="contato-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default Contato;