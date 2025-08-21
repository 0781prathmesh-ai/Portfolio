import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header>
        <h1>Prathmesh Doiphode</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern, responsive, and user-friendly web applications.</p>
      </header>

      {/* Skills Section */}
      <section className="skills-section">
        <h3>Skills</h3>
        <div className="skills">
          {[
            "Teamwork & Collaboration",
            "Quick Learner",
            "Problem Solving",
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Git",
            "GitHub",
            "Node.js",
            "Prompt Design",
          ].map((skill) => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h3>Projects</h3>
        <div className="project">
          <h4>SkillTracker</h4>
          <p>
            A web app to track skills progress, built using React.js. 
            Features include progress tracking and a clean dashboard UI.
          </p>
        </div>
        <div className="project">
          <h4>DevConnect</h4>
          <p>
            A social platform for developers to share projects and connect,
            featuring authentication and responsive UI.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h3>Contact Me</h3>
        <p>Email: <a href="mailto:prathmeshdoiphode240@gmail.com">prathmeshdoiphode240@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/0781prathmesh-ai" target="_blank" rel="noreferrer">0781prathmesh-ai</a></p>
      </section>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Prathmesh Doiphode. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
