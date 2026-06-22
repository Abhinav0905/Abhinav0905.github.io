import aidashLogo from '../assets/images/company-logos/aidash.png';
import linkedinLogo from '../assets/images/company-logos/linkedin.svg';
import rfxcelLogo from '../assets/images/company-logos/rfxcel.png';
import vvfLogo from '../assets/images/company-logos/vvf.gif';
import ipclLogo from '../assets/images/company-logos/ipcl.png';
import bajajEnergyLogo from '../assets/images/company-logos/bajaj-energy.png';
import abhijeetProjectsLogo from '../assets/images/company-logos/abhijeet-projects.svg';
import airoxNigenLogo from '../assets/images/company-logos/airox-nigen.png';

interface CompanyLogo {
  name: string;
  image: string;
}

const experiences = [
  {
    title: 'Sr. Software Engineer (Full Stack)',
    company: 'AiDash',
    location: 'Palo Alto, CA',
    period: 'Dec 2025 - Present',
    logos: [{ name: 'AiDash', image: aidashLogo }],
    summary:
      'Building customer-facing product features and GenAI-driven solutions for an AI-first vertical SaaS company helping power utilities become more resilient with satellite intelligence and AI.',
    description: [
      'Built the first stage of an Agentic Code Generation Platform that ingests Jira tickets, comments, and attachments; generates implementation plans; routes work through reviewer agents; and keeps human approval before downstream engineering workflows. Improved code-generation accuracy to ~80-85%, reduced trivial-ticket deployment time from 7 days to 2 days, and avoided two contractor hires, saving ~$50K annually.',
      'Shipped NLP Smart Filtering with React, TypeScript, and FastAPI. LLM-based intent parsing plus deterministic hierarchical filters reduced utility operator setup from 2-3 minutes to under 10 seconds and improved wildfire-response workflows by ~60%.',
      'Built ARIA, an Autonomous Risk Intelligence Assistant for alpha testing, using LangGraph and MCP multi-tool orchestration across telemetry, risk signals, and reporting. Enabled proactive monitoring across 10,000+ circuits and reduced manual oversight by ~80%.',
      'Automated Jira ticket intelligence with Atlassian Rovo agents and Jira Automation, replacing an external triage tool with strict JSON contracts, normalized priority scoring, field validations, audit tracing, and resilient change triggers.',
      'Built a tenant-aware CCP notification microservice using FastAPI, PostgreSQL, Django/DRF, and React for in-app and email notifications across job lifecycle, assignment, approval, and onboarding events.',
    ],
  },
  {
    title: 'Sr. Software Engineer (Contractor)',
    company: 'LinkedIn',
    location: 'Sunnyvale, CA',
    period: 'Oct 2024 - Dec 2025',
    logos: [{ name: 'LinkedIn', image: linkedinLogo }],
    summary:
      'Owned full-stack features for LinkedIn internal employee productivity systems serving 28K+ employees, partnering with Product, UX, and ITSM to ship measurable platform improvements.',
    description: [
      'Led an internal GenAI chatbot on the Employee Productivity Platform using Azure OpenAI GPT-4/GPT-4o, RAG on Azure AI Search and Glean, and Python/FastAPI microservices. Drove 65% adoption in 2 months, reduced MTTR by ~45%, saved ~$200K/year in infrastructure, and freed roughly 1 FTE of support capacity.',
      'Integrated ServiceNow incident deflection, Contract Finder across Salesforce and Dynamics, and Franklin Finance PO lookup so support and finance teams could self-serve contract and payment details while cutting low-value ticket creation by ~30%.',
      'Migrated LDAP, Slack user refresh, Cosmos priming, and Microsoft Graph working-hours pipelines into Temporal workflows, eliminating ~95% of pipeline failures and saving 416 engineering hours per year.',
      'Designed an AI-powered test generation platform with Python, LangGraph, and Oracle that converts business documents into executable test scenarios and FK-aware synthetic data, reducing test-data preparation from days to ~90 seconds per run.',
      'Built a marketing brief and asset automation pipeline with LangGraph and Azure OpenAI to parse briefs, classify assets, read Excel translation sheets, and produce downstream JSON for resize and translation workflows.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'RFXCEL',
    location: 'San Ramon, CA',
    period: 'May 2023 - Dec 2024',
    logos: [{ name: 'RFXCEL', image: rfxcelLogo }],
    summary:
      'Partnered with sales engineering and product teams to ship AI, analytics, and platform features for healthcare and pharma clients including Cardinal, AbbVie, and Walgreens.',
    description: [
      'Built GenAI productivity tools including a Text2SQL assistant using OpenAI and AWS Redshift, reducing support-ticket processing time by 45%, avoiding three contractor roles, and saving ~$100K annually.',
      'Developed an automated release-notes generator using Jira, Confluence, and OpenAI that saved 576 engineering hours annually and improved customer-facing release communication.',
      'Built a SQL-to-Elasticsearch pipeline and Kibana dashboard for real-time inventory lifecycle analytics, reducing query latency by 50%, improving operational efficiency by 25%, and supporting $1M in additional revenue.',
      'Delivered Java Spring Boot APIs and Angular interfaces for escalation management and real-time inventory/order synchronization with SAP, reducing resolution time by 40% and saving clients an estimated $1.2M annually.',
      'Built a LangGraph-based Jira conversational assistant that turns natural-language requests into ticket actions and escalation-risk scoring, cutting triage from 30-40 minutes to under 4 minutes per incident.',
    ],
  },
  {
    title: 'Staff - Business Data Analyst',
    company: 'Early Career: VVF, IPCL, Bajaj Energy, Abhijeet Projects, Airox Nigen',
    location: 'Chennai, Mumbai, Kolkata, Noida, Ranchi, India',
    period: 'Apr 2009 - Aug 2022',
    logos: [
      { name: 'VVF', image: vvfLogo },
      { name: 'IPCL', image: ipclLogo },
      { name: 'Bajaj Energy', image: bajajEnergyLogo },
      { name: 'Abhijeet Projects', image: abhijeetProjectsLogo },
      { name: 'Airox Nigen', image: airoxNigenLogo },
    ],
    summary:
      'Led supply-chain, manufacturing, project, and finance analytics initiatives across energy, chemical, and industrial operations before transitioning into AI software engineering.',
    description: [
      'Led requirements and stakeholder management across Operations, Finance, Procurement, and Plant leadership, translating business pain points into BRD/FRD, user stories, dashboards, and process improvements.',
      'Created SAP data dictionaries and master-data mapping linking equipment, spare parts, and consumption history across plants to standardize classification and improve reporting reliability.',
      'Designed a global inventory optimization engine using Python, SQL, JIT, and VMI segmentation, reducing global inventory by 25% and freeing $1M in working capital.',
      'Built manufacturing analytics and loss-reduction models using regression, hypothesis testing, variance analysis, and Tableau executive dashboards, eliminating 22% of manufacturing losses and reducing cost from $200/MT to $150/MT.',
    ],
  },
];

const education = [
  {
    degree: 'M.S. in Business Analytics',
    school: 'California State University East Bay',
    location: 'Hayward, CA',
    period: 'Aug 2022 - Dec 2023',
  },
  {
    degree: 'B.Tech. in Chemical Engineering; Computer Science & Engineering Elective',
    school: 'Sathyabama Deemed University',
    location: 'Chennai, India',
    period: 'Aug 2005 - Dec 2009',
  },
];

const skills = [
  {
    category: 'AI & Agentic Engineering',
    items: ['OpenAI API', 'Azure OpenAI', 'LangGraph', 'RAG', 'Pinecone', 'Azure AI Search', 'MCP', 'LLM evals'],
  },
  {
    category: 'Software Engineering',
    items: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'TypeScript', 'React', 'Angular', 'REST APIs', 'Temporal'],
  },
  {
    category: 'Data & Analytics',
    items: ['Advanced SQL', 'Elasticsearch', 'Kibana', 'AWS Redshift', 'PostgreSQL', 'Tableau', 'SAP'],
  },
  {
    category: 'Product & Delivery',
    items: ['Product discovery', 'Agile', 'Jira', 'System design', 'Stakeholder management', 'CI/CD', 'Git'],
  },
];

