
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto bg-gradient-to-b from-card to-background p-10 rounded-2xl border border-border"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Read to build something exceptional?</h2>
                <p className="text-xl text-text-secondary mb-8">
                    I'm currently available for freelance projects and open to discussing full-time engineering roles.
                </p>
                <a
                    href="mailto:imrryyian@gmail.com"
                    className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-hover transition-all transform hover:scale-105 shadow-xl shadow-accent/20"
                >
                    <Mail className="mr-3" />
                    Get in Touch
                    <ArrowRight className="ml-2" />
                </a>
            </motion.div>
        </section>
    );
}
