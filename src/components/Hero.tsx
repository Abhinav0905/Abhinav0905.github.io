import profileImage from '../assets/images/profile.jpg';
import { Github, Linkedin, Download, BarChart2 } from 'lucide-react';

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
            <h2 className="text-lg md:text-xl text-gray-600 mb-6">
                Business-Focused Problem Solver | Bridging Software and Data Engineering with Business Analytics
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 text-justify">
              With over 15+ years of experience, I develop data-driven solutions that streamline operations and deliver measurable business impact. With a Master’s in Business Analytics and hands-on experience in software engineering, data engineering, and supply chain analytics, I turn complex data into actionable insights. Explore my projects below or download a resume to learn more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
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
              <a
                href="https://public.tableau.com/app/profile/kumar.abhinav6408/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                <BarChart2 className="w-5 h-5 mr-2" />
                Tableau
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Core Skills</h3>
                <ul className="text-gray-600">
                  <li>API Development</li>
                  <li>Data Engineering</li>
                  <li>Data Analytics & BI</li>
                  <li>AI & ML</li>
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