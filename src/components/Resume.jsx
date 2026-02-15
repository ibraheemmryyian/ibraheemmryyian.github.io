
import React from 'react';
import { Mail, Github, Globe, MapPin, Printer, ArrowLeft, Phone } from 'lucide-react';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

export default function Resume({ onBack }) {
    // Filter projects
    const resumeProjects = projects.filter(p => p.isFlagship || p.id === 'email-telemetry');

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-8 print:p-0 print:bg-white text-gray-900 font-sans">

            {/* Controls - Hidden in Print */}
            <div className="max-w-[21cm] mx-auto mb-8 flex justify-between items-center print:hidden">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 text-gray-700 transition-colors"
                >
                    <ArrowLeft size={18} /> Back to Portfolio
                </button>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium"
                >
                    <Printer size={18} /> Print PDF
                </button>
            </div>

            {/* A4 Resume Page */}
            <div className="max-w-[21cm] mx-auto bg-white shadow-2xl print:shadow-none p-[1.5cm] md:p-[2cm] min-h-[29.7cm] flex flex-col">

                {/* Header */}
                <header className="border-b-2 border-gray-900 pb-6 mb-6">
                    <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">Ibraheem Mryyian</h1>
                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                            <Mail size={14} className="text-blue-600" /> Imrryyian@gmail.com
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Phone size={14} className="text-blue-600" /> +962 791706574
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-600" /> Amman 11831, Jordan
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Globe size={14} className="text-blue-600" /> ibraheemmryyian.com
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">Professional Profile</h2>
                    <p className="text-gray-800 leading-relaxed text-sm text-justify">
                        AI Systems Engineer and Full Stack Developer with a focus on autonomous agent architectures and industrial symbiosis platforms.
                        Proven track record in freelance web development and system design, delivering high-integrity microservices and self-healing local AI systems.
                        Combines advanced technical expertise in modern stacks (React, Node.js, Python) with a driven, problem-solving mindset honed through leadership roles and self-directed learning.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">Technical Proficiency</h2>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <span className="font-semibold text-gray-900 block mb-1">{category}</span>
                                <span className="text-gray-700 leading-snug">{items.join(', ')}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience & Projects */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 pb-1">Experience & Projects</h2>

                    {/* Freelance Work */}
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-gray-900 text-base">Freelance Web Developer</h3>
                            <span className="text-sm text-gray-600">Amman | Jan 2022 - Present</span>
                        </div>
                        <p className="text-sm text-gray-800 mb-2 leading-snug">
                            Developed multiple user-friendly websites focusing on performance, aesthetics, and SEO optimization.
                        </p>
                    </div>

                    {/* Flagship Projects */}
                    <div className="space-y-4">
                        {resumeProjects.map((project) => (
                            <div key={project.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900 text-base">{project.title}</h3>
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                        {project.tech.slice(0, 4).join(' • ')}
                                    </span>
                                </div>
                                <p className="text-xs text-blue-600 font-medium mb-1">{project.subtitle}</p>
                                <p className="text-sm text-gray-800 mb-1 leading-snug">
                                    {project.details.features ? (
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {project.details.features.slice(0, 2).map((feat, i) => (
                                                <li key={i}>
                                                    <span className="font-medium text-gray-900">{feat.title}:</span> {feat.desc}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        project.description
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">Education & Certifications</h2>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-gray-900">High School Diploma</h3>
                                <span className="text-sm text-gray-600">2021 - 2025</span>
                            </div>
                            <p className="text-sm text-gray-700">International Pioneers Academy, Amman</p>
                            <p className="text-sm text-gray-500 italic mt-0.5">Student Leader • Peer Tutoring Initiative</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-gray-900">Introduction to Applied Psychology</h3>
                                <span className="text-sm text-gray-600">Coursera</span>
                            </div>
                            <p className="text-sm text-gray-700">Yale University</p>
                        </div>
                        {/* Languages moved here or sidebar style */}
                        <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                            <span className="font-bold text-gray-900 text-sm">Languages: </span>
                            <span className="text-sm text-gray-700">Arabic (Native/C2), English (Fluent/C2)</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
