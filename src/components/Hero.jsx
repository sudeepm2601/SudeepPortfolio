import "./Hero.css";
import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h3>Hello 👋, I'm</h3>

        <h1>SUDEEP M</h1>

        <TypeAnimation
          sequence={[
            "Azure Data Engineer",
            2000,
            "Data Analyst",
            2000,
            
            
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          Passionate about building scalable Azure Data Pipelines,
          performing Data Analytics, and creating interactive Power BI
          dashboards.
        </p>

        <div className="hero-buttons">

         <a href="/resume.pdf" download>
  <button>Download Resume</button>
</a>

          <Link to="/projects">
  <button>View Projects</button>
</Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-right">
  <img src={profile} alt="Profile" />
</div>

      </div>

    </section>
  );
}

export default Hero;