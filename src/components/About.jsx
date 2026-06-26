function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 text-white flex flex-col justify-center items-center px-10"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-8">
        About Me
      </h2>

      <p className="max-w-4xl text-xl text-center leading-9">
        I'm Sudeep M, an Electronics and Communication Engineering graduate
        passionate about Data Engineering and Data Analytics. I enjoy building
        scalable Azure data pipelines, performing data analysis using SQL and
        Python, and creating interactive Power BI dashboards that help businesses
        make better decisions.
      </p>
    </section>
  );
}

export default About;