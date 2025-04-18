import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import resumeParserImg from '../assets/images/projects/resume_parser_pro.jpeg';
import jiraAIImg from '../assets/images/projects/JiraAI.png';
import releaseNoteImg from '../assets/images/projects/Release_Note.png';
import jobGenieImg from '../assets/images/projects/JobGenie - Job Finder.png';
import pythonBookImg from '../assets/images/projects/Python Book.png';
import sqlConverterImg from '../assets/images/projects/Natural Language to SQL.png';
import supplierScoreImg from '../assets/images/projects/Predecitive Supplier Score Card.png';
import ticketPredictorImg from '../assets/images/projects/Ticket Predictor.png';
import RentAssistant from '../assets/images/projects/RentAssistant.png';

type ProjectStatus = 'completed' | 'in-progress' | 'planning' | 'poc';
type ProjectCategory = 'data-analytics' | 'ml-ai' | 'process-automation' | 'api' | 'other';

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
}

const projects: Project[] = [
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
  }
];

const statusColors = {
  'completed': 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'planning': 'bg-blue-100 text-blue-800',
  'poc': 'bg-purple-100 text-purple-800'
};

const categoryLabels: Record<ProjectCategory, string> = {
  'data-analytics': 'Data Analytics',
  'ml-ai': 'Machine Learning & AI',
  'process-automation': 'Process Automation',
  'api': 'API Development',
  'other': 'Other'
};

export function Projects() {
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = projects.filter(project => {
    if (selectedStatus !== 'all' && project.status !== selectedStatus) return false;
    if (selectedCategory !== 'all' && project.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Projects Portfolio
        </h2>

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