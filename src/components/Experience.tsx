import Award from 'lucide-react/dist/esm/icons/award.js';
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

const careerStages = [
  {
    period: '2009 - 2022',
    title: 'Industrial Projects',
    details: ['Project management', 'Manufacturing & power'],
  },
  {
    period: '2022 - 2024',
    title: 'Graduate Studies',
    details: ['M.S. Business Analytics', 'CSU East Bay'],
  },
  {
    period: 'May 2023 - Dec 2023',
    title: 'Entry into Software',
    details: ['Software Engineer Intern', 'RFXCEL'],
  },
  {
    period: '2024 - Present',
    title: 'Software & AI',
    details: ['Software engineering', 'RFXCEL · LinkedIn · AiDash'],
  },
];

const experiences = [
  {
    title: 'Software Engineer II (Full Stack)',
    company: 'AiDash (acquired by Schneider Electric)',
    location: 'Palo Alto, CA',
    period: 'Dec 2025 - Present',
    logos: [{ name: 'AiDash', image: aidashLogo }],
    summary:
      'Building customer-facing AI, data-onboarding and workflow products for utility operations.',
    description: [
      'Led application data onboarding for two major U.S. utilities, including one with strict data-residency requirements. Built Python-based geospatial data-preparation tooling and coordinated data validation, application uploads and go-live readiness.',
      'Architected Wildfire Copilot (CRIS Ask AI), a customer-facing assistant that lets utility operators compare circuit-level wildfire risks in natural language. Built it with LangGraph, AWS Bedrock, React, FastAPI, tenant-secured REST tools, guardrails and audit logging.',
      'Built a LangGraph and AWS Bedrock multi-agent system for requirements analysis, planning, frontend and backend development, QA, sandbox testing, Bitbucket branch creation and Jira handoffs. The workflow resolved 100+ customer tickets in 2026.',
      'Built a tenant-aware notification service with FastAPI, PostgreSQL, Django/DRF and React, with idempotent event processing, service-to-service APIs, in-app and email alerts and task deep links. Delivered in March 2026 as an in-house alternative to Amazon Pinpoint.',
      'Improved security and evaluation for a production RAG assistant used with 800-page wildfire mitigation plans. Citation scores rose from 2.89 to 4.09/5 and poor-retrieval responses fell from 49% to 21%.',
    ],
  },
  {
    title: 'Sr. Software Engineer (Contract)',
    company: 'LinkedIn',
    location: 'Sunnyvale, CA',
    period: 'Oct 2024 - Dec 2025',
    logos: [{ name: 'LinkedIn', image: linkedinLogo }],
    summary:
      'Owned full-stack features for LinkedIn internal employee productivity systems serving 28K+ employees, partnering with Product, UX, and ITSM to ship measurable platform improvements.',
    description: [
      'Modernized an internal chatbot serving 28K+ employees by migrating its Java backend to Python/FastAPI and integrating Azure OpenAI, Azure AI Search and Glean. Reduced MTTR by ~45%, reached 65% adoption within two months and saved ~$100K annually in infrastructure costs.',
      'Extended the assistant with ServiceNow, Salesforce, Dynamics and financial-system integrations. Routine support ticket creation fell by ~30%, with an estimated ~$50K impact reported in an internal hackathon.',
      'Built an AI agent for Accenture marketing production that processes multi-folder briefs, assets and Excel translation sheets, updates requirements trackers, flags inconsistent inputs and generates JSON and executable Photoshop scripts. Preparation time fell from 4-5 days to 30-45 minutes per flyer.',
      'Migrated LDAP and Slack employee synchronization, Cosmos DB priming and Microsoft Graph jobs to fault-tolerant Temporal workflows. Pipeline failures fell by ~95%, saving about 416 engineering hours annually.',
      'Built a Python and LangGraph agent with Oracle Database that turns business requirements into executable test scenarios and foreign-key-safe synthetic datasets in about 90 seconds per run.',
    ],
  },
  {
    title: 'Software Engineer Intern | Software Engineer',
    company: 'RFXCEL',
    location: 'San Ramon, CA',
    period: 'May 2023 - Dec 2024',
    logos: [{ name: 'RFXCEL', image: rfxcelLogo }],
    summary:
      'Software Engineer Intern from May to December 2023, then Software Engineer from January to December 2024.',
    description: [
      "Led an inventory analytics dashboard for Bahrain's healthcare supply chain, building a SQL-to-Elasticsearch pipeline and Kibana visualizations. Query latency fell by ~85%.",
      'Built Java Spring Boot and Angular features for Walgreens pharmaceutical exception management, including configurable notification recipients and data exports for investigation and regulatory reporting.',
      "Developed a Java Spring Boot REST API for real-time synchronization between AbbVie's SAP system and the RFXCEL application database.",
      'Built an LLM-based release-note generator using Jira and Confluence, saving about three person-days per two-week sprint.',
      'Built an OpenAI and AWS Redshift natural-language SQL assistant that reduced ticket-processing effort by ~45% and reliance on three contractor roles. A Jira triage agent cut triage from 30-40 minutes to 3-4 minutes and helped prevent about 20 escalations per month.',
    ],
  },
  {
    title: 'Manager - Projects',
    company: 'VVF, India Power, Bajaj Energy, Abhijeet Projects and Airox Nigen',
    location: 'India',
    period: 'Apr 2009 - Aug 2022',
    logos: [
      { name: 'VVF', image: vvfLogo },
      { name: 'India Power', image: ipclLogo },
      { name: 'Bajaj Energy', image: bajajEnergyLogo },
      { name: 'Abhijeet Projects', image: abhijeetProjectsLogo },
      { name: 'Airox Nigen', image: airoxNigenLogo },
    ],
    summary:
      'Airox Nigen (2009-2010), Abhijeet Projects (2010-2013), Bajaj Energy (2013-2016), India Power (2016-2017) and VVF (2017-2022).',
    description: [
      'Managed capital projects across oleochemicals, consumer products and power operations. At VVF, led a $600K expansion that doubled tertiary-amine capacity from 2,000 to 4,000 tonnes per year.',
      'Led approximately six to seven employees and coordinated four to five contractor teams, with roughly 200 site workers involved through indirect supervision. Figures are approximate.',
      'Built an Excel project-costing tool and tracked budgets, work-breakdown structures, milestones and execution plans in SAP and MS Project.',
      'Prepared bills of quantities and purchase requisitions, compared supplier equipment specifications and followed material deliveries against installation schedules. Led cross-functional reviews with operations and site teams.',
      'Managed or supported construction and commissioning involving hydrogen-generation plants, piping systems, water-treatment equipment, cooling towers and pumps across industrial and power-sector projects.',
    ],
  },
];

