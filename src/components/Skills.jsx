
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 bg-background-alt/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Tools and technologies I use to build scalable, production-ready systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5 group"
                        >
                            <h3 className="text-lg font-bold mb-4 text-accent group-hover:text-white transition-colors">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-background rounded-md text-sm text-text-secondary border border-border/50 group-hover:border-accent/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
