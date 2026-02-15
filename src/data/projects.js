
export const projects = [
  {
    id: 'symbioflows',
    title: 'SymbioFlows',
    subtitle: 'Founder & Lead Engineer',
    url: 'https://symbioflows.com',
    description: 'Enterprise-grade AI platform for industrial symbiosis. Orchestrates a microservices architecture to quantify waste-to-revenue potential with 100% financial audit accuracy.',
    color: '#10b981',
    tech: ['Node.js', 'AWS Lambda', 'Python', 'DeepSeek R1', 'PostgreSQL'],
    isFlagship: true,
    details: {
      problem: "Industrial waste data is fragmented and unstructured, making it impossible to identify high-value circular economy opportunities at scale.",
      solution: "A production-grade distributed system that ingests company profiles, predicts waste streams using context-aware AI, and rigorously verifies financial viability through a deterministic projection engine.",
      features: [
        {
          title: "Financial Projection Engine",
          desc: "Deterministic computation layer that models revenue creation, CO2 offsets, and ROI. Validated against real-world market rates with 100% accuracy in production audits."
        },
        {
          title: "Generative Data Pipeline",
          desc: "Multi-stage AI pipeline where DeepSeek R1 infers waste streams, followed by a heuristic validation layer that eliminates hallucinations before data enters the ledger."
        },
        {
          title: "Microservices Architecture",
          desc: "Decoupled system with specific workers for PDF generation, email dispatch (SES), and heavy computational tasks (Python/NumPy), communicating via message queues."
        },
        {
          title: "Automated LOI Service",
          desc: "Programmatic generation of legal Letters of Intent, dynamically populated with negotiated terms and financial projections, capable of handling 500+ concurrent requests."
        },
        {
          title: "Universal CNS Integration",
          desc: "Codebase is indexed for autonomous navigation, allowing AI agents to understand and refactor the system without human guidance."
        }
      ]
    },
    gitStory: [
      { date: '2022-01-15', message: 'init: Core microservices architecture setup' },
      { date: '2023-06-20', message: 'feat: Implement Financial Projection Engine with verified market data' },
      { date: '2023-08-10', message: 'perf: Optimize heuristic validation layer (latency < 100ms)' },
      { date: '2024-11-05', message: 'audit: Production Readiness Audit - Passed 100% Stability Checks' },
      { date: '2024-12-12', message: 'feat: Deploy Universal CNS indexing for autonomous maintenance' },
      { date: '2025-01-20', message: 'scale: Horizontal scaling of LOI generation service on AWS Lambda' }
    ],
    documentation: [
      {
        title: "Architecture: The Symbio Engine",
        content: "A distributed system built for high-integrity data processing. Unlike standard CRUD apps, SymbioFlows enforces strict state transitions for every data point.\n\n1. Ingestion: Raw company data is normalized.\n2. Inference: AI models predict probable waste streams.\n3. Validation: Heuristic guardrails reject physically impossible scenarios.\n4. Projection: Financial engine calculates net present value (NPV) and IRR for potential deals."
      },
      {
        title: "The 'Golden Standard' Audit",
        content: "The system recently underwent a comprehensive Production Readiness Audit, achieving a 100% success rate across user safety, financial accuracy, and system stability metrics. This validated the 'Zero-Hallucination' architecture."
      }
    ]
  },

  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S',
    subtitle: 'Autonomous AI Workforce Platform',
    url: 'https://github.com/ibraheemmryyian/jarvis',
    component: 'JarvisSimulator',
    description: 'A comprehensive local AI operating system managing 57 specialized agents. Features self-healing execution loops and a 4-layer security sandbox.',
    color: '#3b82f6',
    tech: ['Python', 'FastAPI', 'Local LLMs', 'PyQt6', 'SQLite'],
    isFlagship: true,
    details: {
      problem: "Current AI agents are brittle, insecure, and lack deep context. They fail at multi-step autonomous tasks and cannot be trusted with system access.",
      solution: "A local-first autonomous platform with a biological-inspired 'immune system' for error correction and a kernel-level security sandbox for safe execution.",
      features: [
        { title: 'Universal CNS', desc: 'Codebase Navigation System: Indexes entire repositories into a semantic graph, allowing agents to traverse and understand complex dependencies instantly.' },
        { title: 'Self-Healing Runtime', desc: 'Recursive error handling loop: If an agent fails, the system captures the stderr, analyzes the root cause, patches the code, and restarts the process automatically.' },
        { title: '4-Layer Security Sandbox', desc: 'Kernel-level interception of dangerous syscalls. Blocks rm -rf, network exfiltration, and unauthorized file access at the process level.' },
        { title: 'Agent Swarm Protocol', desc: 'Orchestrator that dynamically spawns and kills specialized agents (Researcher, Coder, Reviewer) based on task complexity.' },
        { title: 'Context-Aware Memory', desc: 'Vector database (ChromaDB) for long-term recall of user preferences and project history.' }
      ]
    },
    documentation: [
      {
        title: "Universal CNS (Codebase Navigation System)",
        content: "The crown jewel of Jarvis. CNS is not just 'search'—it's a semantic map of the codebase.\n\nCapabilities:\n• Dependency Graphing: 'What breaks if I change this function?'\n• Semantic Jump: 'Go to the authentication logic', not just string matching.\n• Auto-Context: Automatically loads relevant files into the LLM context window based on the active task."
      },
      {
        title: "Self-Healing Architecture",
        content: "The system implements a Try-Catch-Analyze-Fix loop.\n\n1. Agent attempts task.\n2. Runtime error occurs.\n3. Error trace is fed to the 'Debugger' agent.\n4. Debugger generates a patch.\n5. 'Patcher' agent applies the fix and verifies with tests.\n6. Task resumes."
      },
      {
        title: "4-Layer Security Model",
        content: "Security is not an afterthought.\n\nLayer 1: Regex Filter (Blocks obvious commands like rm -rf)\nLayer 2: AST Analysis (Detects malicious code patterns)\nLayer 3: Syscall Interception (Ptrace-based monitoring)\nLayer 4: Network Airgap (Optional mode for fully local operation)"
      }
    ]
  },

  {
    id: 'email-telemetry',
    title: 'Nexus Telemetry',
    subtitle: 'Stealth Email Tracking System',
    url: 'https://github.com/ibraheemmryyian/nexus-telemetry',
    description: 'Advanced email telemetry system capable of fingerprinting clients and tracking engagement behind privacy proxies.',
    color: '#ef4444',
    tech: ['Node.js', 'Canvas API', 'Redis', 'Pixel Tracking'],
    isFlagship: true,
    details: {
      problem: "Modern email clients (Apple Mail Privacy Protection, Gmail Image Proxy) obfuscate open rates and user data, making standard tracking useless.",
      solution: "A forensic-grade telemetry engine using CSS fingerprinting, canvas noise, and timing attacks to pierce through privacy proxies and recover granular user data.",
      features: [
        { title: 'Proxy Penetration', desc: 'Identifies true device type (iPhone/Desktop) even behind Apple\'s privacy proxy using CSS media query leaks.' },
        { title: 'Read-Time Heuristics', desc: 'Measures exact dwell time on email content using keep-alive beacons and scroll tracking.' },
        { title: 'Client Fingerprinting', desc: 'Differentiates between Outlook, Gmail, and Apple Mail based on rendering engine quirks (WebKit vs Gecko vs Word).' },
        { title: 'Bot Detection', desc: 'Machine learning model that analyzes click latency and IP reputation to filter out security scanners and bots.' }
      ]
    },
    gitStory: [
      { date: '2024-01-10', message: 'init: Telemetry beacon server setup' },
      { date: '2024-01-15', message: 'feat: Implement CSS media query exfiltration for device detection' },
      { date: '2024-01-22', message: 'algo: Develop timing-attack algorithm to bypass image proxies' },
      { date: '2024-01-28', message: 'ui: Real-time dashboard with websocket feed' }
    ]
  },

  {
    id: 'gnn',
    title: 'GNN Visualizer',
    subtitle: 'Graph Neural Network Frontend',
    url: 'https://gnn.vercel.app/demo',
    description: 'Interactive educational tool for visualizing message passing in Graph Neural Networks.',
    color: '#8b5cf6',
    tech: ['React', 'D3.js', 'Vercel', 'WebGL'],
    details: {
      problem: "GNNs are abstract and hard to intuit. Students struggle to understand how 'aggregation' actually works.",
      solution: "A physics-based visualization that renders the flow of information across a graph in real-time.",
      features: [
        { title: 'Hybrid Rendering', desc: 'Seamlessly switches between SVG (interaction) and Canvas/WebGL (performance) for large graphs.' },
        { title: 'Force-Directed Physics', desc: 'Real-time layout optimization using D3-force with Barnes-Hut approximation.' },
        { title: 'Algorithm Playground', desc: 'Live execution of Dijkstra, BFS, and Louvain Community Detection in the browser.' }
      ]
    }
  },
  {
    id: 'betterteams',
    title: 'BetterTeams',
    subtitle: 'Team Management Platform',
    url: 'https://betterteams.vercel.app/demo',
    description: 'SaaS platform for optimizing team workflows and task distribution.',
    color: '#f97316',
    tech: ['React', 'Supabase', 'Vercel']
  }
];
