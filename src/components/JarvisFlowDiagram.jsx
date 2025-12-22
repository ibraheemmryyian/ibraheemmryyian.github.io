import React from 'react';
import { motion } from 'framer-motion';

export default function JarvisFlowDiagram() {
    const containerStyle = {
        width: '100%',
        height: '400px',
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        border: '1px solid rgba(100, 116, 139, 0.5)',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace'
    };

    const nodeBase = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        position: 'relative'
    };

    const routerStyle = {
        ...nodeBase,
        width: '128px',
        height: '80px',
        backgroundColor: '#1e293b',
        border: '2px solid #475569',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    };

    const orchestratorStyle = {
        ...nodeBase,
        width: '160px',
        height: '96px',
        backgroundColor: 'rgba(30, 58, 138, 0.4)',
        border: '2px solid #3b82f6',
        backdropFilter: 'blur(8px)'
    };

    const agentStyle = (color) => ({
        width: '128px',
        height: '48px',
        backgroundColor: `${color}1A`,
        border: `1px solid ${color}80`,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
    });

    const dotStyle = (color) => ({
        width: '8px',
        height: '8px',
        backgroundColor: color,
        borderRadius: '50%'
    });

    const recyclerStyle = {
        position: 'absolute',
        bottom: '16px',
        left: '33%',
        width: '128px',
        height: '48px',
        backgroundColor: '#1e293b',
        border: '1px solid #475569',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const llmStyle = {
        position: 'absolute',
        top: '16px',
        left: '33%',
        width: '160px',
        height: '40px',
        backgroundColor: '#2563eb',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 15px #3b82f6'
    };

    return (
        <div style={containerStyle}>
            {/* SVG Connecting Lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                    </marker>
                </defs>
                {/* Router -> Orchestrator */}
                <motion.path
                    d="M 150 200 L 300 200"
                    stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" fill="none"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }}
                />
                {/* Orchestrator -> Agents */}
                <path d="M 450 200 L 550 100" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                <path d="M 450 200 L 550 200" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                <path d="M 450 200 L 550 300" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                {/* Orchestrator -> Recycler */}
                <path d="M 375 250 L 375 320" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                {/* LLM Feedback Loop */}
                <path d="M 375 150 L 375 80" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            </svg>

            <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '48px', alignItems: 'center' }}>
                {/* Router */}
                <motion.div style={routerStyle} whileHover={{ scale: 1.05 }}>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>ROUTER</span>
                    <span style={{ fontSize: '10px', color: '#94a3b8' }}>Intention Parsing</span>
                    <div style={{ position: 'absolute', left: '-16px', width: '12px', height: '12px', backgroundColor: '#22c55e', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                </motion.div>

                {/* Orchestrator */}
                <motion.div
                    style={orchestratorStyle}
                    animate={{ boxShadow: ["0 0 0px #3b82f6", "0 0 20px #3b82f6", "0 0 0px #3b82f6"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <span style={{ color: '#bfdbfe', fontWeight: 'bold' }}>ORCHESTRATOR</span>
                    <span style={{ fontSize: '10px', color: '#60a5fa' }}>Task Dispatch &amp;</span>
                    <span style={{ fontSize: '10px', color: '#60a5fa' }}>State Mgmt</span>
                </motion.div>

                {/* Agents Cluster */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={agentStyle('#a855f7')}>
                        <span style={dotStyle('#a855f7')} />
                        <span style={{ color: '#e9d5ff', fontSize: '14px' }}>Research</span>
                    </div>
                    <div style={agentStyle('#22c55e')}>
                        <span style={dotStyle('#22c55e')} />
                        <span style={{ color: '#bbf7d0', fontSize: '14px' }}>Coding</span>
                    </div>
                    <div style={agentStyle('#f59e0b')}>
                        <span style={dotStyle('#f59e0b')} />
                        <span style={{ color: '#fef3c7', fontSize: '14px' }}>Business</span>
                    </div>
                </div>
            </div>

            {/* Recycler Node */}
            <div style={recyclerStyle}>
                <span style={{ color: '#cbd5e1', fontSize: '12px' }}>Recycler (Context)</span>
            </div>

            {/* LLM Node */}
            <div style={llmStyle}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>LM STUDIO (LOCAL)</span>
            </div>
        </div>
    );
}
