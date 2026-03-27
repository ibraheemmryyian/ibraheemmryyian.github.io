
import React from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { skills } from '../data/skills';

export default function Resume({ onBack }) {
    return (
        <div className="resume-page-wrapper">

            {/* Controls - Hidden in Print */}
            <div className="resume-controls print-hide">
                <button onClick={onBack} className="resume-btn resume-btn-back">
                    <ArrowLeft size={16} /> Back
                </button>
                <button
                    onClick={() => window.print()}
                    title="Save as PDF using the system print dialog"
                    className="resume-btn resume-btn-download"
                >
                    <Printer size={16} /> Download PDF
                </button>
            </div>

            {/* A4 Resume Page */}
            <div className="resume-a4">

                {/* Header */}
                <header className="resume-header">
                    <h1 className="resume-name">Ibraheem Mryyian</h1>
                    <div className="resume-contact-row">
                        <span>Imrryyian@gmail.com</span>
                        <span className="resume-sep">•</span>
                        <span>+962 79 231 3484</span>
                        <span className="resume-sep">•</span>
                        <span>Amman, Jordan</span>
                        <span className="resume-sep">•</span>
                        <a href="https://www.linkedin.com/in/ibraheem-r/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ibraheem-r</a>
                        <span className="resume-sep">•</span>
                        <a href="https://ibraheemmryyian.github.io" target="_blank" rel="noopener noreferrer">ibraheemmryyian.github.io</a>
                    </div>
                </header>

                {/* Summary */}
                <section className="resume-section">
                    <h2 className="resume-section-title">Summary</h2>
                    <p className="resume-summary-text">
                        Startup founder and Computer Engineering student. I build AI-powered products — from an industrial symbiosis marketplace
                        (SymbioFlows) to a multi-agent AI assistant (Veiktuor) — and I've been pitching investors since I was 18.
                        Strongest with AI-driven backends and shipping fast with modern tooling.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="resume-section">
                    <h2 className="resume-section-title">Technical Skills</h2>
                    <div className="resume-skills-grid">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="resume-skill-row">
                                <span className="resume-skill-category">{category}: </span>
                                <span className="resume-skill-items">{items.join(', ')}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="resume-section">
                    <h2 className="resume-section-title">Projects</h2>
                    <div className="resume-entries">

                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">SymbioFlows</h3>
                                    <span className="resume-entry-subtitle">Founder & Lead Developer</span>
                                </div>
                                <span className="resume-entry-date">2025 — Present</span>
                            </div>
                            <ul className="resume-entry-list">
                                <li>Built an AI industrial symbiosis marketplace that connects waste producers with recyclers through intelligent matching</li>
                                <li>Integrated DeepSeek R1 for intelligent waste stream prediction with heuristic guardrails to validate outputs</li>
                                <li>Developed financial projection engine generating revenue reports for 500+ potential material matches</li>
                                <li>Secured investor meetings at age 18 to pitch the platform for GCC-region enterprise partnerships</li>
                            </ul>
                            <div className="resume-entry-tech">Python · Node.js · PostgreSQL · Supabase · DeepSeek R1 · FastAPI</div>
                        </div>

                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">Veiktuor</h3>
                                    <span className="resume-entry-subtitle">Personal Project</span>
                                </div>
                                <span className="resume-entry-date">2025 — Present</span>
                            </div>
                            <ul className="resume-entry-list">
                                <li>Built an AI command center that orchestrates multiple specialized agents for daily task automation</li>
                                <li>Implemented self-healing error loops — on failure, the system captures context, diagnoses, patches, and resumes</li>
                                <li>Designed a codebase navigation system using AST parsing for agents to traverse project dependencies</li>
                            </ul>
                            <div className="resume-entry-tech">Python · Local LLMs · AST Parsing · Security Sandboxing</div>
                        </div>

                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">TeleGravity</h3>
                                    <span className="resume-entry-subtitle">Personal Project</span>
                                </div>
                                <span className="resume-entry-date">2025</span>
                            </div>
                            <ul className="resume-entry-list">
                                <li>Built a Telegram-to-VS Code bridge for remote IDE control, terminal streaming, and agent supervision from mobile</li>
                                <li>Implemented approval/reject workflows to keep a human in the loop for autonomous agent actions</li>
                            </ul>
                            <div className="resume-entry-tech">Node.js · VS Code Extension API · Telegram Bot API</div>
                        </div>

                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">Email Telemetry Engine</h3>
                                    <span className="resume-entry-subtitle">Personal Project</span>
                                </div>
                                <span className="resume-entry-date">2025</span>
                            </div>
                            <ul className="resume-entry-list">
                                <li>Built an email engagement tracking system that recovers user data behind privacy proxies (Apple Mail, Gmail)</li>
                                <li>Used CSS media query techniques and timing heuristics to identify true client environments</li>
                            </ul>
                            <div className="resume-entry-tech">JavaScript · CSS · Browser Internals · Node.js</div>
                        </div>

                    </div>
                </section>

                {/* Experience */}
                <section className="resume-section">
                    <h2 className="resume-section-title">Experience</h2>
                    <div className="resume-entries">
                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">Software Developer</h3>
                                    <span className="resume-entry-subtitle">Internal Tools — Contract</span>
                                </div>
                                <span className="resume-entry-date">Jun 2025 — Jul 2025</span>
                            </div>
                            <ul className="resume-entry-list">
                                <li>Hired in a sales capacity but transitioned to a development role within the first week based on technical ability</li>
                                <li>Built internal tooling and operational software for the company's day-to-day workflows</li>
                            </ul>
                        </div>
                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">Freelance Web Developer</h3>
                                    <span className="resume-entry-subtitle">Self-Employed</span>
                                </div>
                                <span className="resume-entry-date">2023</span>
                            </div>
                            <ul className="resume-entry-list">
                                <li>Designed and built a website for a local café as a client project</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="resume-section">
                    <h2 className="resume-section-title">Education</h2>
                    <div className="resume-entries">
                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">B.Sc. Computer Engineering</h3>
                                    <span className="resume-entry-subtitle">Hashemite University, Jordan</span>
                                </div>
                                <span className="resume-entry-date">Sep 2025 — Present</span>
                            </div>
                        </div>
                        <div className="resume-entry">
                            <div className="resume-entry-header">
                                <div>
                                    <h3 className="resume-entry-title">High School Diploma</h3>
                                    <span className="resume-entry-subtitle">International Pioneers Academy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer row */}
                <div className="resume-footer-row">
                    <div className="resume-footer-item">
                        <span className="resume-skill-category">Languages:</span> English (Native), Arabic (Fluent)
                    </div>
                    <div className="resume-footer-item">
                        <span className="resume-skill-category">Coursework:</span> Intro to Applied Psychology (Yale/Coursera)
                    </div>
                </div>

            </div>

            {/* Print-specific embedded styles */}
            <style>{`
                /* === RESUME PAGE WRAPPER === */
                .resume-page-wrapper {
                    min-height: 100vh;
                    background: #f0f0f0;
                    padding: 2rem 1rem;
                    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
                    color: #1a1a1a;
                }

                .resume-controls {
                    max-width: 794px;
                    margin: 0 auto 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .resume-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1.25rem;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .resume-btn-back {
                    background: #fff;
                    color: #374151;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                .resume-btn-back:hover { background: #f3f4f6; }

                .resume-btn-download {
                    background: #111827;
                    color: #fff;
                }
                .resume-btn-download:hover { background: #1f2937; }

                /* === A4 SHEET === */
                .resume-a4 {
                    width: 794px;
                    min-height: 1123px;
                    margin: 0 auto;
                    background: #fff;
                    box-shadow: 0 4px 40px rgba(0,0,0,0.12);
                    padding: 48px 56px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                }

                /* === HEADER === */
                .resume-header {
                    margin-bottom: 20px;
                    padding-bottom: 16px;
                    border-bottom: 2px solid #111827;
                }

                .resume-name {
                    font-size: 28px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    margin: 0 0 8px;
                    color: #111827;
                }

                .resume-contact-row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0;
                    font-size: 12.5px;
                    color: #4b5563;
                }

                .resume-contact-row a {
                    color: #2563eb;
                    text-decoration: none;
                }
                .resume-contact-row a:hover { text-decoration: underline; }

                .resume-sep {
                    margin: 0 8px;
                    color: #9ca3af;
                }

                /* === SECTIONS === */
                .resume-section {
                    margin-bottom: 16px;
                }

                .resume-section-title {
                    font-size: 13px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #111827;
                    margin: 0 0 8px;
                    padding-bottom: 4px;
                    border-bottom: 1px solid #e5e7eb;
                }

                /* === SUMMARY === */
                .resume-summary-text {
                    font-size: 13px;
                    line-height: 1.6;
                    color: #374151;
                    margin: 0;
                }

                /* === SKILLS === */
                .resume-skills-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .resume-skill-row {
                    font-size: 13px;
                    line-height: 1.5;
                }

                .resume-skill-category {
                    font-weight: 700;
                    color: #111827;
                }

                .resume-skill-items {
                    color: #374151;
                }

                /* === ENTRIES (Projects, Experience, Education) === */
                .resume-entries {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .resume-entry {
                    page-break-inside: avoid;
                }

                .resume-entry-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    margin-bottom: 2px;
                }

                .resume-entry-title {
                    font-size: 14px;
                    font-weight: 700;
                    margin: 0;
                    color: #111827;
                }

                .resume-entry-subtitle {
                    font-size: 12.5px;
                    color: #6b7280;
                    font-weight: 500;
                }

                .resume-entry-date {
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .resume-entry-list {
                    margin: 4px 0 0;
                    padding-left: 18px;
                    list-style-type: disc;
                }

                .resume-entry-list li {
                    font-size: 12.5px;
                    line-height: 1.55;
                    color: #374151;
                    margin-bottom: 1px;
                }

                .resume-entry-list li::marker {
                    color: #9ca3af;
                }

                .resume-entry-tech {
                    font-size: 11.5px;
                    color: #6b7280;
                    margin-top: 4px;
                    font-style: italic;
                }

                /* === FOOTER ROW === */
                .resume-footer-row {
                    margin-top: auto;
                    padding-top: 12px;
                    border-top: 1px solid #e5e7eb;
                    display: flex;
                    gap: 2rem;
                    font-size: 12.5px;
                    color: #374151;
                }

                /* === RESPONSIVE === */
                @media (max-width: 850px) {
                    .resume-a4 {
                        width: 100%;
                        min-height: auto;
                        padding: 24px;
                        box-shadow: none;
                    }
                    .resume-entry-header {
                        flex-direction: column;
                    }
                }

                /* === PRINT STYLES === */
                @media print {
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        background: #fff !important;
                    }

                    .print-hide {
                        display: none !important;
                    }

                    .resume-page-wrapper {
                        padding: 0 !important;
                        background: #fff !important;
                        min-height: auto !important;
                    }

                    .resume-a4 {
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 40px 48px !important;
                        box-shadow: none !important;
                        min-height: auto !important;
                    }

                    .resume-section { margin-bottom: 14px !important; }
                    .resume-entries { gap: 10px !important; }
                    .resume-entry { page-break-inside: avoid; }

                    @page {
                        size: A4;
                        margin: 0;
                    }
                }
            `}</style>
        </div>
    );
}
