
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
                <header className="border-b border-neutral-200 pb-8">
                    <h1 className="text-4xl font-bold mb-2 text-neutral-900">
                        {project.title} <span className="text-accent">Architecture</span>
                    </h1>
                    <p className="text-xl text-neutral-600">{project.subtitle}</p>
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
                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 font-mono text-sm max-h-96 overflow-y-auto custom-scrollbar shadow-inner">
                            <div className="flex flex-col gap-4">
                                {project.gitStory.map((commit, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="min-w-[100px] text-neutral-500 pt-1 border-r border-neutral-200 pr-4 text-right text-xs">
                                            {commit.date}
                                        </div>
                                        <div className="flex-1 pb-4 border-b border-neutral-100 last:border-0 last:pb-0 relative">
                                            {/* Dot indicator */}
                                            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-accent transition-colors shadow-[0_0_8px_rgba(0,102,255,0.3)] opacity-0 group-hover:opacity-100" />
                                            <p className="text-neutral-700 group-hover:text-black transition-colors leading-relaxed">
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
                        <div className="prose max-w-none prose-p:text-neutral-700 prose-headings:text-neutral-900 prose-strong:text-accent font-sans">
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
