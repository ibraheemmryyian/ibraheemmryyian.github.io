
export const projects = [
  {
    id: 'symbioflows',
    title: 'SymbioFlows',
    subtitle: 'Founder & Developer',
    url: 'https://symbioflows.com',
    description: 'A marketplace that matches industrial waste producers with buyers using LLM-assisted classification and financial reporting.',
    color: '#10b981',
    tech: ['Python', 'Node.js', 'PostgreSQL', 'Supabase', 'DeepSeek R1', 'FastAPI'],
    isFlagship: true,
    details: {
      problem: "Industrial waste data is fragmented and unstructured, making it hard to find recycling buyers.",
      solution: "An AI-assisted matching platform that classifies waste streams and generates financial projections for each potential match.",
      features: [
        {
          title: "Matching Engine",
          desc: "Uses DeepSeek R1 to classify waste streams, with hard-coded heuristics to validate outputs before they surface."
        },
        {
          title: "Financial Projection",
          desc: "Calculates NPV and projected revenue for each matched material pair."
        },
        {
          title: "Concurrent Processing",
          desc: "Handles multiple users and file uploads simultaneously without blocking."
        },
        {
          title: "Legal Automation",
          desc: "Generates Letters of Intent automatically to speed up pilot project negotiations."
        }
      ]
    },
    gitStory: [
      { date: '2024-08-15', message: 'arch: Core microservices structure finalized' },
      { date: '2024-10-20', message: 'feat: Financial projection engine with verified market data' },
      { date: '2024-11-10', message: 'perf: Heuristic validation layer (latency < 100ms)' },
      { date: '2024-12-05', message: 'audit: Production readiness audit — passed 100% system integrity' }
    ],
    documentation: [
      {
        title: "How the pipeline works",
        content: "A multi-step pipeline: raw data comes in, gets normalized, fed into the AI for classification, validated by hard rules, then a financial report is generated.\n\n1. Normalization: Raw data ingestion and cleaning.\n2. AI Inference: DeepSeek R1 classifies waste streams.\n3. Validation: Heuristic guardrails reject bad outputs.\n4. Financial Projection: Deterministic NPV and IRR computation."
      }
    ]
  },

  {
    id: 'veiktuor',
    title: 'Veiktuor',
    subtitle: 'Personal Project',
    url: 'https://github.com/ibraheemmryyian/veiktuor',
    component: 'VeiktuorSimulator',
    description: 'A local multi-agent assistant that handles automation tasks. When a step fails, it captures the error, analyzes it, and retries automatically.',
    color: '#3b82f6',
    tech: ['Python', 'Node.js', 'FastAPI', 'Local LLMs', 'AST Parsing'],
    isFlagship: true,
    details: {
      problem: "Running complex multi-step tasks without crashing halfway through.",
      solution: "A multi-agent environment with automatic error recovery — when something fails, the system diagnoses and retries without manual intervention.",
      features: [
        { title: 'Error Recovery', desc: 'On failure, the system captures the trace, runs a diagnosis, generates a fix, and resumes.' },
        { title: 'Code Navigation', desc: 'Agents can traverse project file dependencies using an AST-based index — no manual context injection needed.' }
      ]
    },
    documentation: [
      {
        title: "The CNS Code Index",
        content: "A code index built with tree-sitter that maps file dependencies across the project. Agents use it to understand the codebase structure without needing manual context injection."
      }
    ]
  },

  {
    id: 'email-telemetry',
    title: 'Email Telemetry Engine',
    subtitle: 'Personal Project',
    url: 'https://github.com/ibraheemmryyian/nexus-telemetry',
    description: 'An email tracking system that works around Apple Mail and Gmail privacy proxies using CSS media queries and timing techniques.',
    color: '#ef4444',
    tech: ['Python', 'Node.js', 'PostgreSQL', 'JavaScript', 'CSS'],
    isFlagship: true,
    details: {
      problem: "Privacy proxies (Apple Mail, Gmail) break standard open-tracking pixels.",
      solution: "A system that infers client environment and engagement using CSS media queries and request timing analysis.",
      features: [
        { title: 'Proxy Detection', desc: 'Identifies whether a request came from a privacy proxy or the real client by analyzing timing and headers.' },
        { title: 'Timing Analysis', desc: 'Uses heuristics on proxy response timing to infer real device engagement.' }
      ]
    },
    gitStory: [
      { date: '2024-01-10', message: 'arch: Beacon infrastructure setup' },
      { date: '2024-01-15', message: 'feat: CSS media query fingerprinting' },
      { date: '2024-01-22', message: 'algo: Timing heuristics for proxy identification' },
      { date: '2024-01-28', message: 'ui: Real-time telemetry dashboard' }
    ]
  },

  {
    id: 'gnn',
    title: 'GNN Visualizer',
    subtitle: 'Personal Project',
    url: 'https://gnn.vercel.app/demo',
    description: 'Interactive visualizer for how message passing works in Graph Neural Networks. Switches between SVG and WebGL depending on graph size.',
    color: '#8b5cf6',
    tech: ['React', 'D3.js', 'WebGL', 'SVG'],
    details: {
      problem: "Message passing in GNNs is hard to understand from equations alone.",
      solution: "A visual playground where you can watch aggregation happen step-by-step on a live graph.",
      features: [
        { title: 'Hybrid Rendering', desc: 'Switches between SVG for small graphs and WebGL for large ones to stay performant.' },
        { title: 'Force Layout', desc: 'Uses Barnes-Hut approximation for real-time force-directed positioning.' },
        { title: 'Algorithm Playground', desc: 'Lets you run Dijkstra and Louvain on the graph interactively.' }
      ]
    }
  },
  {
    id: 'telegravity',
    title: 'TeleGravity',
    subtitle: 'Personal Project',
    url: 'https://github.com/ibraheemmryyian/telegravity',
    description: 'A Telegram bot that connects to VS Code so I can monitor and control agents from my phone.',
    color: '#3b82f6',
    tech: ['Node.js', 'Telegram API', 'VS Code API'],
    isFlagship: true,
    details: {
      problem: "Autonomous agents run unattended — hard to monitor without sitting at the desktop.",
      solution: "A Telegram-to-VS Code bridge that streams logs and lets me approve or reject agent actions from mobile.",
      features: [
        { title: 'Log Streaming', desc: 'Pipes terminal output to Telegram in real time.' },
        { title: 'Approval Workflows', desc: 'Agent actions requiring confirmation wait for a Telegram reply before proceeding.' }
      ]
    }
  },
  {
    id: 'betterteams',
    title: 'BetterTeams',
    subtitle: 'Personal Project',
    url: 'https://betterteams.vercel.app/demo',
    description: 'A workforce management tool for task distribution and team tracking.',
    color: '#f97316',
    noEmbed: true,
    tech: ['React', 'Supabase', 'Vercel']
  }
];
