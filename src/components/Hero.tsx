import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import { Github, Linkedin, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Kumar Abhinav"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kumar Abhinav
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Data Analyst & Senior Software Engineer
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Experienced Data Analyst with expertise in Business Intelligence, Data Analytics, ETL Pipeline Development, 
              and AI/ML-powered solutions. Proven track record in driving data-driven strategies, delivering executive-level insights, 
              and supporting capacity planning through operational excellence and cross-functional collaboration.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="/assets/documents/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="https://github.com/Abhinav0905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/Kumarabhinav05/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Core Skills</h3>
                <ul className="text-gray-600">
                  <li>Data Analytics & BI</li>
                  <li>ETL Pipeline Development</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technologies</h3>
                <ul className="text-gray-600">
                  <li>Python, Java, FastAPI</li>
                  <li>SQL, Elasticsearch</li>
                  <li>Tableau, Power BI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
                <ul className="text-gray-600">
                  <li>Azure Cloud</li>
                  <li>Git, JIRA</li>
                  <li>Agile/SDLC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}