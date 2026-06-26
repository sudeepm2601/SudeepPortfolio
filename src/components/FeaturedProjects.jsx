import "./FeaturedProjects.css";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  const projects = [
    {
      title: "Azure Data Engineering",
      tech: "ADF • Databricks • Synapse",
    },
    {
      title: "Revenue Intelligence",
      tech: "Python • SQL • Power BI",
    },
    {
      title: "YouTube Analytics",
      tech: "Python • SQL • Power BI",
    },
  ];

  return (
    <section className="featured-projects">

      <h2>Featured Projects</h2>

      <div className="project-grid">

        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <h3>{project.title}</h3>

            <p>{project.tech}</p>

          </div>
        ))}

      </div>

      <Link to="/projects" className="view-all">
        View All Projects →
      </Link>

    </section>
  );
}

export default FeaturedProjects;