
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            className={`relative flex flex-col overflow-hidden bg-card ${isExpanded ? 'fixed inset-4 z-[70] md:inset-8 rounded-none' : 'h-[400px] rounded-2xl cursor-pointer'}`}
            initial={{ borderRadius: '1rem' }}
            animate={{
                borderRadius: isExpanded ? '0.5rem' : '1rem',
                zIndex: isExpanded ? 70 : 1
            }}
            style={{
                // We keep inline styles for dynamic colors as Tailwind arbitrary values with props is messy
                background: `linear-gradient(135deg, ${project.color}11, #0f172a)`, // Darker background
                border: project.isFlagship
                    ? `2px solid ${project.color}66` // Stronger border for flagship
                    : `1px solid ${project.color}33`,
                boxShadow: isExpanded
                    ? `0 0 100px ${project.color}22`
                    : isHovered
                        ? `0 0 30px -5px ${project.color}33`
                        : `0 0 10px -5px ${project.color}11`,
            }}
            onClick={() => !isExpanded && onExpand(project)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header / Overlay - Hides when expanded to give full view, or stays as a minimal bar */}
            <motion.div
                className={`absolute top-0 left-0 right-0 p-6 z-20 flex justify-between items-start pointer-events-none transition-all duration-300 ${isExpanded ? 'bg-gradient-to-b from-black/90 to-transparent pb-20' : 'bg-gradient-to-b from-black/60 to-transparent'}`}
            >
                <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1" style={{ color: project.color }}>{project.title}</h3>
                    <span className="text-sm font-medium text-text-secondary tracking-wider uppercase">{project.subtitle}</span>
                </div>

                {isExpanded && (
                    <div className="flex items-center gap-3 pointer-events-auto">
                        {/* View Toggle */}
                        {project.documentation && (
                            <div className="bg-black/40 backdrop-blur-md rounded-lg p-1 flex gap-1 border border-white/10 text-xs font-medium">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setView('preview'); }}
                                    className={`px-3 py-1.5 rounded-md transition-all ${view === 'preview' ? 'bg-white/10 text-white shadow-sm' : 'text-text-secondary hover:text-white'}`}
                                >
                                    Live Preview
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setView('docs'); }}
                                    className={`px-3 py-1.5 rounded-md transition-all ${view === 'docs' ? 'bg-white/10 text-white shadow-sm' : 'text-text-secondary hover:text-white'}`}
                                >
                                    System Architecture
                                </button>
                            </div>
                        )}
                        <button
                            className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium backdrop-blur-md transition-colors"
                            onClick={(e) => { e.stopPropagation(); onClose(); }}
                        >
                            Close Portal
                        </button>
                    </div>
                )}
            </motion.div>

            {/* The Portal (Iframe / Docs) */}
            <div className="flex-1 w-full relative bg-black/50">
                {view === 'docs' ? (
                    <div className="h-full w-full pt-28 px-4 md:px-12 pb-12 overflow-y-auto">
                        <TechnicalDocs project={project} />
                    </div>
                ) : (
                    <>
                        {project.component === 'JarvisSimulator' ? (
                            <div className="w-full h-full pt-20">
                                <JarvisArchitecture isActive={isInteractive} />
                            </div>
                        ) : (
                            <div className="w-full h-full pt-20">
                                <iframe
                                    src={project.url}
                                    title={project.title}
                                    className="w-full h-full border-0 bg-white"
                                    style={{
                                        pointerEvents: isInteractive ? 'auto' : 'none', // Only interactive when expanded
                                        opacity: isInteractive ? 1 : 0.7,
                                        filter: isInteractive ? 'none' : 'grayscale(100%) blur(1px) contrast(1.2)',
                                        transition: 'all 0.5s ease'
                                    }}
                                    sandbox="allow-scripts allow-same-origin allow-forms"
                                />
                            </div>
                        )}
                        {/* Overlay to prevent interaction when not expanded */}
                        {!isInteractive && <div className="absolute inset-0 z-10" />}
                    </>
                )}
            </div>

            {/* Hover Info (only visible when not expanded) */}
            {!isExpanded && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech?.slice(0, 3).map(t => (
                            <span key={t} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-white/5 border border-white/10 rounded text-text-secondary">
                                {t}
                            </span>
                        ))}
                        {project.tech?.length > 3 && <span className="text-xs text-text-secondary self-center">+{project.tech.length - 3}</span>}
                    </div>
                    <div className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        Click to Enter Portal <span className="text-lg">→</span>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
