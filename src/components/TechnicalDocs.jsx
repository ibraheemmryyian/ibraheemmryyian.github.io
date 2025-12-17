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
