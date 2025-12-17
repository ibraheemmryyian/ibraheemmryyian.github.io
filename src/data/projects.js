
export const projects = [
  {
    id: 'symbioflows',
    title: 'SymbioFlows',
    subtitle: 'Founder & Lead AI Engineer',
    url: 'https://symbioflows.com',
    description: 'My flagship venture. A multi-layered AI system for industrial waste valorization—instantly analyzing company profiles to predict waste streams and automate deal-making.',
    color: '#10b981', // Emerald green
    tech: ['DeepSeek R1', 'Node.js', 'AWS Lambda', 'Python'],
    isFlagship: true, // HIGHLIGHT Flag
    details: {
      problem: "Industrial companies unknowingly discard millions in recyclable assets due to complex valuation logic.",
      solution: "A 'Split-Brain' AI architecture validating waste streams against a 20-scenario 'Scorched Earth' verification suite.",
      features: [
        {
          title: "The Brain (Generative Layer)",
          desc: "Injects industry context into DeepSeek R1 to infer specific waste streams (e.g., 'HDPE Off-Spec Pellets'), leveraging a custom 'Asset vs. Liability' pricing model."
        },
        {
          title: "The Analyst (Deterministic Layer)",
          desc: "A 2,700-line Node.js engine that calculates hidden chemical recovery value and CO2 offsets, verified by 99.9% logical consistency tests."
        },
        {
          title: "The Closer (Automated Legal)",
          desc: "Decoupled AWS Lambda worker that generates professional Letters of Intent (LOIs) and scores leads (0-100) for instant follow-up."
        },
        {
          title: "Quantum-Inspired Matching",
          desc: "Python microservice utilizing hyperdimensional computing vectors to identify non-obvious waste-to-resource symbiosis opportunities."
        },
        {
          title: "Production SEO Architecture",
          desc: "Enterprise-grade visibility stack: React Helmet Async for dynamic meta injection, JSON-LD Schema (Organization/Person graph) for Knowledge Graph authority, and canonical URL management for duplicate content prevention."
        }
      ]
    },
    documentation: [
      {
        title: "The Challenge",
        content: "Industrial waste valorization is complex. Companies often don't know the value of their waste, leading to missed revenue or improper disposal. My goal was to build a system that could instantly analyze a company's profile, predict their waste streams with high accuracy, and automate the deal-making process—without human intervention."
      },
      {
        title: "Repository Structure Strategy",
        content: "To manage complexity, I architected the system into two distinct domains, demonstrating a mature understanding of Production Stability vs. Rapid Innovation.\n\n1. /mvp_backend (The Stable Production Core)\nTech: Node.js, Express, PDFKit, AWS Lambda\nRole: Handles high-throughput user traffic, API requests, and business-critical logic (Report Generation, PDF creation, Email delivery).\nKey Feature: 'Scorched Earth' Verification Suite (verify_*.js) ensuring 99.9% uptime and logic safety.\n\n2. /backend (The Advanced AI R&D Lab)\nTech: Python, TensorFlow, Scikit-learn, NetworkX\nRole: A microservice layer for heavy computational AI tasks (Monte Carlo simulations, Quantum-Inspired Matching).\nKey Feature: Runs experimental models (like revolutionary_ai_matching.py) without risking the stability of the main Node.js server."
      },
      {
        title: "Intelligent Symbiosis Engine",
        content: "I engineered a multi-layered AI system that moves beyond simple wrappers:\n\n1. 'The Brain' (Generative Layer): Injects industry context into DeepSeek R1 to infer specific waste streams. Distinguishes positive value assets vs negative liability logic.\n\n2. 'The Analyst' (Deterministic Layer): A 2,700-line heuristic engine that calculates hidden chemical recovery value and CO2 offsets. Verified by 20 unique scenario tests.\n\n3. 'The Closer' (Automated Legal): Decoupled AWS Lambda worker that generates professional Letters of Intent (LOIs) and scores leads (0-100) for instant follow-up."
      },
      {
        title: "Technical Highlights",
        content: "• Quantum-Inspired Vector Matching: Proprietary algorithm using hyperdimensional computing for non-obvious matches.\n• Production SEO: React Helmet Async, JSON-LD Schema, and Canonical Management for maximum search visibility.\n• Safety Compliance Regex: Scans AI outputs for required safety terms in hazardous industries.\n• Asynchronous Architecture: SQS/Lambda worker pattern for zero-latency UI."
      }
    ]
  },
  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S v2',
    subtitle: 'AI Co-founder & Autonomous Agent System',
    url: '', // Uses Simulator
    component: 'JarvisSimulator',
    description: 'A multi-agent AI system with 26 specialized agents orchestrating autonomous task execution, self-healing code generation, and intelligent context management.',
    color: '#3b82f6', // Blue
    tech: ['Python', 'Tkinter', 'LM Studio', '26 Agent Modules', '850+ Lines'],
    isFlagship: true,
    details: {
      problem: "Cloud AIs lack deep system integration, context awareness, and autonomous execution capabilities.",
      solution: "A modular 26-agent architecture with autonomous task planning, self-healing QA loops, 4-layer terminal sandboxing, and intelligent context recycling.",
      features: [
        { title: 'Autonomous Brain (autonomous.py)', desc: 'Multi-step task executor that plans 10 steps via LLM, detects task type (coding/research/writing), and orchestrates self-healing QA feedback loops.' },
        { title: 'Context Recycler (recycler.py)', desc: 'Prevents token overflow by monitoring context capacity (75% threshold), auto-archiving old tasks, and summarizing to continue seamlessly.' },
        { title: '4-Layer Terminal Sandbox', desc: 'Blocked commands (rm, del, sudo), blocked patterns (;, &&, |), blocked keywords (delete, destroy), and strict whitelist (npm, pip, python, node).' },
        { title: 'Design Creativity Engine', desc: '10 layout patterns (Bento Grid, Horizontal Scroll), 8 color palettes (Neon Cyberpunk, Ocean Depths), 8 typography combos, and banned pattern lists.' },
        { title: 'Smart Code Indexer', desc: 'Retrieves relevant context dynamically, enabling precise code generation with full project awareness.' },
        { title: 'Git Automation Agent', desc: 'Full version control: init, commit, push, auto_save during tasks, and full_setup (init + GitHub repo + push).' }
      ]
    },
    documentation: [
      {
        title: "Project Structure",
        content: "jarvis/\n├── agents/                     # Core agent system (26 modules)\n│   ├── autonomous.py           # Multi-step task executor\n│   ├── recycler.py             # Context management\n│   ├── router.py               # Intent classification\n│   ├── orchestrator.py         # Task routing\n│   ├── project_manager.py      # File indexing, stack templates\n│   ├── qa.py                   # Syntax validation, auto-fix\n│   ├── terminal.py             # Sandboxed command execution\n│   ├── code_indexer.py         # Smart context retrieval\n│   ├── code_reviewer.py        # Variable analysis, documentation\n│   ├── browser_tester.py       # Page testing, screenshots\n│   ├── design_creativity.py    # Unique layout generation\n│   ├── git_agent.py            # Commit, push, repo creation\n│   ├── brute_research.py       # Multi-engine deep research\n│   └── ... (26 total modules)\n│\n├── jarvis_ui.py                # Main UI (Tkinter)\n└── jarvis_workspace/\n    ├── .context/               # Task state, context files\n    └── projects/               # Generated projects with .jarvis/ metadata"
      },
      {
        title: "Agent Architecture & Execution Flow",
        content: "User Input → jarvis_ui.py → Tool Router\n\n• Simple tasks → Individual Tool execution\n• Complex tasks → autonomous_task flow:\n\n1. autonomous.py receives objective\n2. recycler.py initializes task state\n3. _plan_steps() → LLM generates 10 steps\n4. For Each Step:\n   ├── code_indexer.py gets relevant context\n   ├── design_creativity.py injects unique prompts\n   ├── LLM generates code\n   ├── project_manager.py adds files\n   ├── qa_agent.py runs validation\n   └── recycler.py marks step complete\n5. code_reviewer.py reviews project\n6. Done → project in jarvis_workspace/projects/"
      },
      {
        title: "Key Agent: autonomous.py (The Brain)",
        content: "Orchestrates multi-step task execution with self-healing capabilities.\n\nCore Methods:\n• run(objective) — Main entry point for autonomous execution\n• _plan_steps() — LLM generates 10 strategic steps\n• _execute_step() — Executes single step with full context\n• _detect_task_type() — Classifies: coding/research/writing/analysis\n• _extract_and_save_code() — Parses LLM output, saves files\n• _run_qa_feedback() — Self-healing QA loop with auto-fix"
      },
      {
        title: "Key Agent: recycler.py (Context Management)",
        content: "Prevents token overflow and maintains task continuity.\n\nCore Methods:\n• set_task() — Initialize task, auto-archive old contexts\n• mark_step_complete() — Log step completion with metadata\n• needs_recycling() — Check if at 75% capacity threshold\n• recycle() — Summarize context and continue seamlessly\n\nContext stored in: jarvis_workspace/.context/task_state.md"
      },
      {
        title: "Key Agent: terminal.py (4-Layer Sandbox)",
        content: "Sandboxed command execution with enterprise-grade security.\n\n4-Layer Security Model:\n1. Blocked Commands: rm, del, sudo, format\n2. Blocked Patterns: ;, &&, ||, | (prevents chaining)\n3. Blocked Keywords: delete, destroy, remove, wipe\n4. Strict Whitelist: npm, pip, python, node, git\n\nAll commands execute within jarvis_workspace/ sandbox."
      },
      {
        title: "Key Agent: design_creativity.py",
        content: "Generates unique, non-template designs for every project.\n\nCreativity Database:\n• 10 Layout Patterns: Bento Grid, Horizontal Scroll, Asymmetric Masonry, Split-Screen Hero, Card Stack, etc.\n• 8 Color Palettes: Neon Cyberpunk, Ocean Depths, Sunset Gradient, Midnight Purple, etc.\n• 8 Typography Combos: Modern Sans + Serif pairings\n• Banned Pattern List: Prevents generic Bootstrap/template outputs"
      },
      {
        title: "UI Tools & Configuration",
        content: "Available Tools in jarvis_ui.py:\n• autonomous_task(objective) — Big projects\n• cofounder_task(type, objective) — Research/writing/analysis\n• git_push(project, message) — Version control\n• write_file(filename, content) — Quick edits\n• deep_research(topic) — Multi-source research\n\nConfiguration (config.py):\n• LM_STUDIO_URL: http://localhost:1234/v1/chat/completions\n• WORKSPACE_DIR: jarvis_workspace\n• MAX_CONTEXT_TOKENS: 32,000\n\nTotal: 26 Agents | 850+ Lines of Agent Code"
      }
    ]
  },
  {
    id: 'gnn',
    title: 'GNN Visualizer',
    subtitle: 'Graph Neural Network Frontend',
    url: 'https://gnn.vercel.app/demo', // Assuming /demo exists or main page is safe
    description: 'A frontend visualization tool for Graph Neural Networks. Visualizes complex node relationships.',
    color: '#8b5cf6', // Violet
    tech: ['React', 'D3.js', 'Vercel']
  },
  {
    id: 'betterteams',
    title: 'BetterTeams',
    subtitle: 'Team Management Platform',
    url: 'https://betterteams.vercel.app/demo',
    description: 'Streamlining team operations and management.',
    color: '#f97316', // Orange
    tech: ['React', 'Vercel']
  },
  {
    id: 'escapism',
    title: 'Escapism Clothes',
    subtitle: 'Fashion E-commerce',
    url: 'https://escapismclothes.vercel.app',
    description: 'Modern e-commerce frontend for a fashion brand.',
    color: '#ec4899', // Pink
    tech: ['React', 'Vercel']
  }
];
