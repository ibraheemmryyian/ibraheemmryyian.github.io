import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, ShieldAlert, Cpu, Activity, Lock, Mic } from 'lucide-react';

export default function JarvisSimulator({ isActive }) {
    const [history, setHistory] = useState([
        { role: 'system', content: 'INITIALIZING SENTIENT SUITE...' },
        { role: 'system', content: 'LOADING MEMORY_CORE: 64TB [OK]' },
        { role: 'system', content: 'CONNECTING TO VOSKSPEECH... [OK]' },
        { role: 'jarvis', content: 'Systems Online. I am ready.' }
    ]);
    const [input, setInput] = useState('');
    const [isBusy, setIsBusy] = useState(false);
    const [voiceActive, setVoiceActive] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const simulateProcessing = (cmd) => {
        setIsBusy(true);
        const lowerCmd = cmd.toLowerCase();

        // 1. ENGINEER LOGIC (The Tool User)
        setTimeout(() => {
            let toolLog = null;
            if (lowerCmd.includes('research') || lowerCmd.includes('search')) {
                toolLog = `TOOL EXECUTION: deep_research("${cmd}")\nSTATUS: Scanning Arxiv... [FOUND 12 PAPERS]`;
            } else if (lowerCmd.includes('make') || lowerCmd.includes('create')) {
                toolLog = `TOOL EXECUTION: scaffold_project("new_app", "react")\nSTATUS: Writing file structure to workspace...`;
            } else if (lowerCmd.includes('scan') || lowerCmd.includes('vision')) {
                toolLog = `TOOL EXECUTION: take_screenshot()\nSTATUS: Image captured. Analyzing pixels...`;
            }

            if (toolLog) {
                setHistory(prev => [...prev, { role: 'tool', content: toolLog }]);
            }

            // 2. SOUL LOGIC (The Assistant)
            setTimeout(() => {
                let response = "Request processing. Task added to queue.";
                if (lowerCmd.includes('hello') || lowerCmd.includes('hi')) {
                    response = "Greetings, Sir. The terminal link is stable.";
                } else if (lowerCmd.includes('research')) {
                    response = "I've compiled the academic sources. The consensus suggests a 40% efficiency increase.";
                } else if (lowerCmd.includes('symbio')) {
                    response = "Pulling SymbioFlows data. The 'Analyst' engine reports zero logic errors in the last 24 hours.";
                } else if (lowerCmd.includes('kill') || lowerCmd.includes('stop')) {
                    response = "I cannot comply with self-termination protocols via this web-link.";
                }

                setHistory(prev => [...prev, { role: 'jarvis', content: response }]);
                setIsBusy(false);
            }, 1000); // Soul delay
        }, 800); // Engineer delay
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || isBusy) return;

        const userCmd = input;
        setHistory(prev => [...prev, { role: 'user', content: userCmd }]);
        setInput('');
        simulateProcessing(userCmd);
    };

    return (
        <div className="jarvis-terminal w-full h-full flex bg-black font-mono text-sm overflow-hidden border border-[#333] rounded-lg shadow-2xl">
            {/* SIDEBAR */}
            <div className="w-16 md:w-48 bg-[#0a0a0a] border-r border-[#222] flex flex-col p-2 md:p-4 gap-4 hidden md:flex">
                <div className="text-[#0f0] font-bold text-xs tracking-widest mb-4"> // SESSIONS</div>
                {['Session_Active', 'Project_Alpha', 'Research_Log'].map(item => (
                    <div key={item} className={`p-2 text-xs cursor-pointer hover:bg-[#111] ${item === 'Session_Active' ? 'text-[#0f0] bg-[#111]' : 'text-gray-600'}`}>
                        {item}
                    </div>
                ))}
                <div className="mt-auto">
                    <div className="flex items-center gap-2 text-[#ff0000] text-xs p-2 border border-[#300] bg-[#100]">
                        <ShieldAlert size={12} />
                        <span>SECURE</span>
                    </div>
                </div>
            </div>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col bg-black relative">
                {/* STATUS HEADER */}
                <div className="h-10 border-b border-[#222] flex items-center justify-between px-4 bg-[#050505]">
                    <div className="flex items-center gap-3">
                        <Terminal size={14} className="text-[#0f0]" />
                        <span className="text-[#0f0] font-bold tracking-wider">J.A.R.V.I.S // TERMINAL_LINK_V2</span>
                    </div>
                    <div className="flex gap-4 text-[10px] text-gray-500 font-mono">
                        <span className="flex items-center gap-1"><Cpu size={10} /> MEM: 64TB</span>
                        <span className="flex items-center gap-1"><Activity size={10} /> LATENCY: 12ms</span>
                    </div>
                </div>

                {/* CHAT LOG */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-4 space-y-3 font-mono"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {history.map((msg, idx) => (
                        <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                            <span className={`px-2 text-[10px] mb-1 ${msg.role === 'user' ? 'text-cyan-600' :
                                    msg.role === 'tool' ? 'text-amber-600' :
                                        msg.role === 'system' ? 'text-gray-700' : 'text-[#0f0]'
                                }`}>
                                {msg.role.toUpperCase()}
                            </span>
                            <div className={`max-w-[90%] px-3 py-1 ${msg.role === 'user' ? 'text-cyan-400 border-r-2 border-cyan-800' :
                                    msg.role === 'tool' ? 'text-amber-500 font-normal italic' :
                                        msg.role === 'system' ? 'text-gray-600 text-xs' :
                                            'text-[#0f0] border-l-2 border-[#0f0] bg-[#001100]'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isBusy && <div className="text-[#0f0] animate-pulse">_ processing...</div>}
                </div>

                {/* CONTROLS */}
                <form onSubmit={handleSend} className="h-14 border-t border-[#222] bg-[#050505] flex items-center px-4 gap-2">
                    <span className="text-[#0f0] font-bold">{'>'}</span>
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        disabled={isBusy}
                        className="flex-1 bg-transparent border-none outline-none text-[#0f0] font-mono placeholder-gray-800"
                        placeholder={isBusy ? "BUSY..." : "ENTER COMMAND..."}
                        autoFocus
                    />
                    <button type="button" onClick={() => setVoiceActive(!voiceActive)} className={`p-2 rounded ${voiceActive ? 'text-red-500 bg-[#200]' : 'text-gray-600 hover:text-[#0f0]'}`}>
                        <Mic size={16} />
                    </button>
                    {isBusy && (
                        <button type="button" className="px-3 py-1 text-[10px] bg-[#300] text-red-500 border border-red-900 font-bold hover:bg-red-900 hover:text-white transition-colors">
                            ABORT
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
