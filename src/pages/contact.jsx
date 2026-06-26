import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <h1>Let's Connect</h1>

      <p className="subtitle">
        I'm open to Azure Data Engineering, Data Analytics,
        and Software Engineering opportunities.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>sudeepm7676@gmail.com</p>
        </div>

        <div className="contact-card">
          <h2>💻 GitHub</h2>

          <a
            href="https://github.com/sudeepm2601"
            target="_blank"
            rel="noreferrer"
          >
            github.com/sudeepm2601
          </a>

        </div>

        <div className="contact-card">
          <h2>💼 LinkedIn</h2>

          <a
            href="https://www.linkedin.com/in/sudeep-m-354463373/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>

        </div>

        <div className="contact-card">
          <h2>📍 Location</h2>
          <p>Karnataka, India</p>
        </div>

      </div>

      <div className="resume-section">

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Contact;