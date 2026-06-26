import "./CurrentlyLearning.css";

function CurrentlyLearning() {
  const learning = [
    "Azure Data Factory",
    "Azure Databricks",
    "Azure Synapse Analytics",
    "Azure Data Lake Storage Gen2",
    "PySpark",
    "End-to-End Azure Data Engineering"
  ];

  return (
    <section className="learning">

      <h1>Currently Learning</h1>

      <p>
        Continuously expanding my cloud data engineering skills by building
        real-world Azure projects.
      </p>

      <div className="learning-grid">

        {learning.map((item, index) => (
          <div className="learning-card" key={index}>
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default CurrentlyLearning;