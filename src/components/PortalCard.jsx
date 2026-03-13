import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import JarvisArchitecture from './JarvisArchitecture';
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
                background: `linear-gradient(135deg, ${project.color}11, #ffffff)`,
                border: project.isFlagship
                    ? `1px solid #fbbf24` // Slimmer border for light mode
                    : `1px solid var(--card-border)`,
                boxShadow: isExpanded
                    ? `0 0 100px rgba(0,0,0,0.1)`
                    : project.isFlagship
                        ? `0 10px 30px -5px rgba(0, 102, 255, 0.2)`
                        : `0 10px 30px -5px rgba(0,0,0,0.05)`,
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
                            <div className="bg-gray-100 rounded-lg p-1 flex gap-1 border border-gray-200 text-sm">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setView('preview'); }}
                                    className={`px-3 py-1.5 rounded-md transition-colors ${view === 'preview' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                                >
                                    Live Preview
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setView('docs'); }}
                                    className={`px-3 py-1.5 rounded-md transition-colors ${view === 'docs' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
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
                            <JarvisArchitecture isActive={isInteractive} />
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
