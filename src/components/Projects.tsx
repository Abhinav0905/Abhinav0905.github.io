import { useState } from 'react';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.js';
import Github from 'lucide-react/dist/esm/icons/github.js';
import resumeParserImg from '../assets/images/projects/resume_parser_pro.jpeg';
import jiraAIImg from '../assets/images/projects/JiraAI.png';
import releaseNoteImg from '../assets/images/projects/Release_Note.png';
import jobGenieImg from '../assets/images/projects/JobGenie - Job Finder.png';
import pythonBookImg from '../assets/images/projects/Python Book.png';
import sqlConverterImg from '../assets/images/projects/Natural Language to SQL.png';
import supplierScoreImg from '../assets/images/projects/Predecitive Supplier Score Card.png';
import ticketPredictorImg from '../assets/images/projects/Ticket Predictor.png';
import RentAssistant from '../assets/images/projects/RentAssistant.png';
import JiraDCIM from '../assets/images/projects/JiraDCIM.png';
import dentalAssistantImg from '../assets/images/projects/Voice AI Dental Assistant.jpg';
import tremorCareImg from '../assets/images/projects/TremorCare Finger Movement.jpg';
import dharamsalaRescueImg from '../assets/images/projects/Dharamsala Animal Rescue Chatbot.jpg';
import gaiaTsavoImg from '../assets/images/projects/Gaia Tsavo Wildlife Dashboard.svg';

type ProjectStatus = 'completed' | 'in-progress' | 'planning' | 'poc';
type ProjectCategory = 'healthcare-ai' | 'ngo-social-impact' | 'data-analytics' | 'ml-ai' | 'process-automation' | 'api' | 'other';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: ProjectStatus;
  category: ProjectCategory;
  highlights?: string[];
  impactArea?: string;
  partnerType?: string;
  spotlight?: boolean;
}

