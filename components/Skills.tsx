const skills = [
  {
    title: "Python",
    description:
      "Skilled in Python programming with experience in automation, data analysis, object-oriented programming, and software development.",
  },
  {
    title: "Java",
    description:
      "Leveraging Java to build high-performance applications with clean architecture and strong software engineering fundamentals.",
  },
  {
    title: "SQL",
    description:
      "I enjoy exploring datasets, connecting information, and transforming raw data into clear and actionable insights.",
  },
  {
    title: "Power BI",
    description:
      "Creating dashboards in Power BI helps me turn raw numbers into engaging visual stories that drive understanding.",
  },
  {
    title: "AWS",
    description:
      "My interest in AWS comes from understanding how modern applications are deployed, managed, and scaled in the cloud.",
  },
  {
    title: "Azure",
    description:
      "Exploring Azure allows me to understand how cloud services and intelligent technologies work together to drive innovation.",
  },
  {
    title: "GitHub",
    description:
      "I see GitHub as more than a code repository—it's where I build, share, and showcase my growth as a developer.",
  },
  {
    title: "MongoDB",
    description:
      "I like the flexibility MongoDB offers, allowing me to design and manage data in a way that adapts to different application needs.",
  },
  {
    title: "HTML",
    description:
      "Building with HTML allows me to turn concepts into structured and meaningful web experiences.",
  },
  {
    title: "CSS",
    description:
      "I like bringing designs to life through styling, layouts, and visual details that enhance user experience and creativity.",
  },
  {
    title: "JavaScript",
    description:
      "I use JavaScript to add interactivity and functionality, transforming static pages into dynamic and engaging applications.",
  },
  {
    title: "Linux",
    description:
      "Exploring Linux has strengthened my understanding of operating systems, command-line tools, and system administration concepts.",
  },
];

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="skill-card glass-card"
            >
              <h3>{skill.title}</h3>

              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}