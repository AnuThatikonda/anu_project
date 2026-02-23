export const portfolio = {
  name: "Anu Thatikonda",
  role: "Data Engineer",
  location: "Los Angeles, California",
  relocation: "Open to relocation",
  email: "thatikondaanu14@gmail.com",
  phone: "(716) 547-0915",
  heroSummary:
    "I design and operate production-grade data platforms that turn fast-moving operational data into trusted analytics. My work spans real-time ingestion, cloud-native ELT, dimensional modeling, and data quality automation across banking and life sciences environments.",
  about: [
    "I am a data engineer with 3+ years of experience building analytics-ready data systems in banking and healthcare. I focus on platform reliability, freshness, and downstream usability so analysts and business teams can work with dependable data instead of pipeline noise.",
    "My recent work has centered on event-driven architectures using Kafka, Kinesis, Spark, Snowflake, dbt, and Airflow. I enjoy modernizing legacy batch workflows into scalable streaming or near-real-time pipelines and pairing that work with strong testing, schema validation, and CI/CD practices."
  ],
  metrics: [
    { label: "Years of experience", value: "3+" },
    { label: "Daily events processed", value: "50M+" },
    { label: "Largest daily volume", value: "200GB+" },
    { label: "Latency improvement", value: "6h → <20m" }
  ],
  experience: [
    {
      company: "Citigroup (Citi)",
      title: "Data Engineer II",
      location: "Remote",
      period: "Mar 2025 - Present",
      summary:
        "At Citi, I build real-time financial data pipelines on AWS and Snowflake that support reporting and near-real-time analytics for high-volume transaction workflows. The focus is operational resilience, low-latency data delivery, and data models that business teams can trust.",
      highlights: [
        "Designed and operated a streaming pipeline (Kinesis, Glue Streaming, Python, SQL, Snowflake) processing more than 50 million daily events while maintaining sub-60 second latency and 99.98% SLA uptime.",
        "Reduced data freshness lag from six hours to under twenty minutes by replacing legacy batch ETL with an event-driven ELT pattern using AWS Lambda and dbt.",
        "Built an extensible dbt modeling layer with 80+ dimensional models across staging, intermediate, and mart layers, improving consistency for reporting teams and analytics consumers.",
        "Improved Snowflake query performance by 35% through query-plan analysis, SQL tuning, clustering refinements, and dbt materialization changes.",
        "Embedded data quality into delivery workflows using Great Expectations and dbt tests, integrated with GitHub Actions CI/CD and Dockerized Airflow on AWS MWAA.",
        "Partnered with analytics, engineering, and business teams to define data contracts and shared model ownership standards that were adopted by three reporting teams."
      ]
    },
    {
      company: "AstraZeneca",
      title: "Data Engineer",
      location: "Hyderabad, India",
      period: "Jan 2021 - Jul 2023",
      summary:
        "At AstraZeneca, I supported and expanded a GCP-based life sciences data warehouse used for clinical trial reporting. My work emphasized reliable ingestion from diverse source systems, faster transformation pipelines, and reusable data models for biostatistics and operations teams.",
      highlights: [
        "Improved warehouse reliability and orchestration coverage for clinical reporting across five therapeutic areas using Cloud Composer (Airflow) and Python-based DAGs in GxP-aligned workflows.",
        "Unified more than twelve heterogeneous sources, including EHR, lab, genomics, and clinical operations systems, into BigQuery through GCS, Dataflow, and PySpark-based processing pipelines handling 200GB+ per day.",
        "Reduced genomic data processing time from over four hours to under ninety minutes by re-engineering pandas workflows into optimized PySpark pipelines on Dataproc with Spark Structured Streaming.",
        "Developed conformed clinical dimensional models in dbt on BigQuery, enabling self-service analytics for 15+ biostatisticians across study, site, patient, treatment arm, and adverse event domains.",
        "Delivered near-real-time clinical KPI pipelines using Kafka, Pub/Sub, Dataflow, and BigQuery to power dashboards for enrollment, safety signals, and protocol deviations.",
        "Implemented enterprise-grade data quality checks with dbt tests and Great Expectations, and supported reproducible feature pipelines on Databricks with Delta Lake and MLflow."
      ]
    }
  ],
  skills: [
    {
      category: "Languages & Engineering",
      items: ["Python", "SQL", "PySpark", "Shell Scripting", "Git", "Docker", "GitHub Actions"]
    },
    {
      category: "Cloud & Data Platforms",
      items: [
        "AWS (Kinesis, Glue, Lambda, S3, MWAA)",
        "GCP (BigQuery, Dataflow, Dataproc, GCS, Cloud Composer)",
        "Snowflake",
        "Databricks"
      ]
    },
    {
      category: "Streaming & Orchestration",
      items: ["Apache Kafka", "Spark Structured Streaming", "Apache Airflow", "Cloud Composer"]
    },
    {
      category: "Modeling & Transformation",
      items: ["dbt Core", "Dimensional Modeling", "Delta Lake", "ELT Design", "Schema Validation"]
    },
    {
      category: "Data Quality & Warehousing",
      items: ["Great Expectations", "dbt Tests", "Snowflake", "BigQuery", "PostgreSQL"]
    },
    {
      category: "Analytics & Reporting",
      items: ["Tableau", "Power BI", "Executive Dashboards", "KPI Reporting"]
    }
  ],
  education: {
    degree: "Master of Professional Studies in Data Science",
    institution: "University at Buffalo - SUNY",
    date: "Feb 2025"
  }
} as const;
