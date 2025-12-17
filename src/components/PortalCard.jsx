import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import JarvisSimulator from './JarvisSimulator';
import TechnicalDocs from './TechnicalDocs';

export default function PortalCard({ project, isExpanded, onExpand, onClose }) {
    const [isHovered, setIsHovered] = useState(false);
    const [view, setView] = useState('preview'); // 'preview' or 'docs'

    // If this card is fully expanded, we allow interaction with the iframe
    const isInteractive = isExpanded && view === 'preview';

    return (
        <motion.div
            layout
            className={`portal-card ${isExpanded ? 'expanded' : ''}`}
            initial={{ borderRadius: '1rem' }}
            animate={{
                borderRadius: isExpanded ? '0' : '1rem',
                zIndex: isExpanded ? 2000 : 1
            }}
            style={{
                background: `linear-gradient(135deg, ${project.color}22, #000000)`,
                border: project.isFlagship
                    ? `2px solid #fbbf24` // FLAGSHIP: Golden Border
                    : `1px solid ${project.color}44`,
                boxShadow: isExpanded
                    ? `0 0 100px ${project.color}22`
                    : project.isFlagship
                        ? `0 0 30px -5px #fbbf2444, 0 0 20px -5px ${project.color}22` // FLAGSHIP: Gold Glow
                        : `0 0 20px -5px ${project.color}22`,
            }}
            onClick={() => !isExpanded && onExpand(project)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header / Overlay - Hides when expanded to give full view, or stays as a minimal bar */}
            <motion.div className="card-header">
                <div className="card-title-group">
                    <h3 style={{ color: project.color }}>{project.title}</h3>
                    <span className="subtitle">{project.subtitle}</span>
                </div>

                {isExpanded && (
                    <div className="flex items-center gap-4">
                        {/* View Toggle */}
                        {project.documentation && (
                            <div className="bg-white/5 rounded-lg p-1 flex gap-1 border border-white/10 text-sm">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setView('preview'); }}
                                    className={`px-3 py-1.5 rounded-md transition-colors ${view === 'preview' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Live Preview
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setView('docs'); }}
                                    className={`px-3 py-1.5 rounded-md transition-colors ${view === 'docs' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    System Architecture
                                </button>
                            </div>
                        )}
                        <button className="close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                            Close Portal
                        </button>
                    </div>
                )}
            </motion.div>

            {/* The Portal (Iframe / Docs) */}
            <div className="portal-window">
                {view === 'docs' ? (
                    <TechnicalDocs project={project} />
                ) : (
                    <>
                        {project.component === 'JarvisSimulator' ? (
                            <JarvisSimulator isActive={isInteractive} />
                        ) : (
                            <iframe
                                src={project.url}
                                title={project.title}
                                className="portal-frame"
                                style={{
                                    pointerEvents: isInteractive ? 'auto' : 'none', // Only interactive when expanded
                                    opacity: 1
                                }}
                                sandbox="allow-scripts allow-same-origin allow-forms"
                            />
                        )}
                        {/* Overlay to prevent interaction when not expanded */}
                        {!isInteractive && <div className="portal-overlay" />}
                    </>
                )}
            </div>

            {/* Hover Info (only visible when not expanded) */}
            {!isExpanded && isHovered && (
                <motion.div
                    className="hover-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p>{project.description}</p>
                    <div className="tech-stack">
                        {project.tech?.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div className="hint">Click to Enter Portal</div>
                </motion.div>
            )}
        </motion.div>
    );
}
