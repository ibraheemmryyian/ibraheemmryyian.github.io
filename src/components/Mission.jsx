
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
                        <h3 className="text-4xl md:text-5xl font-medium tracking-tight">
                            What I focus on
                        </h3>
                    </div>

                    <div className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light border-l border-accent/20 pl-8 py-2">
                        "I write software that does a specific thing reliably. If it breaks, I want to know exactly why and exactly how to fix it."
                    </div>

                    <p className="text-lg text-text-secondary/80 leading-relaxed max-w-3xl">
                        I'm a 19-year-old Computer Engineering student who builds AI-driven products in my own time. Currently working on <strong className="text-text-primary">SymbioFlows</strong> — an industrial waste marketplace — and <strong className="text-text-primary">Veiktuor</strong>, a personal automation assistant.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <MissionCard
                            icon={Shield}
                            title="Reliability"
                            desc="Making sure things actually work before launch — not after."
                        />
                        <MissionCard
                            icon={Zap}
                            title="Automation first"
                            desc="If I'm doing something more than twice, I write a script."
                        />
                        <MissionCard
                            icon={Target}
                            title="Clean backends"
                            desc="Simple structure that doesn't collapse under load."
                        />
                        <MissionCard
                            icon={Coffee}
                            title="Shipping"
                            desc="I finish what I start."
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
