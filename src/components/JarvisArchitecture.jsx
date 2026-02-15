
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Share2, Shield, Activity, GitBranch, MessageSquare } from 'lucide-react';

export default function JarvisArchitecture({ isActive }) {
    const [activeTab, setActiveTab] = useState('TERMINAL');
    const [logs, setLogs] = useState([]);

    // Simulation Data
    const features = {
        'CNS': { color: '#8b5cf6', icon: <GitBranch size={14} />, label: 'Neural Graph' },
        'TELEGRAM': { color: '#0ea5e9', icon: <MessageSquare size={14} />, label: 'Comms Uplink' },
        'SECURITY': { color: '#ef4444', icon: <Shield size={14} />, label: 'Sandbox L4' },
    };

    const bootSequence = [
        { type: 'sys', msg: 'J.A.R.V.I.S kernel_v2.4.0 active' },
        { type: 'sys', msg: 'Loading neural interface...' },
        { type: 'info', msg: 'Connecting to local LLM (DeepSeek-R1-Distill)... OK' },
        { type: 'cns', msg: 'CNS: Indexing repository... 1,024 nodes found.' },
        { type: 'cns', msg: 'CNS: Dependency graph built (0.4s).' },
        { type: 'tel', msg: 'TELEGRAM: User authorized (ID: 99281).' },
        { type: 'tel', msg: 'TELEGRAM: Incoming command: "/deploy --prod"' },
        { type: 'agent', msg: 'AGENT[Dev_01]: Analyzing deployment constraints...' },
        { type: 'sec', msg: 'SANDBOX: Blocked unauthorized network call (port 8080).' },
        { type: 'agent', msg: 'AGENT[Dev_01]: Patching configuration...' },
        { type: 'success', msg: 'Deployment sequence initiated.' },
    ];

    // Log rotation effect
    useEffect(() => {
        if (!isActive) return;
        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLogs = [...prev, bootSequence[index % bootSequence.length]];
                if (newLogs.length > 8) newLogs.shift();
                return newLogs;
            });
            index++;
        }, 1500);
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="w-full h-full bg-[#0a0a0a] font-mono text-xs overflow-hidden flex flex-col border-t border-white/5">
            {/* Top Bar */}
            <div className="h-8 bg-black/50 border-b border-white/5 flex items-center px-4 justify-between backdrop-blur-sm">
                <div className="flex gap-4">
                    {Object.entries(features).map(([key, data]) => (
                        <div key={key} className="flex items-center gap-2 opacity-70">
                            <span style={{ color: data.color }}>{data.icon}</span>
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">{key}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-green-500/80">
                    <Activity size={12} className="animate-pulse" />
                    <span className="text-[10px] font-bold">ONLINE</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0a0a0a]" />

                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                {/* Content Container */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 h-full">

                    {/* Left: System Stats */}
                    <div className="hidden md:flex flex-col gap-4">
                        <div className="p-3 border border-white/10 rounded-lg bg-white/5">
                            <div className="text-[10px] text-gray-500 mb-2">CPU LOAD (AGENTS)</div>
                            <div className="h-16 flex items-end gap-1">
                                {[40, 65, 30, 80, 50, 90, 45].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: `${h + Math.random() * 20}%` }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className="flex-1 bg-blue-500/50 rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-3 border border-white/10 rounded-lg bg-white/5">
                            <div className="text-[10px] text-gray-500 mb-2">MEMORY (VECTOR DB)</div>
                            <div className="text-xl font-bold text-purple-400">8.2 GB</div>
                            <div className="text-[10px] text-gray-600">Context Window: 128k</div>
                        </div>
                    </div>

                    {/* Middle: Terminal Logs */}
                    <div className="col-span-2 md:col-span-2 border border-white/10 rounded-lg bg-black/80 p-3 font-mono text-xs md:text-sm shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
                        <div className="flex flex-col gap-2 h-full justify-end">
                            <AnimatePresence>
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex gap-3"
                                    >
                                        <span className="text-gray-600">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                                        <span className={`
                                            ${log.type === 'cns' ? 'text-purple-400' : ''}
                                            ${log.type === 'tel' ? 'text-blue-400' : ''}
                                            ${log.type === 'sec' ? 'text-red-400' : ''}
                                            ${log.type === 'info' ? 'text-gray-300' : ''}
                                            ${log.type === 'agent' ? 'text-green-400' : ''}
                                        `}>
                                            {log.type === 'sys' ? <span className="text-yellow-500/80">root@jarvis:~# {log.msg}</span> : log.msg}
                                        </span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>

            {/* Overlay for non-active state */}
            {!isActive && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="px-4 py-2 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 text-xs font-bold tracking-widest animate-pulse">
                        SYSTEM STANDBY
                    </div>
                </div>
            )}
        </div>
    );
}
