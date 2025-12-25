import { useLanguage } from "../context/LanguageContext";
import "../css/Hero.css";

function Hero() {
  const { t } = useLanguage();

  return (
    <header className="hero-bg">
      <section className="hero-container">
        <p className="body-text">{t.hero.greeting}</p>
        <h1 className="primary-title gradient-text">Clarissa Cardarelli</h1>
        <h2>{t.hero.role}</h2>
        <p className="body-text">{t.hero.description}</p>
        <div className="hero-buttons-container">
          <a
            href="https://github.com/ClarissaCardarelli"
            className="body-text btn blue-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github btn-icon" aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/clarissa-cardarelli/"
            className="body-text btn green-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin btn-icon" aria-hidden="true" />
            LinkedIn
          </a>
          <a href="#" download className="body-text btn orange-btn">
            <i
              className="bi bi-file-earmark-arrow-down btn-icon"
              aria-hidden="true"
              aria-label="CV"
            />
            {t.hero.downloadCV}
          </a>
        </div>
      </section>
    </header>
  );
}

export default Hero;
