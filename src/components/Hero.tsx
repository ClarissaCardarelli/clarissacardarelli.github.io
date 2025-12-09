import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero-bg">
      <div className="hero-container">
        <p className="body-text">Bonjour, je suis</p>
        <h1 className="primary-title gradient-text">Clarissa Cardarelli</h1>
        <p className="job-title">Développeur Full Stack </p>
        <p className="body-text">
          Passionate about crafting beautiful, user-friendly web experiences.
          Ready to bring fresh perspectives and creative solutions to your team.
        </p>

        <div className="hero-buttons-container">
          <button type="button" className="body-text btn blue-btn">
            <i className="bi bi-github btn-icon" /> GitHub
          </button>
          <button type="button" className="body-text btn green-btn">
            <i className="bi bi-linkedin btn-icon" /> Linkedin
          </button>
          <button type="button" className="body-text btn orange-btn">
            <i className="bi bi-file-earmark-arrow-down btn-icon" /> Télécharger
            mon CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
