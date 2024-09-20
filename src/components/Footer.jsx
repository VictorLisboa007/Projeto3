import './Footer.module.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
        <ul className="footer-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer