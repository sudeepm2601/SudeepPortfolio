import "./ProjectDetails.css";

import revenue1 from "../../assets/projects/Revenue Customer Behaviour/revenue1.png";
import revenue2 from "../../assets/projects/Revenue Customer Behaviour/revenue2.png";

function RevenueDashboard() {
  return (
    <div className="project-details">

      <h1>Revenue Customer Behaviour Intelligence System</h1>

      <p className="tech">
        Python • Power BI
      </p>

      <h2>Dashboard</h2>

      <div className="dashboard-grid">

        <img src={revenue1} alt="Revenue Dashboard" />

        <img src={revenue2} alt="Product Dashboard" />

      </div>

      <div className="section">

        <h2>Description</h2>

        <ul>

          <li>
            Built an end-to-end Revenue Customer Behaviour Intelligence
            System using Python and Power BI.
          </li>

          <li>
            Cleaned and transformed sales data for accurate business
            analysis and reporting.
          </li>

          <li>
            Designed interactive dashboards to analyze revenue,
            customer behaviour and product performance.
          </li>

          <li>
            Generated valuable business insights using KPIs,
            charts and visual analytics.
          </li>

        </ul>

      </div>

      <div className="section">

        <h2>Key Results</h2>

        <div className="result-grid">

          <div className="result-card">
            <h3>17.37M</h3>
            <p>Total Revenue</p>
          </div>

          <div className="result-card">
            <h3>37K+</h3>
            <p>Customer Orders</p>
          </div>

          <div className="result-card">
            <h3>11M+</h3>
            <p>Quantity Sold</p>
          </div>

          <div className="result-card">
            <h3>Top Products</h3>
            <p>Identified Best Sellers</p>
          </div>

        </div>

      </div>

      <a
        href="https://github.com/sudeepm2601/Revenue-Customer-Behaviour-Intelligence-System_"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View GitHub Repository
      </a>

    </div>
  );
}

export default RevenueDashboard;