import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="fade-up">
            <p
              style={{
                color: "#b5b5b5",
                marginBottom: "16px",
                fontSize: "1rem",
              }}
            >
              Hello, I'm
            </p>

            <h1 className="hero-title">
              Karthikeyan
            </h1>

            <p className="hero-description">
              Building technology that solves problems, creates value,
              and inspires innovation. I enjoy exploring different areas
              of software development, cloud computing, data, and
              emerging technologies while continuously learning and
              growing as a developer.
            </p>

            <div className="hero-buttons">
              <a
                href="/Karthikeyan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                View Resume
              </a>

              <a
                href="#connect"
                className="secondary-btn"
              >
                Connect
              </a>
            </div>
          </div>
<Image
  src="/profile1.png"
  alt="Karthikeyan"
  width={1000}
  height={1000}
  className="hero-image"
  loading="eager"
  priority
/>

        </div>
      </div>
    </section>
  );
}