
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Coffee } from 'lucide-react';

export default function Mission() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase">
                            The Narrative
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                            Built Through <span className="text-reveal">Thick and Thin.</span>
                        </h3>
                    </div>

                    <div className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-4 bg-accent/5 rounded-r-xl">
                        "For over 5 months, we've operated in the trenches of high-stakes engineering. From 9 AM to 5 AM sprints, navigating the pressures of investor scrutiny and the relentless demand for innovation, this journey has been defined by grit, no sleep, and the unwavering pursuit of excellence."
                    </div>

                    <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                        I don't just build software; I architect <strong>resilience</strong>. My experience spans the spectrum of survival—from early-stage conceptualization to the stress-testing of production environments. I specialize in autonomous systems that don't just function, but thrive under pressure.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 pt-8">
                        <MissionCard
                            icon={Shield}
                            title="High-Integrity Systems"
                            desc="Engineering self-healing architectures and secure microservices prepared for enterprise adoption."
                        />
                        <MissionCard
                            icon={Zap}
                            title="Agentic Autonomy"
                            desc="Developing autonomous agent frameworks that bridge the gap between AI research and real-world utility."
                        />
                        <MissionCard
                            icon={Target}
                            title="Investor-Ready Scale"
                            desc="Building with the foresight of rapid scaling, technical debt management, and sustainable growth."
                        />
                        <MissionCard
                            icon={Coffee}
                            title="Relentless Execution"
                            desc="Honed through months of high-intensity delivery where failure was never an option."
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}

function MissionCard({ icon: Icon, title, desc }) {
    return (
        <div className="p-6 glass-card rounded-2xl group hover:border-accent/50 transition-all duration-500">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
