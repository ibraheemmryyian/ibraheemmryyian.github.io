
export const projects = [
  {
    id: 'symbioflows',
    title: 'SymbioFlows',
    subtitle: 'Architectural Orchestrator & Founder',
    url: 'https://symbioflows.com',
    description: 'High-integrity AI architecture for industrial symbiosis. Orchestrates a proprietary data moat of 3M+ material listings, predicting waste streams with 100% financial audit accuracy for $1.5M+ in projected revenue.',
    color: '#10b981',
    tech: ['Distributed Systems', 'Orchestration', 'DeepSeek R1', 'High-Integrity Data', 'PostgreSQL'],
    isFlagship: true,
    details: {
      problem: "Industrial waste data is fragmented and unstructured. The challenge isn't just coding; it's architecting a system that can trust its own conclusions.",
      solution: "A production-grade distributed architecture that ingests company profiles and predicts waste streams through a context-aware AI orchestration layer, verified by a deterministic projection engine.",
      features: [
        {
          title: "Deterministic Financial Ledger",
          desc: "Architected a computation layer that models $1.5M+ in revenue creation with 100% accuracy. The logic flow is designed to be mathematically improbable to fail."
        },
        {
          title: "Generative Logic Pipeline",
          desc: "Multi-stage orchestration where DeepSeek R1 infers data, governed by modular heuristic guardrails (AST-based) that eliminate hallucinations."
        },
        {
          title: "Decoupled Micro-Services",
          desc: "Designed a high-concurrency system where specialized workers handle PDF generation and heavy compute (Python/NumPy) via clean message queues."
        },
        {
          title: "Programmatic LOI Generation",
          desc: "Scaling legal intent through automation. Orchestrated the dynamic population of terms and projections for 500+ concurrent negotiated agreements."
        }
      ]
    },
    gitStory: [
      { date: '2024-08-15', message: 'arch: Core microservices structure finalized' },
      { date: '2024-10-20', message: 'feat: Orchestrated Financial Projection Engine with verified market data' },
      { date: '2024-11-10', message: 'perf: Refined heuristic validation logic (latency < 100ms)' },
      { date: '2024-12-05', message: 'audit: Production Readiness Audit - Passed 100% System Integrity' }
    ],
    documentation: [
      {
        title: "Architecture: The Symbio Orchestrator",
        content: "A master-planned distributed system. Every state transition is architected to ensure data integrity.\n\n1. Normalization: Raw data ingestion.\n2. AI Inference: Orchestrated prediction of waste streams.\n3. Logic Guardrails: Heuristic verification layer.\n4. Financial Projection: Deterministic NPV and IRR computation."
      }
    ]
  },

  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S',
    subtitle: 'Chief Intelligence Architect',
    url: 'https://github.com/ibraheemmryyian/jarvis',
    component: 'JarvisSimulator',
    description: 'A local AI command center orchestrating 89 specialized agents across 500+ daily task cycles. Built with a biological-inspired self-healing runtime and a 4-layer kernel-level security sandbox.',
    color: '#3b82f6',
    tech: ['Autonomous Orchestration', 'Self-Healing Loops', 'Security Architecture', 'Local LLMs', 'CNS'],
    isFlagship: true,
    details: {
      problem: "Modern AI agents are brittle and lack supervision. An elite system requires a robust architecture to handle multi-step autonomous failures.",
      solution: "A context-aware orchestration platform with a recursive 'immune system' for error correction and a kernel-resident sandbox for safe agent execution.",
      features: [
        { title: 'Universal CNS', desc: 'Codebase Navigation System: A semantic map architected to allow agents to traverse complex dependencies (AST-based) without manual guidance.' },
        { title: 'Self-Healing Loops', desc: 'Designed a recursive runtime: On failure, the system captures trace, orchestrates an analysis, generates a patch, and auto-resumes.' },
        { title: '4-Layer Security Sandbox', desc: 'Architected kernel-level interception of syscalls. Blocks dangerous operations at the process level before they can execute.' },
        { title: 'Agent Swarm Protocol', desc: 'Dynamic orchestration of 89+ specialized agent units based on real-time task complexity analysis.' }
      ]
    },
    documentation: [
      {
        title: "The CNS Architecture",
        content: "CNS is the architectural foundation. It's a semantic graph that eliminates the need for manual context injection using tree-sitter based indexing."
      }
    ]
  },

  {
    id: 'email-telemetry',
    title: 'Nexus Analytics',
    subtitle: 'Forensic Logic Architect',
    url: 'https://github.com/ibraheemmryyian/nexus-telemetry',
    description: 'Advanced engagement intelligence system. Architected timing-attack logic and CSS fingerprinting to recover user behavioral data behind privacy proxies.',
    color: '#ef4444',
    tech: ['Forensic Analysis', 'Logic Engineering', 'Timing Attacks', 'Browser Internals'],
    isFlagship: true,
    details: {
      problem: "Privacy proxies (Apple Mail, Gmail) break standard tracking. Resolving this requires architectural ingenuity over simple coding.",
      solution: "A forensic-grade engine architected using CSS media query leaks and timing heuristics to pierce proxies and recover granular environment data.",
      features: [
        { title: 'Fingerprint Recovery', desc: 'Architected logic to identify true devices behind Apple\'s Privacy Proxy using CSS render-path exfiltration and browser engine quirks.' },
        { title: 'Temporal Heuristics', desc: 'Engineered high-precision dwell time measurement using keep-alive beacons and temporal analysis of network requests.' },
        { title: 'Reputation Analysis', desc: 'Designed an orchestration layer to filter security scanners and bots based on behavioral reputation and IP history.' }
      ]
    },
    gitStory: [
      { date: '2024-01-10', message: 'arch: Forensic beacon infrastructure setup' },
      { date: '2024-01-15', message: 'feat: Orchestrated CSS exfiltration for device recovery' },
      { date: '2024-01-22', message: 'algo: Designed timing-attack logic for proxy penetration' },
      { date: '2024-01-28', message: 'ui: Real-time telemetry orchestration dashboard' }
    ]
  },

  {
    id: 'gnn',
    title: 'GNN Visualizer',
    subtitle: 'High-Performance UI Architect',
    url: 'https://gnn.vercel.app/demo',
    description: 'Physics-based visualization architecture for Message Passing in Graph Neural Networks. Engineered for real-time pedagogical clarity.',
    color: '#8b5cf6',
    tech: ['UI Architecture', 'Physics Engines', 'WebGL Integration', 'D3.js'],
    details: {
      problem: "Aggregation and message passing are abstract concepts. Understanding them requires a visual architecture that mirrors the underlying math.",
      solution: "A hybrid rendering system architected to switch between SVG and WebGL depending on graph complexity and user interaction.",
      features: [
        { title: 'Hybrid Render Design', desc: 'Engineered seamless context switching between high-interaction SVG and high-performance WebGL.' },
        { title: 'Spatial Optimization', desc: 'Architected real-time force-directed layouts using Barnes-Hut approximations for efficient spatial partitioning.' },
        { title: 'Logic Playground', desc: 'Designed an interactive environment for live execution of Dijkstra and Louvain algorithms.' }
      ]
    }
  },
  {
    id: 'telegravity',
    title: 'TeleGravity',
    subtitle: 'Infrastructure Architect & Founder',
    url: 'https://github.com/ibraheemmryyian/telegravity',
    description: 'High-performance RMM bridge for headless IDE supervision. Architected as the command-link for high-stakes decision pipelines in autonomous deployments.',
    color: '#3b82f6',
    tech: ['RMM Architecture', 'Logic Supervision', 'VS Code API', 'Security Gates'],
    isFlagship: true,
    details: {
      problem: "Autonomous agents require 24/7 high-integrity oversight. The challenge is architecting a secure, low-latency bridge outside the desktop environment.",
      solution: "A master-planned Telegram-to-IDE bridge enabling headless orchestration, real-time log streaming, and deterministic approval logic via mobile.",
      features: [
        { title: 'Supervisory Architecture', desc: 'Designed a full-duplex bridge for IDE state capture and terminal streaming over Telegram.' },
        { title: 'Remote Command Link', desc: 'Architected deterministic "Approve/Reject" cycles, ensuring the human-in-the-loop is never bypassed.' }
      ]
    }
  },
  {
    id: 'betterteams',
    title: 'BetterTeams',
    subtitle: 'SaaS Solutions Architect',
    url: 'https://betterteams.vercel.app/demo',
    description: 'Workforce optimization platform. Architected for streamlined team management and task distribution logic.',
    color: '#f97316',
    tech: ['Modular UI Architecture', 'System Design', 'Supabase', 'Vercel']
  }
];
