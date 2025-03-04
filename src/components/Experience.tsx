import React from 'react';

const experiences = [
  {
    title: 'Senior Software Engineer (Contractor)',
    company: 'LinkedIn',
    location: 'Mountain View, CA',
    period: 'Oct 2024 - Present',
    description: [
      'Designed and integrated FastAPI to streamline connections with ServiceNow, reducing process execution times by 30%',
      'Built new FastAPI endpoints to centralize on-call team information and handle diverse user queries for Interanl Chatbot',
      'Migrated legacy background daemons to Temporal for fault-tolerant, stateful workflows'
    ]
  },
  {
    title: 'Tech Lead – Business Analyst & Data / Software Engineer',
    company: 'RFXCEL (Part of Antares Vision)',
    location: 'San Ramon, CA',
    period: 'May 2023 - Dec 2024',
    description: [
      'Led development of data-driven systems using Elasticsearch and NoSQL, reducing data retrieval latency by 50%',
      'Designed custom ETL pipeline in Java, transforming data from SQL to NoSQL',
      'Implemented custom NoSQL data model in Elasticsearch for optimized data retrieval',
      'Led analytics initiatives using Python, SQL, Tableau, and Generative AI LLMs',
      'Developed Java-based public API for AbbVie\'s Luprolink platform'
    ]
  },
  {
    title: 'Manager - Data Analyst – Supply Chain Operations',
    company: 'VVF India Limited',
    location: 'Mumbai, India',
    period: 'Dec 2017 - Aug 2022',
    description: [
      'Led SAP implementation project for GST compliance',
      'Conducted inventory analysis using SQL and Python, reducing inventory by 25%',
      'Built predictive models for cost and production analytics, reducing losses by 22%',
      'Created demand forecasting models improving accuracy by 20%'
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
    degree: 'B.E in Computer Science & Engineering (Minor)',
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
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
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