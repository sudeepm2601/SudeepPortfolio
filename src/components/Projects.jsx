function Projects() {

  const projects = [
    {
      title: "Azure End-to-End Data Engineering",
      description:
        "Built an end-to-end Azure data pipeline using Azure Data Factory, ADLS Gen2, Databricks, Synapse Analytics and Power BI.",
      tech: "Azure | ADF | Databricks | Synapse | Power BI"
    },

    {
      title: "Revenue Intelligence Dashboard",
      description:
        "Analyzed sales data and created an interactive Power BI dashboard with KPIs and business insights.",
      tech: "Python | SQL | Power BI"
    },

    {
      title: "YouTube Analytics Dashboard",
      description:
        "Built an analytics dashboard to visualize trending videos, engagement metrics and category-wise insights.",
      tech: "Python | SQL | Power BI"
    },

    {
      title: "E-Commerce Sales Analytics",
      description:
        "Performed SQL analysis and created dashboards to identify revenue trends and customer behavior.",
      tech: "SQL | Excel | Power BI"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-800 text-white py-20 px-10"
    >

      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:scale-105 duration-300"
          >

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-5">
              {project.description}
            </p>

            <p className="text-cyan-400 font-semibold mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4">

              <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600">
                GitHub
              </button>

              <button className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500">
                Live Demo
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;