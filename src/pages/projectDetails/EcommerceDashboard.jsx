import "./ProjectDetails.css";

import ecommerce from "../../assets/projects/E-commerce db.png";

function EcommerceDashboard() {
  return (
    <div className="project-details">

      <h1>E-Commerce Sales Analytics Dashboard</h1>

      <p className="tech">
        SQL • Excel • Power BI
      </p>

      <h2>Dashboard</h2>

      <div className="dashboard-grid">
        <img src={ecommerce} alt="E-Commerce Dashboard" />
      </div>

      <div className="section">

        <h2>Description</h2>

        <ul>

          <li>
            Developed an interactive E-Commerce Sales Analytics
            Dashboard using SQL, Excel and Power BI.
          </li>

          <li>
            Analyzed sales performance, product categories and customer
            purchasing trends.
          </li>

          <li>
            Built dashboards to monitor revenue, profit and regional
            sales performance.
          </li>

          <li>
            Generated insights to support business decisions through
            data visualization.
          </li>

        </ul>

      </div>

      <div className="section">

        <h2>Key Results</h2>

        <div className="result-grid">

          <div className="result-card">
            <h3>1000+</h3>
            <p>Sales Records</p>
          </div>

          <div className="result-card">
            <h3>Top Products</h3>
            <p>Identified</p>
          </div>

          <div className="result-card">
            <h3>Regional Sales</h3>
            <p>Analyzed</p>
          </div>

          <div className="result-card">
            <h3>Interactive Dashboard</h3>
            <p>Built</p>
          </div>

        </div>

      </div>

      <a
        href="https://github.com/sudeepm2601/E-Commerce-Sales-Analytics"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View GitHub Repository
      </a>

    </div>
  );
}

export default EcommerceDashboard;