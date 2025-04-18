const experiences = [
  {
    title: 'Sr. Software Engineer (Contractor)', // Updated title
    company: 'LinkedIn',
    location: 'Mountain View, CA',
    period: 'October 2024 - Present', // Updated period
    description: [
      'API Development & Integration: Integrated ServiceNow and JIRA to build an AI-driven automation solution that analyzes IT tickets, mines internal knowledge bases for solutions, and auto-closes confirmed ticket improving MTTR by ~40-45%, lowering operational costs by 30 -35 % significantly improved engineering productivity and quality.', // Updated description
      'Backend Migration & Scalability: Led a complete backend migration of an internal chatbot from Java to Python, consolidating fragmented codebases into a single multi-tier system with asynchronous workflows. Improved operational efficiency by ~40%, lowering infrastructure costs and enabling 24x7 reliability.', // Updated description
      'Asynchronous Daemon Orchestration: Implemented Temporal for migrating legacy background daemons into fault-tolerant workflows. Enhanced issue detection through real-time logs and drastically minimized downtime via automatic retries and improved operational visibility.', // Updated description
      'Build & Dependency Optimization: Refactored ~45% of redundant dependencies in the chatbot package, reducing build times and package size by nearly half, bolstering continuous integration speeds and developer satisfaction.' // Updated description
    ]
  },
  {
    title: 'Software Engineer/ Tech Lead – Business Data Analyst', // Updated title
    company: 'RFXCEL (Part of Antares Vision)',
    location: 'San Ramon, CA',
    period: 'May 2023 – Dec 2024', // Updated period
    description: [
      'Public API Development for SAP Integration: Designed, developed, and implemented a Java-based public API for AbbVie’s Luprolink platform to automate data processing between their SAP system and the platform. This solution eliminated manual order creation and enabled real-time data synchronization, accelerating order processing by 30%, and improved system scalability.', // Updated description
      'Expectation Management Feature: Designed and developed an Exception Management Email Configuration feature using Java (Spring Boot) and Angular, enabling dynamic email handling via REST API and improving exception notifications for 500+ enterprise users.', // Updated description
      'Analytics System Design & Implementation: Spearheaded the design, development, and implementation of a comprehensive supply chain analytics dashboard for the Kingdom of Bahrain, their largest revenue client. Despite ambiguous requirements and no pre-existing data infrastructure, I architected a secure data pipeline that migrated critical SQL data to a NoSQL system using Elasticsearch. This initiative reduced data retrieval latency by 50%, enhanced real-time decision-making, and drove a 25% improvement in operational efficiency.', // Updated description
      'Advanced Data Analytics & Business Insights: Led data-driven analytics using Python, SQL, Tableau, and Generative AI to develop predictive models for supplier performance. Delivered actionable insights to key clients, boosting supplier efficiency by 30% and reducing manual processing workload by 40%, thereby enhancing decision-making and reporting accuracy.',
      'Operational Cost Data Analysis: Conducted a profitability analysis employing innovative cost-saving strategies, including migrating from Windows to Linux and moving six-year-old data to cold storage. These measures cut operational expenses by 15%, boosted system performance by 10%, and improved financial stability through optimized resource allocation.',
      'AI-Driven Automation for Supplier Intelligence & Cost Optimization: Deployed a Generative AI tool for real-time SQL database querying, eliminating manual supplier data retrieval and reducing ticket resolution time by 35-40%. Automated DSCSA compliance data management, thus enhancing operational efficiency and resource allocation.'
    ]
  },
  {
    title: 'Business Analyst (Part Time)',
    company: 'North California Small Business Development Centre',
    location: 'Hayward, CA',
    period: 'Oct 2022 - May 2023',
    description: [
      'Provided market research, competitor analysis, and consumer insights to local business owners',
      'Launched 8 clients’ online stores on the SBDC platform, collaborating on pricing, inventory, shipping, and Google Analytics, achieving a 75% success rate.',
      'Created a WordPress website for FETA project supporting local food vendors',
      'Managed IT resources for the FETA campaign initiatives at the university'
    ]
  },
  {
    title: 'Manager - Business & Data Analyst (Supply Chain)', // Updated title
    company: 'Vvf India Limited', // Updated company name
    location: 'Mumbai, India',
    period: 'Dec 2017 - Aug 2022',
    description: [
      'GST-Ready SAP Implementation: Led the SAP implementation project to meet new GST requirements. Streamlined end-to-end processes—from purchase orders to cash flow—ensuring on-time and fully compliant deployment.', // Updated description
      'Global Inventory Analysis: Conducted in-depth inventory data analysis by creating segmentation models using SQL and Python. Identified slow-moving, obsolete, and dead stock through data clustering, leading to inventory reductions of 25% and savings of $X million.', // Updated description
      'Manufacturing Cost Analysis: Built predictive models using Python for cost and production analytics, detecting manufacturing bottlenecks and operational inefficiencies. Reduced manufacturing losses by 22% through data-driven Strategic Planning, Capacity Management and corrective actions, resulting in annual savings of $X million.', // Updated description
      'Forecasting & Demand Planning Analytics: Created demand forecasting models using Excel, SQL, and Tableau by integrating historical sales, market trends, and supplier data. Improved forecast accuracy by 20%, reduced stockouts, and increased on-time delivery rates by optimizing data-driven planning processes.' // Updated description
    ]
  },
  {
    title: 'Deputy Manager - Project Management',
    company: 'IPCL',
    location: 'Kolkata, India',
    period: 'Mar 2016 - Nov 2017',
    description: [
      'Engineered cost-effective business cases for coal procurement, delivering substantial savings',
      'Negotiated long-term Power Purchase Agreements (PPA) with government entities, boosting revenue',
      'Implemented SAP System\'s PM & MM Module, enhancing organizational efficiency by 25%'
    ]
  },
  {
    title: 'Deputy Manager - Project Management',
    company: 'Bajaj Energy',
    location: 'Noida, India',
    period: 'Feb 2013 - Mar 2017',
    description: [
      'Led large-capex project from conception to completion, ensuring timely delivery of project objectives',
      'Secured Mega Power Project Status with Central Electricity Authority (CEA), achieving $32 million in cost savings',
      'Managed cross-functional teams to ensure project milestones were met on schedule'
    ]
  },
  {
    title: 'Assistant Manager - Project Management',
    company: 'Abhijeet Projects',
    location: 'Ranchi, India',
    period: 'Sep 2010 - Jan 2013',
    description: [
      'Orchestrated comprehensive oversight in contract management, and capex project planning',
      'Secured excise duty waiver for Mega Power Project Status with Government of India\'s CEA, saving $15 million',
      'Managed cross-functional teams to ensure project milestones were met on schedule'
    ]
  },
  {
    title: 'Assistant Manager - Project Management',
    company: 'Airox Nigen',
    location: 'Gurgram, India',
    period: 'Apr 2009 - Sep 2010',
    description: [
      'Spearheaded design and launch of organization\'s website, enhancing online presence',
      'Achieved 80% bid success rate through strategic business development and contract management',
      'Implemented effective dashboarding techniques for improved project tracking and reporting'
    ]
  }
];

const education = [
  {
    degree: 'M.S. in Business Analytics',
    school: 'California State University East Bay',
    location: 'Hayward, CA',
    period: '2022 - 2023'
  },
  {
    degree: 'B.Tech. in Chemical Engineering (Major)',
    school: 'Sathyabama Deemed University',
    location: 'Chennai, India',
    period: '2005 - 2009'
  },
  {
    degree: 'Computer Science & Engineering (Completed 5/8 semesters)',
    school: 'Sathyabama Deemed University',
    location: 'Chennai, India',
    period: '2006 - 2009'
  }
];

const skills = [
  {
    category: 'Technical Skills',
    items: ['Python', 'Java', 'FastAPI', 'MySQL', 'Elasticsearch', 'Kibana', 'Tableau', 'Streamlit', 'Langchain', 'Azure']
  },
  {
    category: 'Functional Skills',
    items: ['Process Mapping', 'Agile', 'SDLC', 'Jira', 'Git']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 list-disc pl-5 text-gray-600 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i} className="pl-2 text-justify">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>
                      <span className="text-sm text-gray-500">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}