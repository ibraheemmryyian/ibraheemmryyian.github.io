import React from 'react';
import { motion } from 'framer-motion';

export default function TechnicalDocs({ project }) {
    if (!project.documentation) {
        return (
            <div className="flex items-center justify-center h-full text-white/50">
                <p>Documentation not available for this project.</p>
            </div>
        );
    }

    return (
        <div className="technical-docs h-full overflow-y-auto bg-[#0a0a0a] text-gray-300 p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <header className="border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">{project.title} <span className="text-[#10b981]">Architecture</span></h1>
                    <p className="text-xl text-gray-400">{project.subtitle}</p>
                </header>

                {/* Git Story / Development Log */}
                {project.gitStory && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                            <span className="text-[#10b981] text-sm font-mono">00.</span>
                            Development Log
                        </h2>
                        <div className="bg-[#111] border border-white/10 rounded-lg p-6 font-mono text-sm max-h-96 overflow-y-auto custom-scrollbar">
                            <div className="flex flex-col gap-4">
                                {project.gitStory.map((commit, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="min-w-[100px] text-gray-500 pt-1 border-r border-white/5 pr-4 text-right text-xs">
                                            {commit.date}
                                        </div>
                                        <div className="flex-1 pb-4 border-b border-white/5 last:border-0 last:pb-0 relative">
                                            {/* Dot indicator */}
                                            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-[#10b981] transition-colors" />
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
                        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                            <span className="text-[#10b981] text-sm font-mono">0{index + 1}.</span>
                            {section.title}
                        </h2>
                        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-[#10b981]">
                            {/* Render content - accepting basic HTML/JSX or just text with simple newline handling */}
                            {typeof section.content === 'string' ? (
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
