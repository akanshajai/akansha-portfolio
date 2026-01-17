import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navCollapsed = scrollY > 100;

  const research = [
    {
      title: "Bakar Ignite Scholar",
      subtitle: "Fiber Optics DAS Research",
      org: "UC Berkeley - Professor Kenichi Soga's Lab",
      date: "2025",
      description: "Awarded competitive research grant to investigate Distributed Acoustic Sensing (DAS) applications using fiber optic technology for infrastructure monitoring and geophysical analysis.",
      links: [{ label: "Bakar Fellows Program", url: "https://bakarfellows.berkeley.edu" }]
    },
    {
      title: "Ranney Research Reasoning Group",
      subtitle: "Cognitive Science Research",
      org: "UC Berkeley - Professor Michael Ranney",
      date: "2024-Present",
      description: "Conducting cognitive science research on reasoning, decision-making, and climate change communication under Professor Michael Ranney.",
      links: [{ label: "Research Lab", url: "https://vcresearch.berkeley.edu/faculty/michael-ranney" }]
    }
  ];

  const projects = [
    {
      title: "Patient Engagement Analytics Platform",
      role: "Data Analyst Consultant",
      org: "Noora Health",
      date: "2025",
      category: "Healthcare Analytics",
      description: "Built predictive analytics system analyzing 1M+ multilingual patient records across 4 countries and 5 languages to reduce churn and increase engagement.",
      tech: ["BigQuery", "Tableau", "Logistic Regression", "Python", "SQL"],
      metrics: ["1M+ records", "91% accuracy", "18% churn reduction", "12% retention increase"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      details: {
        challenge: "Healthcare engagement platforms face significant early-stage churn, particularly in multilingual, multi-country contexts. The challenge was identifying behavioral patterns that predict disengagement before it occurs, enabling proactive intervention.",
        approach: [
          "Cleaned and standardized 1M+ patient records across disparate data sources in BigQuery",
          "Performed exploratory analysis to identify key behavioral indicators of disengagement",
          "Developed logistic regression model with feature engineering focused on early-stage user patterns",
          "Created Tableau dashboards visualizing engagement trends across 10+ regions and 5 languages",
          "Generated actionable insights that informed targeted intervention strategies"
        ],
        impact: "The predictive model (91% accuracy, AUC = 0.94) enabled 25% improvement in outreach efficiency, directly contributing to 12% increase in user retention and 18% reduction in early-stage churn.",
        links: []
      }
    },
    {
      title: "California Climate Action Data Infrastructure",
      role: "Data Engineer Intern",
      org: "CoolClimate Network",
      date: "2025",
      category: "Climate Tech",
      description: "Architected scalable ETL pipelines and interactive dashboards analyzing 10M+ emission records to model policy impacts for California municipalities.",
      tech: ["Python", "PostgreSQL", "Supabase", "React", "D3.js", "Recharts", "ETL"],
      metrics: ["10M+ records", "40% faster processing", "20+ municipalities"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      details: {
        challenge: "California municipalities needed centralized, analysis-ready emission data from fragmented statewide sources to evaluate policy interventions.",
        approach: [
          "Designed and deployed ETL workflows using Python and Supabase to integrate 10M+ emission records",
          "Optimized SQL pipelines through strategic indexing, partitioning, and Python automation, reducing processing time by 40%",
          "Prototyped interactive web dashboards using React, Recharts, and D3.js",
          "Implemented data quality checks and validation layers",
          "Collaborated with policy teams to translate complex datasets into actionable insights"
        ],
        impact: "The infrastructure now powers policy analysis for 20+ California municipalities, enabling real-time modeling of emission pricing scenarios.",
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
      date: "2025",
      category: "Environmental AI",
      description: "Developing generative AI workflows to detect anomalies in statewide water quality datasets, ensuring regulatory data integrity for environmental decision-making.",
      tech: ["Python", "Pandas", "Hugging Face", "Random Forest", "Isolation Forest"],
      metrics: ["40+ analytes", "87% accuracy", "Statewide coverage"],
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      details: {
        challenge: "California's surface water monitoring data contains inconsistencies across 40+ analytes. Traditional QA/QC methods fail to distinguish true environmental extremes from measurement errors.",
        approach: [
          "Built multivariate anomaly detection system using Random Forest regression",
          "Generated 5-fold out-of-fold predictions to prevent overfitting",
          "Applied Isolation Forest (5% contamination threshold) over multiple iterations",
          "Integrated generative AI fine-tuning using flagged outlier patterns",
          "Developed comprehensive documentation for regulatory teams"
        ],
        impact: "Achieved 87% accuracy in distinguishing measurement errors from genuine environmental anomalies, improving regulatory dataset consistency.",
        links: []
      }
    },
    {
      title: "Walkability & Mental Health Research",
      role: "Technical Product Manager",
      org: "DataGood",
      date: "2025",
      category: "Urban Analytics",
      description: "Leading cross-functional team analyzing relationships between urban walkability metrics and mental health outcomes to generate actionable policy insights.",
      tech: ["Python", "Scikit-learn", "Geospatial Analysis", "ML"],
      metrics: ["3+ policy insights", "25% accuracy improvement"],
      gradient: "from-lime-500 via-green-500 to-emerald-500",
      details: {
        challenge: "Quantifying walkability-mental health relationships requires integrating diverse geospatial, health, and demographic datasets.",
        approach: [
          "Spearheaded research team combining geospatial analysis with health outcome data",
          "Developed machine learning models improving walkability prediction accuracy by 25%",
          "Coordinated between data scientists, policy researchers, and domain experts",
          "Generated evidence-based policy recommendations"
        ],
        impact: "Research yielded 3+ actionable policy insights connecting walkability infrastructure to mental health outcomes.",
        links: [{ label: "Project Presentation", url: "https://docs.google.com/presentation/d/1jLlL0jhiegKFr4DcJ6LiogxFYa6DQ6hgrDbnDe0yD5U/edit" }]
      }
    }
  ];

  const earlyWork = [
    {
      title: "Team ANTIC: Anti-Carbon Nonprofit",
      role: "Founder & Community Coordinator",
      date: "2022-2023",
      description: "Founded climate education nonprofit reaching 6000+ students through curriculum development and presentations.",
      link: "https://arcg.is/1P4SC90"
    },
    {
      title: "Congressional App Challenge Winner",
      role: "Developer",
      date: "2022",
      description: "Won Congressional App Challenge (CA-07) for innovative application addressing community needs.",
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
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen">
        <button onClick={onClose} className="fixed top-8 right-8 text-white text-5xl hover:rotate-90 transition-transform duration-300 z-10">×</button>
        <div className="max-w-4xl mx-auto px-8 py-32" onClick={(e) => e.stopPropagation()}>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest mb-6 text-emerald-400">{project.date} · {project.category}</p>
            <h2 className="text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{project.title}</h2>
            <p className="text-2xl text-gray-300 mb-3">{project.role}</p>
            <p className="text-gray-400">{project.org}</p>
          </div>
          
          <div className="space-y-16 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-3xl font-serif mb-6 text-white">Challenge</h3>
              <p className="text-xl">{project.details.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-serif mb-6 text-white">Approach</h3>
              <ul className="space-y-4">
                {project.details.approach.map((item, idx) => (
                  <li key={idx} className="flex gap-6 text-lg">
                    <span className="text-emerald-400">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-3xl font-serif mb-6 text-white">Impact</h3>
              <p className="text-xl">{project.details.impact}</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-serif mb-6 text-white">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(tech => (
                  <span key={tech} className="px-5 py-2 border border-emerald-500/30 text-sm bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.details.links && project.details.links.length > 0 && (
              <div className="flex flex-wrap gap-6 pt-12 border-t border-gray-800">
                {project.details.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
    <div className="min-h-screen bg-black text-white">
      {/* Custom Cursor */}
      <div 
        className="fixed w-5 h-5 border border-white rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      
      {/* Navigation with Morphing Animation */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ease-in-out ${
        navCollapsed 
          ? 'bg-white/10 backdrop-blur-xl rounded-full px-8 py-3' 
          : 'bg-transparent px-0 py-0'
      }`}>
        <div className={`flex items-center transition-all duration-700 ${
          navCollapsed ? 'gap-8' : 'gap-48'
        }`}>
          <div className={`text-xl font-serif transition-all duration-700 ${navCollapsed ? 'opacity-100' : 'opacity-0 absolute'}`}>
            AJ
          </div>
          <div className={`flex items-center text-xs uppercase tracking-widest transition-all duration-700 ${
            navCollapsed ? 'gap-6' : 'gap-12'
          }`}>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#research" className="hover:text-emerald-400 transition-colors">Research</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero - Centered */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-teal-950/20" />
        <div className="max-w-5xl text-center relative z-10">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-none mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Akansha Jain
          </h1>
          <p className="text-3xl md:text-4xl text-gray-300 mb-6">
            Data Scientist & Machine Learning Engineer
          </p>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Building AI-powered solutions for climate, health, and social impact at UC Berkeley
          </p>
          <div className="flex gap-8 justify-center text-xs uppercase tracking-widest">
            <a 
              href="mailto:akanshajain@berkeley.edu" 
              className="group flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              Email
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
            <a 
              href="https://www.linkedin.com/in/-akansha-jain/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              LinkedIn
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
            <a 
              href="https://github.com/akanshajai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              GitHub
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-40 px-8 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/5 to-black" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif leading-snug mb-16 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            I build scalable data infrastructure and machine learning systems that drive measurable impact in climate, healthcare, and public policy.
          </h2>
          <div className="flex gap-16 text-sm uppercase tracking-widest text-gray-500">
            <div>
              <p className="mb-4">Recognition</p>
              <p className="text-emerald-400 mb-2">2025 Bakar Ignite Scholar</p>
              <p className="text-emerald-400">Top 5% YC Applicant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Distinct Cards */}
      <section id="projects" className="py-40 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest mb-20 text-gray-500 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700`} />
                  <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-widest mb-4 text-emerald-400">{project.date} · {project.category}</p>
                  <h3 className="text-3xl font-serif mb-3 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.role}</p>
                  <p className="text-sm text-gray-500 mb-6">{project.org}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.slice(0, 3).map((metric, i) => (
                      <span key={i} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Early Work */}
          <div className="mt-40 pt-20 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-widest mb-16 text-gray-500 text-center">Early Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {earlyWork.map((work, idx) => (
                <a
                  key={idx}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500"
                >
                  <h4 className="text-2xl font-serif mb-3 group-hover:text-emerald-400 transition-colors duration-300">{work.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{work.role} · {work.date}</p>
                  <p className="text-gray-400">{work.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-40 px-8 border-t border-white/10 bg-gradient-to-b from-black via-emerald-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest mb-20 text-gray-500 text-center">Research</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {research.map((item, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-emerald-500/50 transition-all duration-500">
                <p className="text-xs uppercase tracking-widest mb-6 text-emerald-400">{item.date}</p>
                <h3 className="text-3xl font-serif mb-3 group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-xl mb-6 text-gray-400">{item.subtitle}</p>
                <p className="text-gray-500 mb-6">{item.org}</p>
                <p className="text-gray-300 leading-relaxed mb-8">{item.description}</p>
                {item.links && item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Centered & Horizontal */}
      <section className="py-40 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest mb-20 text-gray-500 text-center">Skills</h2>
          <div className="space-y-16">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-2xl font-serif mb-8 text-emerald-400">{category}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {items.map(item => (
                    <span key={item} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-40 px-8 border-t border-white/10 bg-gradient-to-b from-black via-emerald-950/5 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest mb-16 text-gray-500 text-center">About</h2>
          <div className="space-y-8 text-xl leading-relaxed text-gray-300">
            <p>
              I'm a data scientist and machine learning engineer studying Data Science and Cognitive Science at UC Berkeley, passionate about leveraging AI to drive measurable social impact.
            </p>
            <p>
              My work spans environmental sustainability, healthcare analytics, and public policy. From architecting ETL pipelines processing 10M+ emission records to developing predictive models that reduced patient churn by 18%, I focus on creating scalable, production-ready solutions that address real-world challenges.
            </p>
            <p>
              I'm committed to using technology to tackle critical issues in climate, health equity, and data infrastructure.
            </p>
            <p className="text-gray-500 italic">
              Currently seeking opportunities in data visualization engineering and ML infrastructure where I can combine technical excellence with meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-serif mb-16 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
            Let's work together
          </h2>
          <div className="flex gap-12 justify-center text-xs uppercase tracking-widest">
            <a 
              href="mailto:akanshajain@berkeley.edu" 
              className="group flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              Email
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
            <a 
              href="https://www.linkedin.com/in/-akansha-jain/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              LinkedIn
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
            <a 
              href="https://github.com/akanshajai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              GitHub
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-600">
          <p>© 2025 Akansha Jain</p>
          <p>Built with React</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;