const projects: Project[] = [
  {
    title: 'Voice AI Agent Dental Assistant',
    description: 'Built a production-shaped AI receptionist for dental practices that handles web chat and Twilio-compatible voice workflows through the same scheduling, knowledge-base, and booking logic. The assistant answers clinic questions, collects patient details, confirms appointments, protects against double booking, routes urgent symptoms, and gives staff an admin dashboard for appointments, inquiries, and editable clinic knowledge.',
    image: dentalAssistantImg,
    technologies: ['TypeScript', 'React', 'Express', 'OpenAI Responses API', 'Twilio Voice', 'SQLite', 'Zod'],
    status: 'completed',
    category: 'healthcare-ai',
    github: 'https://github.com/Abhinav0905/Voice_AiAgent_Dental_Assistant',
    demo: 'https://www.youtube.com/watch?v=C3C-Cbbdomw',
    impactArea: 'Healthcare Operations',
    partnerType: 'Clinic Workflow Automation',
    spotlight: true,
    highlights: [
      'Designed a confirmation-first booking flow where the AI interprets intent but server-side rules own scheduling truth',
      'Implemented appointment availability, patient intake, urgent concern routing, inquiry capture, and admin knowledge-base editing',
      'Built deterministic fallback behavior for reliable demos and CI when no OpenAI key is configured'
    ]
  },
  {
    title: 'TremorCare: Finger Movement Clinical Review App',
    description: 'Developed a camera-based clinician-review application that measures bilateral finger movement and tremor frequency in Hertz using MediaPipe hand landmarks, FastAPI, and a deterministic movement-analysis engine. The app supports rest, postural, and action tremor protocols, 10-epoch capture, MDS-aligned reference comparison, asymmetry flags, and doctor signal dispatch.',
    image: tremorCareImg,
    technologies: ['FastAPI', 'MediaPipe Hands', 'Python', 'Computer Vision', 'Signal Processing', 'MDS Tremor Taxonomy'],
    status: 'completed',
    category: 'healthcare-ai',
    github: 'https://github.com/Abhinav0905/finger_movement_medical_app',
    demo: 'https://www.youtube.com/watch?v=ejX0bm4KiaA',
    impactArea: 'Clinical Decision Support',
    partnerType: 'Healthcare AI MVP',
    spotlight: true,
    highlights: [
      'Measures dominant tremor frequency, rhythm irregularity, movement amplitude, and left-right asymmetry for clinician review',
      'Includes live camera capture and stage-safe synthetic demo mode for reliable presentations',
      'Uses safety positioning throughout: measurement support only, not diagnosis or treatment'
    ]
  },
  {
    title: 'Dharamsala Animal Rescue AI Chatbot',
    description: 'Built an AI-powered rescue intake and vision triage system for NGO field workflows. The chatbot reviews uploaded animal photos for distress signals, uses EXIF or browser location to verify service-area eligibility, provides safe rescue guidance, detects duplicate reports, logs severity, and can escalate high-risk cases to rescue staff.',
    image: dharamsalaRescueImg,
    technologies: ['Python', 'FastAPI', 'OpenAI Vision', 'RAG', 'Chroma', 'Pinecone', 'Twilio WhatsApp', 'Slack Alerts'],
    status: 'completed',
    category: 'ngo-social-impact',
    github: 'https://github.com/Abhinav0905/Dog_Identifier_ChatBot',
    demo: 'https://youtu.be/_7xBCLXIK7U',
    impactArea: 'NGO Animal Rescue',
    partnerType: 'Dharamsala Field Operations',
    spotlight: true,
    highlights: [
      'Combines vision analysis, location-aware intake, RAG guidance, duplicate detection, and automated escalation',
      'Supports strict jurisdiction gating so rescue triage stays aligned to the NGO service area',
      'Includes WhatsApp intake flow for field-ready reporting from mobile users'
    ]
  },
  {
    title: 'Gaia AI: Tsavo Wildlife Conservation Dashboard',
    description: 'Supporting Gaia AI with deployment and YOLO model fine-tuning for Kenya wildlife detection. The dashboard turns camera-trap uploads into conservation intelligence for Tsavo field teams, including detected animals, species counts, activity patterns, model comparison, reports, and alerting workflows for practical field review.',
    image: gaiaTsavoImg,
    technologies: ['YOLO Fine-Tuning', 'Computer Vision', 'Model Deployment', 'Wildlife Detection', 'Dashboarding', 'AWS EC2'],
    status: 'in-progress',
    category: 'ngo-social-impact',
    impactArea: 'NGO Conservation AI',
    partnerType: 'Gaia AI / Kenya Wildlife',
    spotlight: true,
    highlights: [
      'Helping move wildlife detection from model experimentation toward a deployable field dashboard',
      'Fine-tuning YOLO workflows for camera-trap images and species-level monitoring',
      'Designed for conservation users who need operational metrics, not just model predictions'
    ]
  },
  {
    title: 'Small Language Model from Scratch',
    description: 'Architected and trained a GPT-style transformer with 15.2M parameters in PyTorch, including token preprocessing, custom batching, optimized Apple M2 training, and an interactive generation interface with temperature and top-k controls.',
    image: pythonBookImg,
    technologies: ['PyTorch', 'Transformers', 'Python', 'LLM Training', 'Tokenization'],
    status: 'completed',
    category: 'ml-ai',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7382074871822032896/',
    highlights: [
      'Built the training loop and inference workflow from scratch',
      'Achieved 97% accuracy and 1.03 perplexity on a domain-specific generation task',
      'Optimized training with gradient accumulation, mixed precision, and thermal management'
    ]
  },
  {
    title: 'JIRA Ticket Analysis Dashboard with NLP',
    description: 'Developed an advanced Python-based analytics dashboard using Streamlit that leverages OpenAI\'s GPT for AI-powered ticket categorization, interactive Plotly visualizations, and real-time JIRA REST API integration. Engineered robust features including efficient caching, enterprise-grade security with rate limiting, and a natural language query interface to deliver dynamic insights into ticket trends and category distribution.',
    image: jiraAIImg,
    technologies: ['Python', 'NLP', 'Machine Learning', 'Jira API', 'scikit-learn'],
    status: 'completed',
    category: 'ml-ai',
    github: 'https://github.com/Abhinav0905/JIraAI/tree/master',
    demo: 'https://youtu.be/Q0Y3vWwFT_E',
    highlights: [
      'Reduced ticket triage time by ~25%',
      'Implemented secure rate-limiting for enterprise use',
      'Increased visibility into ticket trends and category distribution'
    ]
  },
  {
    title: 'RentAI: WhatsApp Rental Agreement Assistant',
    description: 'Built an intelligent WhatsApp assistant that translates complex rental agreements into plain English, allowing tenants to easily understand their legal rights and obligations without needing to consult a lawyer. The system uses OpenAI\'s Agentic SDK to process natural language queries about lease terms, providing clear answers with section references directly through WhatsApp.',
    image: RentAssistant, 
    technologies: ['OpenAI', 'Agentic AI', 'Vector Database', 'WhatsApp API', 'Twilio', 'Document Intelligence'],
    status: 'completed',
    category: 'ml-ai',
    github: 'https://github.com/Abhinav0905/Rent_Assistant_Agent',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7314569381001285632/',
    highlights: [
      'Empowers tenants by making legal information accessible 24/7',
      'Processes natural language queries like "What\'s the pet policy?"',
      'Provides clear answers with section references from lease documents',
      'Future roadmap includes maintenance ticket submission via WhatsApp'
    ]
  },
  {
    title: 'Automated Release Notes Generator',
    description: 'Created a tool to automatically generate comprehensive release notes by analyzing remediation plans and Jira comments for each release, presenting them in a customer-friendly format. This solution streamlines the release documentation process and ensures consistency in release communications. Saving the team 50% of the time spent on manual release note writing.',
    image: releaseNoteImg,
    technologies: ['Python', 'Jira API', 'NLP'],
    status: 'completed',
    category: 'process-automation',
    highlights: [
      'Standardized release documentation process',
      'Cut manual release-note writing time by 50%',
      'Ensured consistent release communication across teams'
    ],
    github: 'https://github.com/Abhinav0905/AI-Release-Note-Generator'
  },
  {
    title: 'Resume Parser Pro',
    description: 'A PyPI package that extracts information from resumes using regex. Published this package on PyPI, making it available for public use.',
    image: resumeParserImg,
    technologies: ['Python', 'FastAPI'],
    status: 'completed',
    category: 'other',
    github: 'https://github.com/Abhinav0905/resume_parser_pro'
  },
  {
    title: 'Natural Language to SQL Converter',
    description: 'Built a natural language processing system using Agentic AI that converts plain English queries into SQL statements, enabling non-technical users to query databases using everyday language. The autonomous agent understands context, refines queries, and handles complex database relationships to produce accurate SQL statements across multiple database schemas.',
    image: sqlConverterImg,
    technologies: ['Python', 'NLP', 'SQL', 'Transformers', 'FastAPI'],
    status: 'completed',
    category: 'ml-ai',
    github: 'https://github.com/Abhinav0905/GayaAi_Text-to-SQL',
    highlights: [
      'Democratized data access for non-technical stakeholders',
      'Supports complex queries & multiple DB schemas'
    ]
  },
  {
    title: 'Predictive Supplier Score Card',
    description: 'Developing an AI-powered system to predict supplier performance metrics and generate comprehensive scorecards. Uses historical data and machine learning to forecast supplier reliability and quality.',
    image: supplierScoreImg,
    technologies: ['Python', 'Machine Learning', 'Data Analytics', 'Dashboard'],
    status: 'in-progress',
    category: 'ml-ai',
    github: '',
    highlights: [
      'Aims to reduce supply chain risks',
      'Early detection of underperforming suppliers'
    ]
  },
  {
    title: 'JobGenie - LinkedIn Job Finder with AI',
    description: 'Building an intelligent job search assistant that uses AI to match candidates with LinkedIn job postings. Analyzes job descriptions and user profiles to provide personalized job recommendations.',
    image: jobGenieImg,
    technologies: ['Python', 'AI', 'LinkedIn API', 'Machine Learning'],
    status: 'in-progress',
    category: 'ml-ai',
    github: '',
    highlights: [
      'Targets higher applicant-job matching accuracy',
      'Potential to streamline job hunting process'
    ]
  },
  {
    title: 'Python Book: Beginner to Intermediate',
    description: 'In Planning stage, A comprehensive Python programming book covering fundamental to intermediate concepts with practical examples and real-world applications.',
    image: pythonBookImg,
    technologies: ['Python', 'Technical Writing', 'Education'],
    status: 'planning',
    category: 'other',
    github: '',
    highlights: [
      'Aims to guide new developers through hands-on examples',
      'Will include real-world case studies'
    ]
  },
  {
    title: 'JIRA Ticket Escalation Predictor',
    description: 'Proof of concept for a deep learning model that predicts which Jira tickets are likely to require escalation based on ticket comment & content analysis.',
    image: ticketPredictorImg,
    technologies: ['Python', 'Deep Learning', 'Jira API', 'Data Analysis'],
    status: 'poc',
    category: 'ml-ai',
    github: 'https://github.com/Abhinav0905/Jira_Tickets_Sentiment_Analysis',
    highlights: [
      'Helps support teams proactively manage high-risk tickets',
      'Utilizes sentiment analysis to gauge escalation likelihood'
    ]
  },
  {
    title: "Data Center Infrastructure Risk Management & Predictive Analytics Dashboard",
    description: "Engineered an advanced real-time risk management system for data center operations that seamlessly integrates JIRA tracking with infrastructure metrics. The system polls JIRA every 60 seconds to analyze issue comments, leveraging GPT-4.1 for intelligent risk classification and automated P50/P90 delivery forecasting. Implemented Monte Carlo simulations for precise risk assessment, while monitoring critical infrastructure metrics through SNMP/IPMI integration. This comprehensive solution enables proactive risk mitigation and optimized resource allocation across data center operations.",
    image: JiraDCIM,
    technologies: ["Python", "JIRA API", "SQLAlchemy", "GPT-4", "Monte Carlo", "SNMP", "IPMI"],
    status: 'completed',
    category: 'ml-ai',
    github: 'https://github.com/Abhinav0905/DCIM_Risk_Management',
    demo: 'https://www.linkedin.com/posts/abhinav-kumar-2b0752169_whentechprojectdelaysmeetdatacenterinventory-activity-7142190124510478336-ZIAY',
    highlights: [
      'Real-time risk analysis and forecasting',
      'Integrates with data center infrastructure metrics',
      'Utilizes advanced Monte Carlo simulations for risk assessment'
    ]
  }
];

