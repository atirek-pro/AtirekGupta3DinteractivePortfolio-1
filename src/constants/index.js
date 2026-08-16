export const myProjects = [
  {
    id: 1,
    title: "Product Approval Agentic System",
    description:
      "A Reflection-based multi-agent AI system for Disney Worldwide Services that automates product approval by extracting and validating compliance rules from product guidelines.",
    subDescription: [
      "Architected a VLM-based multi-agent system to extract and validate business rules from scanned PDFs using Reflection and LLM-as-a-Judge. Built confidence-based Human-in-the-Loop approval and orchestrated the workflow with Apache Airflow.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/product-approval.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "VLMs",
        path: "/assets/logos/multimodal-vlm-logo.svg",
      },
      {
        id: 3,
        name: "Airflow",
        path: "/assets/logos/AirflowLogo.svg",
      },
      {
        id: 4,
        name: "Google Cloud",
        path: "/assets/logos/gcp.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Enterprise Reference-based RAG Chatbot",
    description:
      "Enterprise RAG chatbot delivering reference-backed responses using hybrid retrieval and metadata-based document referencing.",
    subDescription: [
      "Built a RAG pipeline with PGVector, Azure OpenAI, LangChain, and FastAPI.",
      "Implemented hybrid dense + sparse retrieval with traceable document references. Replaced Azure AI Search with PGVector, reducing infrastructure costs by 88%.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "LangChain",
        path: "/assets/logos/Langchain.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/Fastapi.svg",
      },
      {
        id: 3,
        name: "PGVector",
        path: "/assets/logos/Postgresql.svg",
      },
      {
        id: 4,
        name: "Azure OpenAI",
        path: "/assets/logos/azure.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Semantic Loss Fine-Tuning for Causal Reasoning",
    description:
      "Research project using semantic loss and graph-based constraints to prevent model collapse during causal reasoning fine-tuning.",
    subDescription: [
      "Fine-tuned Gemma 3 270M with LoRA for transitivity and d-separation tasks.",
      "Developed semantic loss with dynamic lambda scheduling and graph-based constraints.",
      "Evaluated 200K+ samples with adversarial benchmarks, achieving 42.7% improvement over collapsed baselines.",
    ],

    href: "",
    logo: "",
    image: "/assets/projects/Sematic loss project.png",
    tags: [
      {
        id: 1,
        name: "PyTorch",
        path: "/assets/logos/pytorch-icon.svg",
      },
      {
        id: 2,
        name: "LLMs",
        path: "/assets/logos/gemma-color.svg",
      },
      {
        id: 3,
        name: "LoRA",
        path: "/assets/logos/Hugging-Face.svg",
      },
      {
        id: 4,
        name: "Deep Learning",
        path: "/assets/logos/DeepLearning.png",
      },
    ],
  },
  {
    id: 4,
    title: "Automating Trading Strategies",
    description:
      "A machine learning system designed to predict profitable and non-profitable trading opportunities using feature engineering, machine learning, and deep learning.",
    subDescription: [
      "Developed a classification-based system for evaluating trading opportunities using historical market data. Applied Machine Learning and Deep Learning techniques to automate trading strategy evaluation.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Automation Trading Project.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "Machine Learning",
        path: "/assets/logos/google-tensorflow-icon.svg",
      },
      {
        id: 3,
        name: "Deep Learning",
        path: "/assets/logos/pytorch-icon.svg",
      },
      {
        id: 4,
        name: "Data Science",
        path: "/assets/logos/Matplotlib.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919992793448?text=Hello!%20I%20would%20like%20to%20connect.",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/atirek-gupta-65a5941b5/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/aibyatirek",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Senior AI Engineer",
    job: "HCLTech",
    date: "April 2025 - Present",
    contents: [
      "Architected the complete HLD, LLD, and system architecture for an Agentic AI platform that automated Disney Product Approval by extracting and validating packaging and style guide rules against licensed product submissions.",
      "Designed and developed a multi-phase Reflection-based Agentic workflow using Vision Language Models, Python, LiteLLM, and Apache Airflow deployed on Google Cloud Platform.",
      "Built an intelligent document understanding pipeline for scanned Style Guide and Packaging Guide PDFs using layout metadata, VLM-generated bounding boxes, automated figure extraction, and structured business rule extraction.",
      "Implemented an LLM-as-a-Judge Reflection Agent that evaluated extracted rules, generated corrective feedback, and iteratively regenerated low-confidence rules until quality thresholds were reached.",
      "Developed rule classification and approval workflows with HIGH, MEDIUM, and LOW confidence levels, routing uncertain outputs through Human-in-the-Loop review.",
      "Built the complete LLM System Specification, prompt engineering strategy, structured output schemas, agent interactions, and workflow architecture for enterprise-scale document intelligence.",
    ],
  },
  {
    title: "AI Engineer",
    job: "Channel Fusion",
    date: "October 2024 - April 2025",
    contents: [
      "Developed a cost-efficient RAG-based chatbot with response reference capabilities for John Deere using PGVector, Azure OpenAI, LangChain, and FastAPI.",
      "Replaced Azure AI Search with PostgreSQL, reducing infrastructure costs by 88%.",
      "Eliminated Azure Blob Storage and Event Grid dependencies by accessing PDFs in base64 format, achieving a 100% reduction in storage service costs.",
      "Developed a Video Tag Generator using a Multi-Modal LLM to analyze images and generate accurate tags without manual dataset labeling or model training.",
      "Reduced operational and cost overhead for video tagging by 50% through the use of Multi-Modal LLMs and optimized processing pipelines.",
      "Implemented a frame similarity model using ResNet to extract and compare frame features while storing only unique frames for analysis.",
    ],
  },
  {
    title: "Chatbot Developer",
    job: "GravitasAI",
    date: "August 2023 - October 2024",
    contents: [
      "Designed and implemented the complete AI infrastructure for a startup, including an automatic resume builder, AI-powered chatbot, and AI interviewer.",
      "Deployed AI solutions to production using AWS Lambda, OpenAI models, Supabase Vector Database, and LangChain.",
      "Achieved 70% growth in chatbot development using Generative AI, Open-source models, OpenAI LLMs, and vector embeddings.",
      "Developed and deployed chatbots using AWS Lex and AWS Lambda for client websites.",
      "Introduced voice capabilities into chatbot systems, improving user experience by 40%.",
      "Developed an Invoice NER system using image segmentation, spaCy, NER, and Streamlit to extract structured information from invoices.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    job: "Seasia Infotech",
    date: "May 2022 - August 2023",
    contents: [
      "Developed a website chatbot for lead collection, client query handling, and portfolio presentation using OpenAI, vector embeddings, vector databases, RASA, and NLP.",
      "Developed an automated stock trading strategy evaluation system using exploratory data analysis, feature engineering, Machine Learning, and Deep Learning.",
      "Led the development of a recommendation system that contributed to a 60% improvement in the client's overall sales.",
      "Worked closely with sales and marketing teams to translate client requirements into technical solutions and ensure product delivery.",
    ],
  },
];

export const reviews = [
  {
    name: "Mike",
    username: "Disney Worldwide Services",
    body: "Atirek built a robust AI system that automated complex product approval workflows and significantly reduced the manual effort involved in compliance validation.",
    img: "https://robohash.org/mike",
  },
  {
    name: "John",
    username: "John Deere",
    body: "The RAG solution delivered accurate, reference-backed answers while the optimized architecture helped us reduce infrastructure costs significantly.",
    img: "https://robohash.org/john",
  },
  {
    name: "Sajjad-Vapzer",
    username: "Machine Learning Project",
    body: "Atirek developed a practical ML solution that automated trading strategy evaluation and helped turn complex market data into actionable predictions.",
    img: "https://robohash.org/sajjad-vapzer",
  },
  {
    name: "Saubrah",
    username: "Happy People AI",
    body: "Atirek understood the problem quickly and turned it into a reliable AI solution with a strong focus on both performance and real-world usability.",
    img: "https://robohash.org/saubrah",
  },
];
