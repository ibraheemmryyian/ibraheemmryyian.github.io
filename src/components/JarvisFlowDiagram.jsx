import React from 'react';
import { motion } from 'framer-motion';

export default function JarvisFlowDiagram() {
    return (
        <div className="w-full h-[400px] bg-[#0f172a] rounded-lg border border-slate-700/50 p-4 relative overflow-hidden flex items-center justify-center font-mono">

            {/* Connecting Lines (Absolute for easier positioning) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                    </marker>
                </defs>
                {/* Router -> Orchestrator */}
                <motion.path
                    d="M 150 200 L 300 200"
                    stroke="#64748b" strokeWidth="2" strokeDasharray="5,5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }}
                />
                {/* Orchestrator -> Agents */}
                <motion.path d="M 450 200 L 550 100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
                <motion.path d="M 450 200 L 550 200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
                <motion.path d="M 450 200 L 550 300" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Orchestrator -> Recycler */}
                <motion.path d="M 375 250 L 375 320" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* LLM Feedback Loop */}
                <motion.path d="M 375 150 L 375 80" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
            </svg>

            <div className="relative z-10 flex gap-12 items-center">

                {/* Router */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-20 bg-slate-800 border-2 border-slate-600 rounded-xl flex flex-col items-center justify-center relative shadow-lg"
                >
                    <span className="text-white font-bold">ROUTER</span>
                    <span className="text-[10px] text-slate-400">Intention Parsing</span>
                    <div className="absolute -left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </motion.div>

                {/* Orchestrator */}
                <motion.div
                    animate={{ boxShadow: ["0 0 0px #3b82f6", "0 0 20px #3b82f6", "0 0 0px #3b82f6"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-40 h-24 bg-blue-900/40 border-2 border-blue-500 rounded-xl flex flex-col items-center justify-center relative backdrop-blur-md"
                >
                    <span className="text-blue-200 font-bold">ORCHESTRATOR</span>
                    <span className="text-[10px] text-blue-400">Task Dispatch &</span>
                    <span className="text-[10px] text-blue-400">State Mgmt</span>
                </motion.div>

                {/* Agents Cluster */}
                <div className="flex flex-col gap-4">
                    <motion.div className="w-32 h-12 bg-purple-900/30 border border-purple-500/50 rounded-lg flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-purple-200 text-sm">Research</span>
                    </motion.div>
                    <motion.div className="w-32 h-12 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-green-200 text-sm">Coding</span>
                    </motion.div>
                    <motion.div className="w-32 h-12 bg-amber-900/30 border border-amber-500/50 rounded-lg flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        <span className="text-amber-200 text-sm">Business</span>
                    </motion.div>
                </div>
            </div>

            {/* Recycler Node */}
            <motion.div className="absolute bottom-4 left-1/3 w-32 h-12 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center gap-2">
                <span className="text-slate-300 text-xs">Recycler (Context)</span>
            </motion.div>

            {/* LLM Node */}
            <motion.div className="absolute top-4 left-1/3 w-40 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_#3b82f6]">
                <span className="text-white font-bold text-xs">LM STUDIO (LOCAL)</span>
            </motion.div>

        </div>
    );
}
