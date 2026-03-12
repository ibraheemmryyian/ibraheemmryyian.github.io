import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, FileText } from 'lucide-react';
import { projects } from './data/projects';
import PortalCard from './components/PortalCard';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Mission from './components/Mission';
import SEOHead from './components/SEO/SEOHead';

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [view, setView] = useState('home'); // 'home' | 'resume'

  const handleExpand = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  // Group projects
  const aiProjects = projects.filter(p => ['symbioflows', 'jarvis'].includes(p.id));
  const frontendProjects = projects.filter(p => !['symbioflows', 'jarvis'].includes(p.id));

  // JSON-LD Structured Data (Schema.org)
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ibraheem Mryyian",
      "jobTitle": "AI Engineer & Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "SymbioFlows"
      },
      "url": "https://ibraheemmryyian.com",
      "sameAs": [
        "https://github.com/ibraheemmryyian",
        "https://symbioflows.com"
      ]
    }
  };

  return (
    <div className="app-container">
      <SEOHead
        title={view === 'resume' ? "Resume" : (activeProject ? activeProject.title : "Home")}
        script={schema}
      />

      {view === 'resume' && <Resume onBack={() => setView('home')} />}

      {view === 'resume' ? (
        <Resume onBack={() => setView('home')} />
      ) : (
        <>
          {/* Backdrop for Expanded Portal */}
          <AnimatePresence>
            {activeProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="portal-backdrop"
                style={{
                  position: 'fixed',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(5px)',
                  zIndex: 900
                }}
                onClick={handleClose}
              />
            )}
          </AnimatePresence>

          <header className="hero min-h-[60vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="brand-title"
              >
                IBRAHEEM <br /> MRYYIAN.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="brand-subtitle flex items-center gap-4"
              >
                <span className="w-12 h-[1px] bg-accent" />
                High-Performance AI Engineering
              </motion.div>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <SocialLink href="https://github.com/ibraheemmryyian" icon={Github} />
              <SocialLink href="mailto:imrryyian@gmail.com" icon={Mail} />
              <button
                onClick={() => setView('resume')}
                className="social-icon group"
                title="View Resume"
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <FileText size={20} className="group-hover:text-accent transition-colors" />
                <span className="text-xs uppercase tracking-widest ml-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold">Generated Resume</span>
              </button>
            </motion.div>
          </header>

          {/* MISSION SECTION */}
          <Mission />

          {/* TIMELINE SECTION */}
          <section className="portfolio-section">
            <h2 className="section-title">The Evolution</h2>
            <Timeline />
          </section>

          {/* Section 1: AI Infrastructure */}
          <section className="portfolio-section">
            <h2 className="section-title">Intelligence Infrastructure</h2>
            <div className="project-grid featured">
              {aiProjects.map((project) => (
                <PortalCard
                  key={project.id}
                  project={project}
                  isExpanded={activeProject?.id === project.id}
                  onExpand={handleExpand}
                  onClose={handleClose}
                />
              ))}
            </div>
          </section>

          {/* Section 2: Frontend Experiences */}
          <section className="portfolio-section">
            <h2 className="section-title">Digital Experiences</h2>
            <div className="project-grid standard">
              {frontendProjects.map((project) => (
                <PortalCard
                  key={project.id}
                  project={project}
                  isExpanded={activeProject?.id === project.id}
                  onExpand={handleExpand}
                  onClose={handleClose}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Section 3: Technical Deep Dives */}
      <section className="portfolio-section architecture-section">
        <h2 className="section-title">Technical Deep Dives</h2>
        <p className="section-intro">Explore the architecture and engineering decisions behind each flagship project.</p>
        <div className="architecture-grid">
          {aiProjects.filter(p => p.documentation).map((project) => (
            <motion.div
              key={project.id}
              className="architecture-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="arch-header" style={{ borderLeft: `4px solid ${project.color}` }}>
                <h3>{project.title}</h3>
                <span className="arch-subtitle">{project.subtitle}</span>
              </div>
              <div className="arch-docs">
                {project.documentation.map((doc, idx) => (
                  <details key={idx} className="doc-section">
                    <summary>
                      <span className="doc-number">0{idx + 1}</span>
                      {doc.title}
                    </summary>
                    <pre className="doc-content">{doc.content}</pre>
                  </details>
                ))}
              </div>
              {project.tech && (
                <div className="arch-tech">
                  {project.tech.map(t => <span key={t} className="arch-tag">{t}</span>)}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Ibraheem Mryyian. Advanced Engineering Portfolio.</p>
      </footer>
    </div>
  );
}

const SocialLink = ({ href, icon: Icon, target = "_blank" }) => (
  <a href={href} target={target} rel="noopener noreferrer" className="social-icon">
    <Icon size={20} />
  </a>
);

export default App;
