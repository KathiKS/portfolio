const internships = [
  {
    company: "Growai Tech",
    role: "Web Development Intern • 20 Days",
    description:
      "Worked as a Web Development Intern, gaining practical experience in designing and developing responsive web applications. Enhanced understanding of front-end development concepts, user interface design, and modern web technologies. Participated in project-based learning activities that improved coding practices, debugging techniques, and software development workflows while developing solutions aligned with real-world requirements.",
    tech: "HTML • CSS • JavaScript • Responsive Design • Web Development",
  },
  {
    company: "Aristotle",
    role: "Web Services Intern • 20 Days",
    description:
      "Completed a Web Services internship focused on understanding cloud computing concepts and modern service-based architectures. Gained practical exposure to AWS and Azure platforms, learning how cloud technologies support application deployment, scalability, and infrastructure management. Explored industry-standard practices related to web services, cloud resources, and digital transformation while strengthening problem-solving and technical skills through hands-on activities.",
    tech: "AWS • Azure • Cloud Computing • Web Services",
  },
];

export default function Internships() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">INTERNSHIPS</h2>

        <div className="internship-list">
          {internships.map((internship) => (
            <div
              key={internship.company}
              className="internship-card glass-card"
            >
              <h3>{internship.company}</h3>

              <p
                style={{
                  marginBottom: "20px",
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                {internship.role}
              </p>

              <p>{internship.description}</p>

              <div className="tech-stack">
                <strong>Tech Stack:</strong>
                <br />
                {internship.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}