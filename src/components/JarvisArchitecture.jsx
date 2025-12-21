import React from 'react';
import { motion } from 'framer-motion';

export default function JarvisArchitecture({ isActive }) {
    // Orbits for the satellite nodes
    const orbit1 = { duration: 20, repeat: Infinity, ease: "linear" };
    const orbit2 = { duration: 15, repeat: Infinity, ease: "linear", reverse: true };
    const orbit3 = { duration: 25, repeat: Infinity, ease: "linear" };

    return (
        <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center font-mono">

            {/* Background Grid & Particles */}
            <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Central Neural Core */}
            <div className="relative z-10">
                {/* Core Glow */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-blue-500 blur-3xl rounded-full opacity-30"
                />

                {/* Core Structure */}
                <div className="w-32 h-32 rounded-full border-2 border-blue-500/50 flex items-center justify-center bg-black/60 relative backdrop-blur-sm">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-blue-400 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border-b-2 border-cyan-400 rounded-full"
                    />
                    <div className="text-blue-100 font-bold text-center">
                        <div className="text-xs text-blue-400">CORE</div>
                        <div>ORCHESTRATOR</div>
                    </div>
                </div>

                {/* Satellite Nodes */}
                {/* Research Agent */}
                <motion.div
                    className="absolute w-full h-full top-0 left-0"
                    animate={{ rotate: 360 }}
                    transition={orbit1}
                >
                    <motion.div
                        className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        animate={{ rotate: -360 }} // Counter-rotate to keep text upright
                        transition={orbit1}
                    >
                        <div className="w-12 h-12 rounded-lg border border-purple-500/50 bg-black/80 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                            <span className="text-purple-400 text-xs font-bold">RSRCH</span>
                        </div>
                        {isActive && <div className="text-[10px] text-purple-300 bg-purple-900/30 px-2 py-0.5 rounded">Context: 12GB</div>}
                    </motion.div>
                </motion.div>

                {/* Coding Agent */}
                <motion.div
                    className="absolute w-full h-full top-0 left-0"
                    animate={{ rotate: -360 }}
                    transition={orbit2}
                >
                    <motion.div
                        className="absolute top-1/2 -right-32 -translate-y-1/2 flex flex-col items-center gap-2"
                        animate={{ rotate: 360 }}
                        transition={orbit2}
                    >
                        <div className="w-14 h-14 rounded-lg border border-green-500/50 bg-black/80 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                            <span className="text-green-400 text-xs font-bold">DEV_01</span>
                        </div>
                        {isActive && <div className="text-[10px] text-green-300 bg-green-900/30 px-2 py-0.5 rounded">Active</div>}
                    </motion.div>
                </motion.div>

                {/* Business Agent */}
                <motion.div
                    className="absolute w-full h-full top-0 left-0"
                    animate={{ rotate: 360 }}
                    transition={orbit3}
                >
                    <motion.div
                        className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        animate={{ rotate: -360 }}
                        transition={orbit3}
                    >
                        <div className="w-12 h-12 rounded-lg border border-amber-500/50 bg-black/80 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                            <span className="text-amber-400 text-xs font-bold">BUS</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Connecting Lines (SVG Overlay) */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-40">
                    <motion.circle
                        cx="200" cy="200" r="100"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                        cx="200" cy="200" r="140"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="0.5"
                        opacity="0.5"
                    />
                </svg>

            </div>

            {/* Terminal Output / System Status */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-white/10 rounded p-2 text-[10px] text-gray-400 font-mono">
                <div className="flex justify-between border-b border-white/10 pb-1 mb-1">
                    <span className="text-blue-400">SYSTEM_STATUS</span>
                    <span className="text-green-400">OPTIMAL</span>
                </div>
                <div className="space-y-1">
                    <div className="flex gap-2">
                        <span className="text-gray-600">AUTH:</span>
                        <span>[LOCAL_MACHINE]</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-gray-600">AGENTS:</span>
                        <span>57 ACTIVE_NODES</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-gray-600">SEC:</span>
                        <span className="text-red-400">SANDBOX_L4 [ENFORCED]</span>
                    </div>
                </div>
            </div>

            {/* Floating Data Particles */}
            {isActive && [...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: (Math.random() - 0.5) * 300,
                        y: (Math.random() - 0.5) * 300,
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    style={{ left: '50%', top: '50%' }}
                />
            ))}

        </div>
    );
}
