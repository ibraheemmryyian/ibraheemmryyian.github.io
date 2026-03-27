
import { motion } from 'framer-motion';
import { Terminal, Globe } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500">
                            About me
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            I mostly work at the backend and infrastructure level — databases, APIs, and the plumbing that connects them.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            Currently building <strong className="text-text-primary">SymbioFlows</strong>, an industrial waste marketplace, and <strong className="text-text-primary">Veiktuor</strong>, a local agent assistant that handles recurring automation tasks.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <Stat icon={Terminal} label="Commits" value="2k+" />
                            <Stat icon={Globe} label="Deployments" value="100+" />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                        <div className="relative p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Terminal className="mr-2 text-accent" size={20} />
                                What I'm working on
                            </h3>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    SymbioFlows — AI-assisted industrial waste marketplace
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    Veiktuor — local multi-agent automation system
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    B.Sc. Computer Engineering @ Hashemite University
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Stat({ icon: Icon, label, value }) {
    return (
        <div className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-accent/50 transition-colors shadow-sm">
            <Icon className="mx-auto mb-2 text-accent" size={24} />
            <div className="text-2xl font-bold text-slate-900">{value}</div>
            <div className="text-xs text-text-secondary uppercase tracking-wider">{label}</div>
        </div>
    );
}
