import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Terminal, Database, Brain, TrendingUp, Beaker, BookOpen, Award, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const research = [
    {
      title: "Bakar Ignite Scholar: Fiber Optics DAS Research",
      org: "UC Berkeley - Professor Kenichi Soga's Lab",
      date: "2025",
      icon: <Award className="w-6 h-6" />,
      description: "Awarded competitive research grant to investigate Distributed Acoustic Sensing (DAS) applications using fiber optic technology for infrastructure monitoring and geophysical analysis.",
      links: [
        { label: "Bakar Fellows Program", url: "https://bakarfellows.berkeley.edu" }
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Ranney Research Reasoning Group",
      org: "UC Berkeley - Professor Michael Ranney",
      date: "2024-Present",
      icon: <Brain className="w-6 h-6" />,
      description: "Conducting cognitive science research on reasoning, decision-making, and climate change communication under Professor Michael Ranney.",
      links: [
        { label: "Research Lab", url: "https://vcresearch.berkeley.edu/faculty/michael-ranney" }
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const projects = [
    {
      title: "Patient Engagement Analytics Platform",
      role: "Data Analyst Consultant",
      org: "Noora Health",
      date: "Jan 2025 - Jun 2025",
      icon: <Brain className="w-6 h-6" />,
      description: "Built predictive analytics system analyzing 1M+ multilingual patient records across 4 countries and 5 languages to reduce churn and increase engagement.",
      tech: ["BigQuery", "Tableau", "Logistic Regression", "Python", "SQL"],
      metrics: ["1M+ records", "91% accuracy", "18% churn reduction", "12% retention increase"],
      color: "from-purple-500 to-pink-500",
      details: {
        challenge: "Healthcare engagement platforms face significant early-stage churn, particularly in multilingual, multi-country contexts. The challenge was identifying behavioral patterns that predict disengagement before it occurs, enabling proactive intervention.",
        approach: [
          "Cleaned and standardized 1M+ patient records across disparate data sources in BigQuery",
          "Performed exploratory analysis to identify key behavioral indicators of disengagement",
          "Developed logistic regression model with feature engineering focused on early-stage user patterns",
          "Created Tableau dashboards visualizing engagement trends across 10+ regions and 5 languages",
          "Generated actionable insights that informed targeted intervention strategies"
        ],
        impact: "The predictive model (91% accuracy, AUC = 0.94) enabled 25% improvement in outreach efficiency, directly contributing to 12% increase in user retention and 18% reduction in early-stage churn. Strategic recommendations were adopted across multiple country operations.",
        links: [
          { label: "Final Presentation", url: "https://docs.google.com/presentation/d/1by4HPP9-GHkUIaE-I0YOxMBDn_fWQIdyWubFNeXXUkM/edit" }
        ]
      }
    },
    {
      title: "California Climate Action Data Infrastructure",
      role: "Data Engineer Intern",
      org: "CoolClimate Network",
      date: "Jun 2025 - Aug 2025",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Architected scalable ETL pipelines and interactive dashboards analyzing 10M+ emission records to model policy impacts for California municipalities.",
      tech: ["Python", "PostgreSQL", "Supabase", "React", "D3.js", "Recharts", "ETL"],
      metrics: ["10M+ records", "40% faster processing", "20+ municipalities", "Real-time API"],
      color: "from-green-500 to-emerald-500",
      details: {
        challenge: "California municipalities needed centralized, analysis-ready emission data from fragmented statewide sources to evaluate policy interventions. The existing infrastructure couldn't handle the volume or provide real-time insights for decision-makers.",
        approach: [
          "Designed and deployed ETL workflows using Python and Supabase (PostgreSQL + real-time APIs) to integrate 10M+ emission records from heterogeneous data sources",
          "Optimized SQL pipelines through strategic indexing, partitioning, and Python automation, reducing processing time by 40%",
          "Prototyped interactive web dashboards using React, Recharts, and D3.js to visualize emission-cost tradeoffs and ROI projections",
          "Implemented data quality checks and validation layers to ensure consistency across departmental analyses",
          "Collaborated with policy teams to translate complex datasets into actionable climate policy insights"
        ],
        impact: "The infrastructure now powers policy analysis for 20+ California municipalities, enabling real-time modeling of variable emission pricing scenarios and accelerating data-driven climate action decisions.",
        links: [
          { label: "Climate Plans Dashboard", url: "https://climateplans.org/transportation" },
          { label: "GitHub Repository", url: "https://github.com/CoolClimateNetwork/climateplans" }
        ]
      }
    },
    {
      title: "AI-Powered Water Quality Anomaly Detection",
      role: "AI Research Intern",
      org: "California Water Boards",
      date: "Aug 2025 - Present",
      icon: <Database className="w-6 h-6" />,
      description: "Developing generative AI workflows to detect anomalies in statewide water quality datasets, ensuring regulatory data integrity for environmental decision-making.",
      tech: ["Python", "Pandas", "Hugging Face", "Random Forest", "Isolation Forest", "Data QA/QC"],
      metrics: ["40+ analytes", "87% accuracy", "Statewide coverage", "Regulatory impact"],
      color: "from-blue-500 to-cyan-500",
      details: {
        challenge: "California's surface water monitoring data contains inconsistencies including missing values, incorrectly collected measurements, and unit mismatches across 40+ analytes. Traditional threshold-based QA/QC methods fail to distinguish true environmental extremes from human or measurement errors.",
        approach: [
          "Built multivariate anomaly detection system using Random Forest regression with numeric sampling metadata and log-transformed skewed analyte concentrations",
          "Generated 5-fold out-of-fold predictions to prevent overfitting, iteratively removing anomalies to stabilize baseline trends",
          "Applied Isolation Forest (5% contamination threshold) over multiple iterations to flag residual-based outliers",
          "Integrated generative AI fine-tuning using flagged outlier patterns to improve detection of subtle data quality issues",
          "Developed comprehensive user documentation and presentations to communicate findings to regulatory teams"
        ],
        impact: "The system achieved 87% accuracy in distinguishing measurement errors from genuine environmental anomalies, significantly improving regulatory dataset consistency for environmental decision-making across California's water monitoring network.",
        links: [
          { label: "Research Poster", url: "#" }
        ]
      }
    },
    {
      title: "Walkability & Mental Health Research Platform",
      role: "Technical Product Manager",
      org: "DataGood",
      date: "Aug 2025 - Present",
      icon: <MapPin className="w-6 h-6" />,
      description: "Leading cross-functional team analyzing relationships between urban walkability metrics and mental health outcomes to generate actionable policy insights.",
      tech: ["Python", "Scikit-learn", "Geospatial Analysis", "Machine Learning", "Product Management"],
      metrics: ["3+ policy insights", "25% prediction accuracy improvement", "Cross-functional team"],
      color: "from-indigo-500 to-purple-500",
      details: {
        challenge: "Urban planning decisions impact mental health through walkability, but quantifying these relationships for policy recommendations requires integrating diverse geospatial, health, and demographic datasets.",
        approach: [
          "Spearheaded research team combining geospatial analysis with health outcome data",
          "Developed machine learning models improving walkability prediction accuracy by 25%",
          "Coordinated between data scientists, policy researchers, and domain experts",
          "Generated evidence-based policy recommendations for urban planning initiatives"
        ],
        impact: "Research yielded 3+ actionable policy insights connecting walkability infrastructure to mental health outcomes, informing urban planning decisions for improved community wellbeing.",
        links: [
          { label: "Project Presentation", url: "https://docs.google.com/presentation/d/1jLlL0jhiegKFr4DcJ6LiogxFYa6DQ6hgrDbnDe0yD5U/edit" }
        ]
      }
    }
  ];

  const earlyWork = [
    {
      title: "Team ANTIC: Anti-Carbon Nonprofit",
      role: "Founder & Community Coordinator",
      date: "2022-2023",
      description: "Founded climate education nonprofit reaching 6000+ students through curriculum development and school-wide presentations on food waste reduction.",
      achievements: ["6000+ students impacted", "$7k+ in funding", "150% community engagement growth"],
      link: "https://teamantic01.wixsite.com/team-antic/learn-more"
    },
    {
      title: "Congressional App Challenge Winner",
      role: "Developer",
      date: "2022",
      description: "Won Congressional App Challenge (CA-07) for innovative application addressing community needs through technology.",
      link: "https://www.congressionalappchallenge.us/22-CA07/"
    }
  ];

  const skills = {
    "Languages": ["Python", "SQL", "R", "Java", "JavaScript"],
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Rasa"],
    "Data Engineering": ["PostgreSQL", "BigQuery", "Supabase", "ETL Pipelines", "Docker"],
    "Visualization": ["React", "D3.js", "Recharts", "Tableau", "Power BI"],
    "Tools & Platforms": ["Git", "ArcGIS", "Jira", "Asana", "Azure"]
  };

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="bg-slate-900 rounded-2xl max-w-4xl w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              {project.icon}
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">×</button>
          </div>
          
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-cyan-400 text-lg mb-1">{project.role}</p>
          <p className="text-slate-400 mb-6">{project.org} • {project.date}</p>
          
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
              <p className="leading-relaxed">{project.details.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Approach</h3>
              <ul className="space-y-2">
                {project.details.approach.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Impact</h3>
              <p className="leading-relaxed">{project.details.impact}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.details.links && (
              <div className="flex flex-wrap gap-3 pt-4">
                {project.details.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AJ
          </div>
          <div className="flex gap-6">
            {['Projects', 'Research', 'Skills', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mx-auto mb-6 flex items-center justify-center text-6xl font-bold">
              AJ
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Akansha Jain
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4">
            Data Scientist & Machine Learning Engineer
          </p>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Building AI-powered solutions for climate, health, and social impact • UC Berkeley Data Science + Cognitive Science
          </p>
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <a href="mailto:akanshajain@berkeley.edu" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/-akansha-jain/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/akanshajai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-slate-500" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:bg-slate-800/70 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-cyan-400 mb-1">{project.role}</p>
                <p className="text-slate-400 text-sm mb-4">{project.org} • {project.date}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-cyan-400 font-bold text-sm">{metric.split(' ')[0]}</div>
                        <div className="text-slate-400 text-xs">{metric.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Early Work Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-400">Early Work & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {earlyWork.map((work, idx) => (
                <a
                  key={idx}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all border border-slate-700/50 hover:border-cyan-500/50"
                >
                  <h4 className="text-xl font-bold mb-2">{work.title}</h4>
                  <p className="text-cyan-400 text-sm mb-3">{work.role} • {work.date}</p>
                  <p className="text-slate-300 mb-4">{work.description}</p>
                  {work.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {work.achievements.map((achievement, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {research.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-yellow-500/20">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-yellow-400 mb-1">{item.org}</p>
                <p className="text-slate-400 text-sm mb-4">{item.date}</p>
                <p className="text-slate-300 mb-4">{item.description}</p>
                {item.links && (
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-sm transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm a data scientist and machine learning engineer studying Data Science and Cognitive Science at UC Berkeley, passionate about leveraging AI to drive measurable social impact.
            </p>
            <p>
              My work spans environmental sustainability, healthcare analytics, and public policy. From architecting ETL pipelines processing 10M+ emission records to developing predictive models that reduced patient churn by 18%, I focus on creating scalable, production-ready solutions that address real-world challenges.
            </p>
            <p>
              As a <span className="text-yellow-400 font-semibold">2025 Bakar Ignite Scholar</span> conducting fiber optics research and a <span className="text-cyan-400 font-semibold">Top 5% YC Applicant</span>, I'm committed to using technology to tackle critical issues in climate, health equity, and data infrastructure.
            </p>
            <p className="text-slate-400 italic">
              Currently seeking opportunities in data visualization engineering and ML infrastructure where I can combine technical excellence with meaningful impact—particularly in roles that emphasize building elegant, performant data products that tell compelling stories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:akanshajain@berkeley.edu" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-all text-lg font-semibold">
              <Mail className="w-5 h-5" />
              akanshajain@berkeley.edu
            </a>
            <a href="https://www.linkedin.com/in/-akansha-jain/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-lg">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/akanshajai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-lg">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Akansha Jain • Built with React • Deployed on GitHub Pages</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;