const recognition = [
  'Fully funded Ph.D. admission offer in Computer Science from University at Buffalo (SUNY), selected to work under Dr. Venu Govindaraju.',
  'Career arc combining 4+ years of production AI/software engineering with 12+ years of analytics, operations, and supply-chain domain leadership.',
];

function CompanyLogoTile({ logo, compact = false }: { logo: CompanyLogo; compact?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm ${
        compact ? 'h-12 min-w-[88px] px-3' : 'h-16 w-24 px-3'
      }`}
      title={logo.name}
    >
      <img
        src={logo.image}
        alt={`${logo.name} logo`}
        className={`object-contain ${compact ? 'max-h-8 max-w-[76px]' : 'max-h-10 max-w-[78px]'}`}
        loading="lazy"
      />
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Experience</p>
          <h2 className="text-3xl font-bold text-gray-950 mt-2">
            Production AI, Enterprise Platforms, and Business Impact
          </h2>
          <p className="text-gray-600 mt-4 leading-7">
            A portfolio of shipped GenAI systems, product features, data platforms, and automation programs with
            measurable adoption, cost savings, reliability, and customer value.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] gap-10">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="border-l-4 border-emerald-600 pl-5">
                <div className="flex flex-col md:flex-row md:justify-between md:gap-6">
                  <div className="flex items-start gap-4">
                    {exp.logos.length === 1 && <CompanyLogoTile logo={exp.logos[0]} />}
                    <div>
                      <h3 className="font-semibold text-xl text-gray-950">{exp.title}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 mt-2 md:mt-1 md:text-right">{exp.period}</span>
                </div>
                {exp.logos.length > 1 && (
                  <div className="mt-4 flex flex-wrap gap-3" aria-label="Company logos">
                    {exp.logos.map((logo) => (
                      <CompanyLogoTile key={logo.name} logo={logo} compact />
                    ))}
                  </div>
                )}
                <p className="mt-3 text-gray-600 leading-7">{exp.summary}</p>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-600 text-sm leading-6">
                  {exp.description.map((item) => (
                    <li key={item} className="pl-1">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-950">Education</h3>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.degree} className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                    <h4 className="font-semibold text-gray-950">{edu.degree}</h4>
                    <p className="text-gray-700 mt-1">{edu.school}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
                    <p className="text-sm font-medium text-emerald-700 mt-2">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-950">Core Skills</h3>
              <div className="space-y-5">
                {skills.map((category) => (
                  <div key={category.category}>
                    <h4 className="font-medium text-gray-900 mb-3">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-sm text-emerald-900"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-950">Recognition</h3>
              <ul className="space-y-3 text-sm text-gray-600 leading-6">
                {recognition.map((item) => (
                  <li key={item} className="border-l-2 border-amber-400 pl-3">{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
