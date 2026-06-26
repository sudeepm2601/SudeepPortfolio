import "./projects.css";
import { Link } from "react-router-dom";

function Projects() {

  const dataEngineering = [
    {
      title: "Azure End-to-End Data Engineering Pipeline",
      tech: "Azure Data Factory • Databricks • Synapse • ADLS Gen2",
      description:
        "Built an end-to-end Azure Data Engineering pipeline for data ingestion, transformation and analytics.",
      github: "#",
      details: "/projects/azure-pipeline",
    },
    {
      title: "Azure Data Factory ETL Pipeline",
      tech: "Azure Data Factory • SQL",
      description:
        "Designed ETL pipelines using Azure Data Factory for automated data movement.",
      github: "#",
      details: "/projects/adf-etl",
    },
  ];

  const dataAnalytics = [
    {
      title: "Revenue Customer Behaviour Intelligence System",
      tech: "Python • Power BI",
      description:
        "Built an interactive Revenue Intelligence dashboard using Power BI.",
      github:
        "https://github.com/sudeepm2601/Revenue-Customer-Behaviour-Intelligence-System_",
      details: "/projects/revenue-dashboard",
    },
    {
      title: "YouTube Analytics Dashboard",
      tech: "SQL • Python • Power BI",
      description:
        "Analyzed YouTube trending videos using SQL, Python and Power BI.",
      github:
        "https://github.com/sudeepm2601/Youtube-Analysis2",
      details: "/projects/youtube-dashboard",
    },
    {
      title: "E-Commerce Sales Dashboard",
      tech: "SQL • Excel • Power BI",
      description:
        "Analyzed e-commerce sales and built business dashboards.",
      github:
        "https://github.com/sudeepm2601/E-Commerce-Sales-Analytics",
      details: "/projects/ecommerce-dashboard",
    },
  ];

  return (
    <section className="projects-page">

      <h1>My Projects</h1>

      {/* Data Engineering */}

      <h2>☁️ Data Engineering</h2>

      <div className="project-grid">

        {dataEngineering.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p>{project.description}</p>

            <div className="buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

              <Link to={project.details}>
                <button className="details-btn">
                  View Details
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

      {/* Data Analytics */}

      <h2>📊 Data Analytics</h2>

      <div className="project-grid">

        {dataAnalytics.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p>{project.description}</p>

            <div className="buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

              <Link to={project.details}>
                <button className="details-btn">
                  View Details
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;