const statusColors = {
  'completed': 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'planning': 'bg-blue-100 text-blue-800',
  'poc': 'bg-purple-100 text-purple-800'
};

const categoryLabels: Record<ProjectCategory, string> = {
  'healthcare-ai': 'Healthcare AI',
  'ngo-social-impact': 'NGO & Social Impact',
  'data-analytics': 'Data Analytics',
  'ml-ai': 'Machine Learning & AI',
  'process-automation': 'Process Automation',
  'api': 'API Development',
  'other': 'Other'
};

export function Projects() {
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const spotlightProjects = projects.filter(project => project.spotlight);

  const filteredProjects = projects.filter(project => {
    if (selectedStatus !== 'all' && project.status !== selectedStatus) return false;
    if (selectedCategory !== 'all' && project.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Projects</p>
          <h2 className="text-3xl font-bold text-gray-950 mt-2">
            Applied AI Portfolio
          </h2>
          <p className="text-gray-600 mt-4 leading-7">
            Production-minded AI systems across healthcare, NGO operations, conservation, enterprise automation, and
            data products, with a strong emphasis on responsible deployment and measurable workflow value.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Global Impact Spotlight</p>
              <h3 className="text-2xl font-bold text-gray-950 mt-1">Healthcare, NGO, and Conservation AI</h3>
            </div>
            <p className="text-gray-600 max-w-2xl leading-7">
              These projects strengthen the international profile for roles in New Zealand, Canada, Australia, and
              Europe by showing AI work with real-world users, safety constraints, field deployment, and social impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {spotlightProjects.map((project) => (
              <article key={project.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="grid md:grid-cols-[220px_minmax(0,1fr)] h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.impactArea && (
                        <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-semibold text-emerald-800">
                          {project.impactArea}
                        </span>
                      )}
                      {project.partnerType && (
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                          {project.partnerType}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-950">{project.title}</h4>
                    <p className="text-gray-600 mt-3 leading-7">{project.description}</p>
                    {project.highlights && (
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mt-4">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-gray-950 font-medium"
                        >
                          <Github className="w-5 h-5 mr-1" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-gray-950 font-medium"
                        >
                          <ExternalLink className="w-5 h-5 mr-1" />
                          Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="space-y-4 w-full">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Project Status</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedStatus('all')}
                className={`px-4 py-2 rounded-full ${
                  selectedStatus === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-200'
                }`}
              >
                All Status
              </button>
              {(['completed', 'in-progress', 'planning', 'poc'] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full ${
                    selectedStatus === status ? 'bg-gray-900 text-white' : statusColors[status]
                  }`}
                >
                  {status === 'poc' ? 'POC Stage' : status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 w-full">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Categories</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {(Object.keys(categoryLabels) as ProjectCategory[]).map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-200'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColors[project.status]}`}>
                    {project.status === 'poc' ? 'POC Stage' : project.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.highlights && (
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
