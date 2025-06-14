const experiences = [
  {
    title: 'Sr. Software Engineer (Contractor)',
    company: 'LinkedIn',
    location: 'Mountain View, CA',
    period: 'October 2024 - Present',
    description: [
      'Product Development - Employee Productivity Platform: Led end-to-end development of multiple features for an Internal Q&A chatbot aimed at addressing common employee needs ranging from automated ticket resolution, internal knowledge-based search and related administrative tasks. Developed and maintained python based 5 microservices for this product achieving an adoption rate of 65% in 2 months and reducing mean ticket time resolution (MTTR) by 45%',
      'Engineering Excellence: Led an effort to increase innovation agility in software development by modernizing the java legacy codebases into a single Python/FastAPI platform—decommissioned three Java VMs. Modernized the CI pipeline to achieve 40% faster build times, implemented automated monitoring, and migrated employee data-pipeline daemons to Temporal-based workflows—eliminating 95% of failures, reclaiming eight engineer-hours per week, and boosting pipeline reliability to 99.9% uptime.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'RFXCEL',
    location: 'San Ramon, CA',
    period: 'May 2023 - Dec 2024',
    description: [
      'Product Development: Legacy product: two features: (a) Escalation management: Developed Java Spring Boot REST APIs and an Angular UI to enable Walgreens and its distributors to configure exception rules in real time. Empowered users to define alerts on the fly—cutting resolution time by 40% and reducing operational losses (support staffing and logistics) by $X K per year. (b) Automated real-time inventory & order synchronization: Developed a Java Spring Boot public API to integrate RfXcel\'s platform with Manufacturer (AbbVie) SAP system—automating 100% of order handoffs, eliminating manual, error-prone updates, ensuring 100% accurate, up-to-date inventory and order status, and saving $X K per month in labor costs.',
      'Product Development – Real-Time Inventory Lifecycle Dashboard: Built a SQL→ Elasticsearch pipeline feeding an Elasticsearch index and Kibana dashboard to deliver on-demand, country-level inventory and supply-chain insights. Reduced data-query latency by 50%, boosted operational efficiency by 25%, upsold the existing traceability platform to pharma clients, and generated $X M in additional revenue. Empowered government regulators, suppliers, and manufacturers with actionable, real-time data.',
      'Internal Productivity: Leveraged GenAI to prototype and launch several tools for internal productivity automation such as Text2SQL Query Assistant: Built a GenAI-powered tool using OpenAI\'s API and AWS Redshift to translate natural-language prompts into SQL queries for Customer Support Analysts. Reduced support-ticket processing time by 45%, eliminated three contractor roles, and saved $X K per month. Automated Release-Notes Generator: Developed a pipeline leveraging the JIRA API, Confluence data, and OpenAI to draft customer-friendly release notes automatically at the end of each sprint. Saved three man-days per sprint and increased customer satisfaction by 65%.'
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