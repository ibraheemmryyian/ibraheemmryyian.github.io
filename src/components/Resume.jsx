
import React from 'react';
import { Mail, Github, Globe, MapPin, Printer, ArrowLeft, Phone } from 'lucide-react';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

export default function Resume({ onBack }) {
    // Filter projects
    const resumeProjects = projects.filter(p => p.isFlagship || p.id === 'email-telemetry' || p.id === 'telegravity');

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
                    title="Save as PDF using the system print dialog"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium"
                >
                    <Printer size={18} /> Download PDF
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
                            <Phone size={14} className="text-blue-600" /> 0792313484
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-600" /> Amman 11831, Jordan
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Globe size={14} className="text-blue-600" /> ibraheemmryyian.github.io
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 border-b border-gray-100 pb-1">Professional Profile</h2>
                    <p className="text-gray-900 leading-relaxed text-sm text-justify font-medium">
                        Solo founder and AI systems engineer building SymbioFlows, an industrial symbiosis marketplace for the GCC market.
                        Built a proprietary 89-agent autonomous coding system (J.A.R.V.I.S) from scratch in two weeks.
                        Consistently delivering high-integrity infrastructure with 1000+ commits in the last 6 months—all pre-funding, at 19.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 border-b border-gray-100 pb-1">Technical Proficiency</h2>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-[13px]">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <span className="font-bold text-gray-900 block mb-0.5">{category}</span>
                                <span className="text-gray-600 leading-tight">{items.join(' • ')}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience & Projects */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 border-b border-gray-100 pb-1">Engineering & Ventures</h2>

                    {/* Flagship Projects */}
                    <div className="space-y-5">
                        {resumeProjects.map((project) => (
                            <div key={project.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900 text-base">{project.title}</h3>
                                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                                        {project.tech.slice(0, 3).join(' / ')}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 font-bold mb-1.5 uppercase tracking-wide">{project.subtitle}</p>
                                <div className="text-[13px] text-gray-700 leading-snug">
                                    {project.details.features ? (
                                        <ul className="list-disc list-outside ml-4 space-y-1">
                                            {project.details.features.slice(0, 2).map((feat, i) => (
                                                <li key={i}>
                                                    <span className="font-semibold text-gray-900">{feat.title}:</span> {feat.desc}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{project.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Freelance Work */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-gray-900 text-base">Systems Consultant (Freelance)</h3>
                            <span className="text-xs font-bold text-gray-500">Jan 2022 - Present</span>
                        </div>
                        <p className="text-[13px] text-gray-700 leading-snug">
                            Architected high-concurrency data pipelines and custom internal tooling for regional SMBs. Delivered optimized e-commerce infrastructures and automated reporting systems for non-technical stakeholders.
                        </p>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 border-b border-gray-100 pb-1">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-gray-900 text-base">B.S. in Computer Engineering</h3>
                                <span className="text-xs font-bold text-gray-500 italic">2025 - 2030 (Expected)</span>
                            </div>
                            <p className="text-sm text-gray-800 font-medium">Hashemite University (HU), Jordan</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-gray-900 text-base">High School Diploma</h3>
                                <span className="text-xs font-bold text-gray-500 italic">2021 - 2025</span>
                            </div>
                            <p className="text-[13px] text-gray-700">International Pioneers Academy • Student Leader • Peer Tutoring Initiative</p>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                            <div className="text-sm"><span className="font-bold">Languages:</span> Arabic (Native), English (C2)</div>
                            <div className="text-sm"><span className="font-bold">Certifications:</span> Intro to Applied Psych (Yale/Coursera)</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
