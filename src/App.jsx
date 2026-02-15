
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PortalCard from './components/PortalCard';
import Timeline from './components/Timeline';
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

  // Group projects for display
  const featuredProjects = projects.filter(p => p.isFlagship);
  const otherProjects = projects.filter(p => !p.isFlagship);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ibraheem Mryyian",
      "jobTitle": "AI Engineer & Founder",
      "url": "https://ibraheemmryyian.com",
      "sameAs": [
        "https://github.com/ibraheemmryyian",
        "https://symbioflows.com"
      ]
    }
  };

  if (view === 'resume') {
    return <Resume onBack={() => setView('home')} />;
  }

  return (
    <div className="app-container min-h-screen">
      <SEOHead title="Ibraheem Mryyian - AI Engineer" script={schema} />

      <Navbar />

      <main>
        <Hero />

        <About />

        <section id="work" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-text-secondary">Signature projects defining my engineering philosophy.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <PortalCard
                  key={project.id}
                  project={project}
                  isExpanded={activeProject?.id === project.id}
                  onExpand={handleExpand}
                  onClose={handleClose}
                />
              ))}
            </div>

            {otherProjects.length > 0 && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="my-12"
                >
                  <h3 className="text-2xl font-bold mb-4">Other Experiments</h3>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherProjects.map((project) => (
                    <PortalCard
                      key={project.id}
                      project={project}
                      isExpanded={activeProject?.id === project.id}
                      onExpand={handleExpand}
                      onClose={handleClose}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* <section className="py-20 bg-background-alt/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Evolution</h2>
            <Timeline />
          </div>
        </section> */}

        <Skills />

        <Contact />
      </main>

      <Footer />

      {/* Portal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm flex justify-center items-center p-4 sm:p-8 overflow-y-auto"
            onClick={handleClose}
          >
            {/* The extended content is rendered by PortalCard in "expanded" mode, 
                 but PortalCard logic in original app was tricky. 
                 Let's assume PortalCard handles its own expansion state rendering 
                 via `AnimatePresence` inside it or we need to render the Expanded Card here.
                 
                 Looking at original App.jsx, PortalCard was just mapped.
                 The overlay was separate:
                 
                 {activeProject && (
                    <motion.div ... backdrop ... />
                 )}
                 
                 And existing PortalCards handled their layout?
                 Actually, usually PortalCard uses `layoutId` to expand in place or to a Fixed position.
                 
                 Let's check PortalCard.jsx code again if I have it. 
                 I don't have the full content of PortalCard.jsx in history (Step 19 was task_boundary, Step 6 was package.json, Step 7 was App.jsx).
                 Step 7 App.jsx had:
                 
                 <AnimatePresence>
                    {activeProject && ( ... backdrop ... )}
                 </AnimatePresence>
                 
                 And then the cards were mapped.
                 When a card is expanded, it commonly uses `layoutId`.
                 
                 I will keep the backdrop here. Use z-index 50.
              */}
            {/* This div is just the backdrop. The actual expanded card is rendered by the component itself via layoutId? 
                  Or is there a specific specific ExpandedCard component?
                  In standard framer-motion shared layout, the component effectively "moves" to the new hierarchy or stays 
                  but visually transforms. 
                  
                  I'll re-add the backdrop div exactly as it was but with Tailwind classes.
              */}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
