import React from 'react';
import { motion } from 'framer-motion';

export default function JarvisFlowDiagram() {
    return (
        <div style={{
            width: '100%',
            minHeight: '350px',
            backgroundColor: '#0f172a',
            borderRadius: '12px',
            border: '1px solid rgba(100, 116, 139, 0.5)',
            padding: '24px',
            boxSizing: 'border-box',
            fontFamily: 'monospace',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
        }}>
            {/* Top: LM Studio */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    backgroundColor: '#2563eb',
                    borderRadius: '20px',
                    padding: '10px 24px',
                    boxShadow: '0 0 15px #3b82f6'
                }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>LM STUDIO (LOCAL)</span>
                </div>
            </div>

            {/* Middle Row: Router -> Orchestrator -> Agents */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap'
            }}>
                {/* Router */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    style={{
                        flex: '0 0 auto',
                        width: '120px',
                        padding: '16px',
                        backgroundColor: '#1e293b',
                        border: '2px solid #475569',
                        borderRadius: '12px',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        left: '-8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#22c55e',
                        borderRadius: '50%'
                    }} />
                    <div style={{ color: 'white', fontWeight: 'bold', fontSize: '13px' }}>ROUTER</div>
                    <div style={{ color: '#94a3b8', fontSize: '10px', marginTop: '4px' }}>Intention Parsing</div>
                </motion.div>

                {/* Arrow */}
                <div style={{ color: '#64748b', fontSize: '20px' }}>→</div>

                {/* Orchestrator */}
                <motion.div
                    animate={{ boxShadow: ['0 0 0px #3b82f6', '0 0 15px #3b82f6', '0 0 0px #3b82f6'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                        flex: '0 0 auto',
                        width: '150px',
                        padding: '20px 16px',
                        backgroundColor: 'rgba(30, 58, 138, 0.4)',
                        border: '2px solid #3b82f6',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}
                >
                    <div style={{ color: '#bfdbfe', fontWeight: 'bold', fontSize: '13px' }}>ORCHESTRATOR</div>
                    <div style={{ color: '#60a5fa', fontSize: '10px', marginTop: '4px' }}>Task Dispatch</div>
                </motion.div>

                {/* Arrow */}
                <div style={{ color: '#64748b', fontSize: '20px' }}>→</div>

                {/* Agents */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                        { name: 'Research', color: '#a855f7' },
                        { name: 'Coding', color: '#22c55e' },
                        { name: 'Business', color: '#f59e0b' }
                    ].map(agent => (
                        <div key={agent.name} style={{
                            padding: '8px 16px',
                            backgroundColor: `${agent.color}1A`,
                            border: `1px solid ${agent.color}80`,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: agent.color,
                                borderRadius: '50%'
                            }} />
                            <span style={{ color: `${agent.color}CC`, fontSize: '12px' }}>{agent.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom: Recycler */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    padding: '10px 20px',
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px'
                }}>
                    <span style={{ color: '#cbd5e1', fontSize: '11px' }}>Recycler (Context Window Mgmt)</span>
                </div>
            </div>
        </div>
    );
}
