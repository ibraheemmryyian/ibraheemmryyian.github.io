
import React from 'react';
import { motion } from 'framer-motion';
import JarvisFlowDiagram from './JarvisFlowDiagram';

const COMPONENT_MAP = {
    'JarvisFlowDiagram': <JarvisFlowDiagram />
};

export default function TechnicalDocs({ project }) {
    if (!project.documentation) {
        return (
            <div className="flex items-center justify-center h-full text-text-secondary">
                <p>Documentation not available for this project.</p>
            </div>
        );
    }

    return (
        <div className="technical-docs w-full text-text-primary font-sans">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <header className="border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        {project.title} <span className="text-accent">Architecture</span>
                    </h1>
                    <p className="text-xl text-text-secondary">{project.subtitle}</p>
                </header>

                {/* Git Story / Development Log */}
                {project.gitStory && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl font-semibold flex items-center gap-3">
                            <span className="text-accent text-sm font-mono">00.</span>
                            Development Log
                        </h2>
                        <div className="bg-card border border-white/5 rounded-lg p-6 font-mono text-sm max-h-96 overflow-y-auto custom-scrollbar shadow-inner">
                            <div className="flex flex-col gap-4">
                                {project.gitStory.map((commit, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="min-w-[100px] text-text-secondary pt-1 border-r border-white/5 pr-4 text-right text-xs">
                                            {commit.date}
                                        </div>
                                        <div className="flex-1 pb-4 border-b border-white/5 last:border-0 last:pb-0 relative">
                                            {/* Dot indicator */}
                                            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-accent transition-colors shadow-[0_0_8px_rgba(99,102,241,0.5)] opacity-0 group-hover:opacity-100" />
                                            <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                                                {commit.message}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Sections */}
                {project.documentation.map((section, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl font-semibold flex items-center gap-3">
                            <span className="text-accent text-sm font-mono">0{index + 1}.</span>
                            {section.title}
                        </h2>
                        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-accent">
                            {/* Render content - checks for custom component or string/JSX */}
                            {section.component && COMPONENT_MAP[section.component] ? (
                                <div className="my-8">
                                    {COMPONENT_MAP[section.component]}
                                </div>
                            ) : typeof section.content === 'string' ? (
                                <p className="whitespace-pre-line leading-relaxed">{section.content}</p>
                            ) : (
                                section.content
                            )}
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
