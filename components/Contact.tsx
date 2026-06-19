export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-box glass-card">
          <h2 className="section-title">Let's Connect</h2>

          <p>
            I'm always open to discussing new opportunities,
            collaborations, innovative projects, and meaningful
            conversations related to technology, software development,
            cloud computing, artificial intelligence, and data-driven
            solutions.
          </p>

          <div className="contact-links">
            <a
              href="mailto:kskarthi0505@gmail.com"
              className="contact-link"
            >
              📧 kskarthi0505@gmail.com
            </a>

            <a
              href="tel:+919842087007"
              className="contact-link"
            >
              📞 +91 9842087007
            </a>

            <a
              href="https://maps.google.com/?q=Coimbatore,TamilNadu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              📍 Coimbatore, Tamil Nadu
            </a>
          </div>

          <div
            style={{
              marginTop: "40px",
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "1.2rem",
              }}
            >
              Follow Me
            </h3>

            <div className="contact-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>

              <a
                href="mailto:kskarthi0505@gmail.com"
                className="contact-link"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}