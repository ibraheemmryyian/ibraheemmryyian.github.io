import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects';
import PortalCard from './components/PortalCard';
import Timeline from './components/Timeline';
import SEOHead from './components/SEO/SEOHead';

function App() {
  const [activeProject, setActiveProject] = useState(null);

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
      "url": "https://ibraheemmryyian.github.io",
      "sameAs": [
        "https://github.com/ibraheemmryyian",
        "https://symbioflows.com"
      ]
    }
  };

  return (
    <div className="app-container">
      <SEOHead
        title={activeProject ? activeProject.title : "Home"}
        script={schema}
      />

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

      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="brand-title"
        >
          IBRAHEEM MRYYIAN.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="brand-subtitle"
        >
          High-Performance AI Engineering
        </motion.div>
      </header>

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

export default App;
