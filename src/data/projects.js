
export const projects = [
  {
    id: 'symbioflows',
    title: 'SymbioFlows',
    subtitle: 'Founder & Lead Developer',
    url: 'https://symbioflows.com',
    description: 'An AI-powered industrial symbiosis marketplace that connects waste producers with recyclers through intelligent matching.',
    color: '#10b981',
    tech: ['Python', 'Node.js', 'PostgreSQL', 'Supabase', 'DeepSeek R1', 'FastAPI'],
    isFlagship: true,
    details: {
      problem: "Industrial waste data is fragmented and unstructured, making it difficult to find sustainable recycling opportunities.",
      solution: "An AI-driven matching platform that aggregates company profiles and predicts matches to facilitate safer and faster waste valorization.",
      features: [
        {
          title: "Intelligent Match Engine",
          desc: "Integrated DeepSeek R1 for predicting waste streams with guardrails to validate data output."
        },
        {
          title: "Ledger Pipeline",
          desc: "Developed a computation layer for generating financial metrics for potential material matches."
        },
        {
          title: "Service Management",
          desc: "Handles concurrent users and file processing safely via clean architecture design."
        },
        {
          title: "Legal Automation",
          desc: "Dynamic generation of LOIs to streamline pilot project negotiation."
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
    subtitle: 'Personal Project',
    url: 'https://github.com/ibraheemmryyian/jarvis',
    component: 'JarvisSimulator',
    description: 'An AI command center orchestrating multiple specialized agents for daily task automation, featuring self-healing error loops.',
    color: '#3b82f6',
    tech: ['Python', 'Node.js', 'FastAPI', 'Multi-Agent Frameworks'],
    isFlagship: true,
    details: {
      problem: "Modern AI solutions often require manual supervision. Autonomous workflows need robust error-handling to proceed on failure.",
      solution: "A multi-agent environment featuring self-healing mechanism logic for autonomous correction flow.",
      features: [
        { title: 'Self-Healing Loops', desc: 'On failure, the system captures trace, orchestrates an analysis, generates a diagnosis, and auto-resumes.' },
        { title: 'Code Navigation', desc: 'Allows agents to traverse project dependencies safely using tree-based analysis.' }
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
    title: 'Email Telemetry Engine',
    subtitle: 'Personal Project',
    url: 'https://github.com/ibraheemmryyian/nexus-telemetry',
    description: 'An email engagement tracking system that recovers user data behind privacy proxies (Apple Mail, Gmail).',
    color: '#ef4444',
    tech: ['Python', 'Node.js', 'PostgreSQL', 'Browser Internals'],
    isFlagship: true,
    details: {
      problem: "Privacy proxies break standard tracking methods for email analytics.",
      solution: "An intelligence system built to analyze engagement data safely through proxy-aware mechanisms.",
      features: [
        { title: 'Proxy Analysis', desc: 'System identifies engagement metrics safely through device paths.' },
        { title: 'Precise Exfiltration', desc: 'Heuristics verification covering proxy timing heuristics.' }
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
    subtitle: 'Personal Project',
    url: 'https://github.com/ibraheemmryyian/telegravity',
    description: 'An RMM bridge for headless IDE supervision. Built as a command-link for monitoring autonomous deployments.',
    color: '#3b82f6',
    tech: ['Node.js', 'Telegram API', 'VS Code API'],
    isFlagship: true,
    details: {
      problem: "Autonomous agents require oversight outside the desktop environment.",
      solution: "A Telegram-to-IDE bridge enabling live supervision and log streaming via mobile.",
      features: [
        { title: 'Supervisory Link', desc: 'Connects IDE state capture with simple stream logic over Telegram.' },
        { title: 'Structure Approval', desc: 'Allows approval cycles to ensure safer validation loops.' }
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
