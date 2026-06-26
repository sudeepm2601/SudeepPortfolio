import "./ProjectDetails.css";

import youtube from "../../assets/projects/youtube analytics db.png";

function YoutubeDashboard() {
  return (
    <div className="project-details">

      <h1>YouTube Analytics Dashboard</h1>

      <p className="tech">
        SQL • Python • Power BI
      </p>

      <h2>Dashboard</h2>

      <div className="dashboard-grid">
        <img src={youtube} alt="YouTube Dashboard" />
      </div>

      <div className="section">

        <h2>Description</h2>

        <ul>

          <li>
            Built a YouTube Analytics Dashboard using SQL, Python and
            Power BI.
          </li>

          <li>
            Processed trending YouTube data to analyze video
            performance and engagement.
          </li>

          <li>
            Created interactive visualizations for views, likes,
            comments and categories.
          </li>

          <li>
            Identified top-performing videos and channel insights using
            data analytics.
          </li>

        </ul>

      </div>

      <div className="section">

        <h2>Key Results</h2>

        <div className="result-grid">

          <div className="result-card">
            <h3>1000+</h3>
            <p>Videos Analyzed</p>
          </div>

          <div className="result-card">
            <h3>10+</h3>
            <p>Interactive Visuals</p>
          </div>

          <div className="result-card">
            <h3>Top Categories</h3>
            <p>Identified</p>
          </div>

          <div className="result-card">
            <h3>Business Insights</h3>
            <p>Generated</p>
          </div>

        </div>

      </div>

      <a
        href="https://github.com/sudeepm2601/Youtube-Analysis2"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View GitHub Repository
      </a>

    </div>
  );
}

export default YoutubeDashboard;