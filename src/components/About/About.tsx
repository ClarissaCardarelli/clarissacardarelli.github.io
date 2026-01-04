import { useLanguage } from "../../context/LanguageContext";
import "./About.css";

function About() {
  const { t } = useLanguage();
  return (
    <section id="about">
      <h2 className="secondary-title">
        {t.about.title}
        <span className="gradient-text">{t.about.me} </span>
      </h2>
      <div className="about-container">
        <div className="photo-container">
          <div className="photo-frame">
            <img
              src="images/Cv_photo_transparent.png"
              alt="Clarissa Cardarelli profile photo"
            />
          </div>
        </div>
        <div className="about-text-container">
          <p className="body-text">
            {t.about.p1_before}
            <span className="highlight-text">{t.about.p1_highlight}</span>
            {t.about.p1_after}
          </p>

          <br />
          <p className="body-text">
            {t.about.p2_before}
            <span className="highlight-text">{t.about.p2_highlight}</span>
            {t.about.p2_after}
          </p>
          <br />
          <p className="body-text">
            {t.about.p3_before}
            <span className="highlight-text">{t.about.p3_highlight}</span>
            {t.about.p3_after}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