const education = [
  {
    degree: 'M.S. in Business Analytics',
    school: 'California State University East Bay',
    location: 'Hayward, CA',
    period: '2022 - 2024',
  },
  {
    degree: 'B.Tech. in Chemical Engineering; Computer Science & Engineering Elective',
    school: 'Sathyabama Deemed University',
    location: 'Chennai, India',
    period: '2005 - 2009',
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
  {
    textBefore:
      'Fully funded Ph.D. admission offer in Computer Science from University at Buffalo (SUNY), selected to work under ',
    linkText: 'Dr. Venu Govindaraju',
    linkHref: 'https://www.linkedin.com/in/venu-govindaraju/',
    textAfter: '.',
  },
  {
    textBefore:
      'Career transition from 13+ years in industrial projects and project management to 3+ years in AI and full-stack software engineering.',
  },
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

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-950 mb-5">Career Transition</h3>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 shadow-sm">
            {careerStages.map((stage) => (
              <li
                key={stage.period}
                className="bg-gray-50 p-5"
              >
                <p className="text-sm font-semibold text-emerald-700">{stage.period}</p>
                <h4 className="mt-2 font-semibold text-gray-950">{stage.title}</h4>
                {stage.details.map((detail) => (
                  <p key={detail} className="mt-1 text-sm text-gray-600">{detail}</p>
                ))}
              </li>
            ))}
          </ol>
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

            <div className="rounded-lg border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-5 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950">Recognition</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 leading-6">
                {recognition.map((item) => (
                  <li key={item.textBefore} className="border-l-4 border-amber-500 bg-white/75 py-3 pl-4 pr-3 shadow-sm">
                    {item.textBefore}
                    {item.linkHref && item.linkText && (
                      <a
                        href={item.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
                      >
                        {item.linkText}
                      </a>
                    )}
                    {item.textAfter}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
