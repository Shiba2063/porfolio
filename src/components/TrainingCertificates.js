
import { trainingCertificates } from "../data/portfolioData";

function TrainingCertificates() {
  return (
    <section className="training-section" id="training-certificates">

      <div className="training-container">

        {/* Section Heading */}
        <div className="training-header">

          <div className="training-label">
            <span>06.</span>
            <span>LEARNING & DEVELOPMENT</span>
          </div>

          <h2>
            Training &<br />
            Certificates
          </h2>

          <p>
            Continuous learning is the foundation of growth.
            Here are the trainings and certifications that
            strengthen my technical knowledge and skills.
          </p>

        </div>

        {/* Certificate Cards */}
        <div className="training-grid">

          {trainingCertificates.map((item, index) => (

            <div className="training-card" key={index}>

              <div className="training-icon">
                {item.icon || "🏆"}
              </div>

              <h3>{item.title}</h3>

              <p className="training-organization">
                {item.organization}
              </p>

              <span className="training-year">
                {item.year}
              </span>

              <p className="training-description">
                {item.description}
              </p>

              {item.certificateLink && (
                <a
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate ↗
                </a>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrainingCertificates;
