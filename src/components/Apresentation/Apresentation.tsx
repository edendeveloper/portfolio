import "./apresentation.css";

export default function Apresentation() {
  return (
    <section className="apresentation-box">
      <div className="text-box">
        <h1 className="gradient-text">Welcome!</h1>
        <h2>
          <i>Welington</i> is a passionate front-end developer wanting to become
          a product designer. He is moved by art, inovation and learning new
          things. Studyng ASD in Brazil.
        </h2>
        <p>
          trainee at{" "}
          <a
            href="https://www.linkedin.com/company/kumulus-cloud-data/mycompany/"
            target="_blank"
          >
            Kumulus
          </a>
        </p>
      </div>
    </section>
  );
}
