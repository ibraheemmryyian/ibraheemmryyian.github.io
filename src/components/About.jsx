
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe } from 'lucide-react';

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
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Beyond the Code
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            I am an engineer obsessed with <span className="text-accent">system autonomy</span> and <span className="text-accent">scalable architecture</span>.
                            My work bridges the gap between theoretical AI research and production-grade applications.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            Currently, I'm building <strong className="text-white">SymbioFlows</strong>, an industrial waste valorization platform, and <strong className="text-white">Jarvis</strong>, a local autonomous agent ecosystem. I specialize in turning complex data problems into elegant, self-healing software solutions.
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <Stat icon={Terminal} label="Commits" value="2k+" />
                            <Stat icon={Cpu} label="Agents" value="57" />
                            <Stat icon={Globe} label="Deployments" value="100+" />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <div className="relative p-8 bg-card rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Terminal className="mr-2 text-accent" size={20} />
                                Current Focus
                            </h3>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    Agentic Workflows & Self-Healing Systems
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    High-Performance React/Node.js Architectures
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    Industrial Data Valorization & Sustainability
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent">▹</span>
                                    Privacy-first Telemetry & Analytics
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
        <div className="text-center p-4 bg-card/50 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <Icon className="mx-auto mb-2 text-accent" size={24} />
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-text-secondary uppercase tracking-wider">{label}</div>
        </div>
    );
}
