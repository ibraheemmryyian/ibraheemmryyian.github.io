
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} Ibraheem Mryyian. Built with React & Tailwind.
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/ibraheemmryyian" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    {/* <a href="#" className="text-text-secondary hover:text-white transition-colors">
            <Linkedin size={20} />
          </a> */}
                    <a href="mailto:imrryyian@gmail.com" className="text-text-secondary hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
