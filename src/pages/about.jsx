import "./about.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-header">

        <h1>About Me</h1>

        <p>
          Passionate about Data Engineering and Data Analytics.
        </p>

      </div>

      <div className="about-content">

       
        <div className="about-text">

          <h2>Hi, I'm Sudeep 👋</h2>

          <p>
            I am an Electronics and Communication Engineering graduate
            with a strong interest in Azure Data Engineering and Data
            Analytics.
          </p>

          <p>
            I enjoy building ETL pipelines, analyzing datasets,
            creating Power BI dashboards, and transforming raw
            data into meaningful business insights.
          </p>

          <p>
            Currently I'm expanding my skills in Azure Data Factory,
            Azure Databricks, Azure Synapse Analytics, SQL and Python.
          </p>

          <h2 className="timeline-title">My Journey</h2>

<div className="timeline">

  <div className="timeline-item">
    <div className="timeline-year">2022</div>
    <div className="timeline-content">
      <h3>Started B.E. in Electronics & Communication Engineering</h3>
      <p>Joined Siddaganga Institute of Technology, Tumakuru.</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-year">2023</div>
    <div className="timeline-content">
      <h3>Built Strong Programming Fundamentals</h3>
      <p>Learned C++, Object-Oriented Programming (OOP), and Data Structures & Algorithms (DSA), strengthening my problem-solving skills.</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-year">2024</div>
    <div className="timeline-content">
      <h3>Started Learning Data Analytics</h3>
      <p>Learned SQL, Python, Excel, Power BI, Pandas, and built data analytics projects.</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-year">2025</div>
    <div className="timeline-content">
      <h3>Built Real-World Projects</h3>
      <p>Developed Revenue Intelligence Dashboard, YouTube Analytics Dashboard, and E-Commerce Sales Analytics projects.</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-year">2026</div>
    <div className="timeline-content">
      <h3>Learning Azure Data Engineering</h3>
      <p>Learning Azure Data Factory, Azure Databricks, Azure Synapse Analytics, ADLS Gen2, and building end-to-end Azure data engineering projects.</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-year">Goal</div>
    <div className="timeline-content">
      <h3>Azure Data Engineer & Data Analyst</h3>
      <p>Seeking opportunities to build scalable cloud data solutions and deliver business insights through data analytics.</p>
    </div>
  </div>

</div>

        </div>

      </div>

    </div>
  );
}

export default About;