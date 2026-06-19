"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = [
      "about",
      "skills",
      "projects",
      "internships",
      "certificates",
      "connect",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "internships", label: "INTERNSHIPS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "connect", label: "CONNECT" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                color:
                  active === item.id
                    ? "#ffffff"
                    : "#9a9a9a",
                fontWeight:
                  active === item.id
                    ? "600"
                    : "400",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}