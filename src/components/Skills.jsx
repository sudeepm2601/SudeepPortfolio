function Skills() {

    const skills = [
        "Python",
        "SQL",
        "Power BI",
        "Excel",
        "Azure Data Factory",
        "Azure Databricks",
        "Azure Synapse",
        "Azure Data Lake",
        "Pandas",
        "Git",
        "GitHub"
    ];

    return (

        <section
        id="skills"
        className="min-h-screen bg-slate-900 text-white">

            <h2 className="text-5xl font-bold text-center pt-20 text-cyan-400">
                Skills
            </h2>

            <div className="grid grid-cols-3 gap-8 p-16">

                {
                    skills.map((skill)=>(
                        <div
                        key={skill}
                        className="bg-slate-800 p-8 rounded-xl text-center text-xl hover:bg-cyan-500 transition">

                            {skill}

                        </div>
                    ))
                }

            </div>

        </section>

    );

}

export default Skills;