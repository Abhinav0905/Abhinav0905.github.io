import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type ProjectStatus = 'completed' | 'in-progress' | 'planned';
type ProjectCategory = 'data-analytics' | 'ml-ai' | 'automation' | 'api';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: ProjectStatus;
  category: ProjectCategory;
}

const projects: Project[] = [
  {
    title: 'LinkedIn Chatbot API',
    description: 'Developed multiple APIs for an internal chatbot and led migration from Java to Python FastAPI architecture. Enhanced system efficiency and response times.',
    image: '/src/assets/images/projects/chatbot-api.jpg',
    technologies: ['Python', 'FastAPI', 'ServiceNow', 'API Design'],
    status: 'completed',
    category: 'api'
  },
  {
    title: 'Real-Time Analytics System',
    description: 'Led development of real-time analytics product using Elasticsearch and NoSQL, reducing data retrieval latency by 50%. Successfully launched as a revenue-generating product.',
    image: '/src/assets/images/projects/analytics.jpg',
    technologies: ['Elasticsearch', 'NoSQL', 'Java', 'Data Analytics'],
    status: 'completed',
    category: 'data-analytics'
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Developed predictive models for inventory optimization and demand forecasting, reducing inventory by 25% and improving forecast accuracy by 20%.',
    image: '/src/assets/images/projects/supply-chain.jpg',
    technologies: ['Python', 'SQL', 'Machine Learning', 'Tableau'],
    status: 'completed',
    category: 'ml-ai'
  },
  {
    title: 'AbbVie SAP Integration API',
    description: 'Developed Java-based public API for Luprolink platform, automating data processing between SAP and internal databases. Accelerated order processing by 30%.',
    image: '/src/assets/images/projects/sap-api.jpg',
    technologies: ['Java', 'SAP', 'API Development', 'Database Integration'],
    status: 'completed',
    category: 'api'
  },
  {
    title: 'ETL Pipeline System',
    description: 'Designed and implemented custom ETL pipeline transforming SQL to NoSQL data, improving data latency and reducing operational costs.',
    image: '/src/assets/images/projects/etl.jpg',
    technologies: ['Java', 'SQL', 'NoSQL', 'Elasticsearch'],
    status: 'completed',
    category: 'data-analytics'
  }
];

const statusColors = {
  'completed': 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'planned': 'bg-blue-100 text-blue-800'
};

const categoryLabels = {
  'data-analytics': 'Data Analytics',
  'ml-ai': 'Machine Learning & AI',
  'automation': 'Automation',
  'api': 'API Development'
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
          <div className="space-x-2">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-4 py-2 rounded-full ${
                selectedStatus === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-200'
              }`}
            >
              All Status
            </button>
            {(['completed', 'in-progress', 'planned'] as const).map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-full ${
                  selectedStatus === status ? 'bg-gray-900 text-white' : statusColors[status]
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-x-2">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-700"
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
                      className="inline-flex items-center text-gray-600 hover:text-gray-900"
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
                      className="inline-flex items-center text-gray-600 hover:text-gray-900"
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