"use client";

const certificates = [
  {
    title: "Using Power BI to be a Strategic Financial Partner",
    image: "/certificates/powerbi.png",
    pdf: "/certificates/powerbi.pdf",
  },
  {
    title: "Microsoft Azure AI Essentials",
    image: "/certificates/azure-ai.png",
    pdf: "/certificates/azure-ai.pdf",
  },
  {
    title: "NPTEL Human Computer Interaction",
    image: "/certificates/hci.png",
    pdf: "/certificates/hci.pdf",
  },
  {
    title: "Cyber Hygiene Awareness",
    image: "/certificates/cyber-hygiene.png",
    pdf: "/certificates/cyber-hygiene.pdf",
  },
  {
    title: "Privacy and Security in Online Social Media",
    image: "/certificates/privacy-security.png",
    pdf: "/certificates/privacy-security.pdf",
  },
];

export default function Certificates() {
  const loopedCertificates = [...certificates, ...certificates];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">CERTIFICATES</h2>

        <div className="certificate-container">
          <div className="certificate-track">
            {loopedCertificates.map((certificate, index) => (
              <div key={index} className="certificate-card glass-card">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <h3>{certificate.title}</h3>

                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}