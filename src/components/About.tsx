import "../css/About.css";

function About() {
  return (
    <section id="about">
      <h2 className="secondary-title">
        À propos de <span className="gradient-text">Moi</span>
      </h2>
      <div className="about-container">
        <div className="photo-container">
          <div className="photo-frame">
            <img src="" alt="" />
          </div>
        </div>
        <div className="about-text-container">
          <p className="body-text">
            I'm a passionate junior web developer making my mark in the tech
            world. After discovering my love for creating digital experiences, I
            dove headfirst into learning modern web technologies.
          </p>
          <br />
          <p className="body-text">
            I believe that diversity in tech brings fresh perspectives and
            innovative solutions. As a woman entering this field, I'm excited to
            contribute my unique viewpoint while continuously learning and
            growing.
          </p>
          <br />
          <p className="body-text">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, and connecting with fellow
            developers in the community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
