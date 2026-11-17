import profileImage from '../assets/images/profile.jpg';
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2.js';
import Bot from 'lucide-react/dist/esm/icons/bot.js';
import Code2 from 'lucide-react/dist/esm/icons/code-2.js';
import Download from 'lucide-react/dist/esm/icons/download.js';
import Github from 'lucide-react/dist/esm/icons/github.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.js';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.js';

const impactMetrics = [
  { value: '4+', label: 'years in AI and full-stack engineering' },
  { value: '13+', label: 'years in industry, analytics and project delivery' },
  { value: '28K+', label: 'employees supported by enterprise AI systems' },
  { value: '10K+', label: 'utility circuits covered by AI workflows' },
];

const capabilityGroups = [
  {
    title: 'AI Systems',
    icon: Bot,
    items: ['Agentic AI', 'RAG', 'LangGraph', 'LLM evals'],
  },
  {
    title: 'Engineering',
    icon: Code2,
    items: ['Python', 'FastAPI', 'TypeScript', 'Temporal'],
  },
  {
    title: 'Enterprise Data',
    icon: ShieldCheck,
    items: ['Azure AI Search', 'SQL', 'Elasticsearch', 'SAP'],
  },
];

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-white via-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
            <img
              src={profileImage}
              alt="Kumar Abhinav"
              className="w-full h-full object-cover object-[center_28%]"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm mb-5">
              <Sparkles className="w-4 h-4" />
              Senior Software Engineer | AI & Full Stack
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              Kumar Abhinav
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold">
              Building production AI products that turn complex workflows into measurable business outcomes.
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 text-base md:text-lg leading-8">
              Software engineer with 4+ years building AI-backed and full-stack products in Python, FastAPI, Java,
              TypeScript and React, backed by 13+ years in industrial projects, manufacturing and supply chain as a
              business analyst and project manager. My work includes support systems for 28K+ employees and utility
              workflows across 10,000+ circuits, with results such as 45% lower MTTR, 85% lower dashboard query latency
              and 2,000+ engineering hours saved each year.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto lg:mx-0">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-2xl font-bold text-gray-950">{metric.value}</p>
                  <p className="text-xs leading-5 text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
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
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {capabilityGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title} className="bg-white/80 border border-gray-200 rounded-lg p-4 text-left shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-emerald-700" />
                      <h3 className="font-semibold text-gray-900">{group.title}</h3>
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
