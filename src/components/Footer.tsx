import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/Footer.css";

function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "ccardare";
    const domain = "gmail.com";
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) return null;

  return (
    <footer>
      <h3>{t.footer.title}</h3>
      <p className="body-text">{t.footer.description}</p>

      <div className="footer-button-container">
        <a
          href="https://github.com/ClarissaCardarelli"
          className="footer-link footer-link-GH"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="bi bi-github footer-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/clarissa-cardarelli/"
          className="footer-link footer-link-LN"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin footer-icon" />
        </a>

        <a
          href={`mailto:${email}`}
          className="footer-link footer-link-GM"
          aria-label="Email"
        >
          <i className="bi bi-envelope footer-icon" />
        </a>
      </div>

      <p className="body-text line-break">{t.footer.rights}</p>
    </footer>
  );
}

export default Footer;
