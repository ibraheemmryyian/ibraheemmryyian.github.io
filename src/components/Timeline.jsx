import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineData } from '../data/timeline';

export default function Timeline() {
    const containerRef = useRef(null);

    // Calculate SVG path based on number of items
    // Assuming each section is roughly 1 viewport height
    // We want a curve that goes center -> left -> right -> left...

    // NOTE: In a real responsive scenario, we update this on resize. 
    // For now, we assume a standard curve for the "swoosh".

    return (
        <div ref={containerRef} className="timeline-container snap-scroll">

            <div className="timeline-line-container">
                <svg className="timeline-svg" preserveAspectRatio="none" viewBox="0 0 100 400">
                    {/* 
                Drawing a Bezier curve that weaves.
                Starting top center (50, 0)
                Curve to Left (node 0 is usually left or Center? Let's say we alternate).
                Actually, scroll snap centers everything, but we want the *visual* line to weave.
             */}
                    <path
                        d="M50,0 
                   C50,50 20,50 20,100
                   C20,150 80,150 80,200
                   C80,250 20,250 20,300
                   C20,350 50,350 50,400"
                        fill="none"
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        d="M50,0 
                   C50,50 20,50 20,100
                   C20,150 80,150 80,200
                   C80,250 20,250 20,300
                   C20,350 50,350 50,400"
                        fill="none"
                        stroke="var(--text-primary)"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ margin: "-10%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {timelineData.map((item, index) => (
                <TimelineNode key={index} item={item} index={index} />
            ))}
        </div>
    );
}

function TimelineNode({ item, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`timeline-section ${isEven ? 'left' : 'right'}`}>
            <motion.div
                className="timeline-node"
                initial={{ opacity: 0, x: isEven ? -50 : 50, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={`node-content-grid ${isEven ? 'normal' : 'reversed'}`}>

                    <div className="text-content">
                        <div className="year-badge">{item.year}</div>
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.description}</p>
                        <div className="tech-tags">
                            {item.tech.map(t => <span key={t}>{t}</span>)}
                        </div>
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="node-link">
                                View Project
                            </a>
                        )}
                    </div>

                    <div className="visual-content">
                        <div className="preview-box">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
