import "./skills.css";

function Skills() {

  const categories = [
    {
      title: "Cloud & Data Engineering",
      skills: [
        "Microsoft Azure",
        "Azure Data Factory",
        "PySpark",
        "Azure Databricks",
        "Azure Synapse Analytics",
        "Azure Data Lake Storage Gen2"
      ]
    },
    {
      title: "Data Analytics",
      skills: [
        "SQL",
        "Python",
        "Power BI",
        "Excel",
        "Pandas",
        "Matplotlib"
      ]
    },
    {
      title: "Programming",
      skills: [
        "C++",
        "Python",
        "Object-Oriented Programming",
        "Data Structures & Algorithms"
      ]
    },
    {
      title: "Database",
      skills: [
        "MySQL"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code"
      ]
    }
  ];

  return (
    <div className="skills-page">

      <div className="skills-header">
        <h1>My Skills</h1>
        <p>Technologies I use for Data Engineering and Data Analytics.</p>
      </div>

      {categories.map((category, index) => (
        <div className="category" key={index}>

          <h2>{category.title}</h2>

          <div className="card-container">

            {category.skills.map((skill, i) => (
              <div className="skill-card" key={i}>
                <h3>{skill}</h3>
              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}

export default Skills;