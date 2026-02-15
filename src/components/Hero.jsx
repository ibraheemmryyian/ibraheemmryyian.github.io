
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero({ onNavigate }) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden hero-section">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Ibraheem Mryyian
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mt-2">
                            AI Systems Engineer
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Architecting autonomous agents, scalable microservices, and high-performance digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#work"
                        className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-all transform hover:scale-105 shadow-lg shadow-accent/25 flex items-center"
                    >
                        View Work <ArrowDown className="ml-2" size={18} />
                    </a>

                    <button
                        onClick={() => onNavigate('resume')}
                        className="px-8 py-3 bg-card border border-border rounded-lg font-medium hover:bg-hover transition-all flex items-center group cursor-pointer"
                    >
                        Generate Resume <FileText className="ml-2 group-hover:text-accent transition-colors" size={18} />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-12 flex justify-center gap-6"
                >
                    <SocialLink href="https://github.com/ibraheemmryyian" icon={Github} />
                    {/* Add Linkedin if available, otherwise just Github/Email */}
                    <SocialLink href="mailto:Imrryyian@gmail.com" icon={Mail} />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-text-disabled" size={24} />
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon: Icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/50 rounded-full border border-border hover:border-accent hover:text-accent transition-all transform hover:-translate-y-1"
        >
            <Icon size={24} />
        </a>
    );
}
