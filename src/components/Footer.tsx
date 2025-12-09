import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <h3>Let's Connect</h3>
      <p>I'm always open to discussing new projects and opportunities.</p>
      <div className="footer-button-container">
        <button type="button" className="footer-link">
          <i className="bi bi-github footer-icon" />
        </button>
        <button type="button" className="footer-link">
          <i className="bi bi-linkedin footer-icon" />
        </button>
        <button type="button" className="footer-link">
          <i className="bi bi-envelope footer-icon" />
        </button>
      </div>
      <p>© 2025 Clarissa Cardarelli. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
