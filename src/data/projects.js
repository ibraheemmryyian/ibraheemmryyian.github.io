
export const projects = [
  {
    id: 'symbioflows',
    title: 'SymbioFlows',
    subtitle: 'Founder & Lead Engineer',
    url: 'https://symbioflows.com',
    description: 'AI system for industrial waste valorization—analyzing company profiles to predict waste streams and automate outreach.',
    color: '#10b981',
    tech: ['DeepSeek R1', 'Node.js', 'AWS Lambda', 'Python'],
    isFlagship: true,
    details: {
      problem: "Industrial companies often don't know the value of their waste, leading to missed revenue or improper disposal.",
      solution: "A dual-layer AI architecture that generates waste predictions and validates them against business logic rules.",
      features: [
        {
          title: "Generative Layer",
          desc: "Injects industry context into DeepSeek R1 to infer specific waste streams, distinguishing assets from disposal liabilities."
        },
        {
          title: "Validation Layer",
          desc: "Heuristic engine that calculates recovery value and CO2 offsets, with automated scenario testing."
        },
        {
          title: "Automated Outreach",
          desc: "AWS Lambda worker that generates Letters of Intent and scores leads for follow-up prioritization."
        },
        {
          title: "Matching Engine",
          desc: "Python microservice using vector similarity to identify waste-to-resource opportunities across industries."
        },
        {
          title: "SEO Stack",
          desc: "React Helmet Async, JSON-LD Schema, and canonical URL management for search visibility."
        }
      ]
    },
    documentation: [
      {
        title: "The Challenge",
        content: "Industrial waste valorization is complex. Companies often don't know what their waste is worth. I built a system that analyzes company profiles, predicts their waste streams, and automates the deal-making process."
      },
      {
        title: "System Architecture",
        content: "Two separate codebases:\n\n1. /mvp_backend (Production)\nNode.js, Express, PDFKit, AWS Lambda\nHandles API requests, report generation, PDF creation, email delivery.\nIncludes verification suite for logic safety.\n\n2. /backend (AI Layer)\nPython, TensorFlow, Scikit-learn, NetworkX\nRuns computational tasks: Monte Carlo simulations, vector matching.\nIsolated from production for stability."
      },
      {
        title: "AI Pipeline",
        content: "1. Generative Layer: DeepSeek R1 infers waste streams from company context. Classifies outputs as assets or liabilities.\n\n2. Validation Layer: Heuristic engine calculates recovery value and CO2 offsets. Runs scenario tests.\n\n3. Outreach Layer: Lambda worker generates LOIs and scores leads (0-100)."
      },
      {
        title: "Key Features",
        content: "• Vector Matching: Finds non-obvious waste-to-resource pairs across industries.\n• SEO: Dynamic meta injection, JSON-LD Schema, canonical URLs.\n• Safety Compliance: Regex scans AI outputs for required terms in hazardous industries.\n• Async Processing: SQS/Lambda pattern for responsive UI."
      }
    ]
  },
  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S v2',
    subtitle: 'Local AI Assistant',
    url: '',
    component: 'JarvisSimulator',
    description: 'A multi-agent AI system for autonomous task execution, code generation, and project scaffolding—all running locally.',
    color: '#3b82f6',
    tech: ['Python', 'Tkinter', 'LM Studio', 'Multi-Agent'],
    isFlagship: true,
    details: {
      problem: "Cloud AI assistants lack deep system integration and can't execute complex multi-step tasks autonomously.",
      solution: "A modular agent architecture with task planning, sandboxed execution, and context management.",
      features: [
        { title: 'Task Executor', desc: 'Plans multi-step tasks via LLM, detects task type (coding/research/writing), runs QA feedback loops.' },
        { title: 'Context Manager', desc: 'Monitors token usage, archives completed tasks, summarizes context to prevent overflow.' },
        { title: 'Terminal Sandbox', desc: 'Whitelisted commands only. Blocks dangerous operations and command chaining.' },
        { title: 'Design Engine', desc: 'Injects layout patterns, color palettes, and typography to avoid generic outputs.' },
        { title: 'Code Indexer', desc: 'Retrieves relevant project context for accurate code generation.' },
        { title: 'Git Agent', desc: 'Handles version control: init, commit, push, and GitHub repo creation.' }
      ]
    },
    documentation: [
      {
        title: "Project Structure",
        content: "jarvis/\n├── agents/                     # Agent modules\n│   ├── autonomous.py           # Task executor\n│   ├── recycler.py             # Context management\n│   ├── router.py               # Intent classification\n│   ├── orchestrator.py         # Task routing\n│   ├── project_manager.py      # File indexing\n│   ├── qa.py                   # Syntax validation\n│   ├── terminal.py             # Command execution\n│   ├── code_indexer.py         # Context retrieval\n│   ├── design_creativity.py    # Layout generation\n│   ├── git_agent.py            # Version control\n│   └── ...\n│\n├── jarvis_ui.py                # Main UI\n└── jarvis_workspace/\n    ├── .context/               # Task state\n    └── projects/               # Generated projects"
      },
      {
        title: "Execution Flow",
        content: "User Input → UI → Tool Router\n\n• Simple tasks → Direct tool execution\n• Complex tasks → Autonomous flow:\n\n1. Task executor receives objective\n2. Context manager initializes state\n3. LLM generates step plan\n4. For each step:\n   ├── Retrieve relevant context\n   ├── Generate code\n   ├── Add files to project\n   ├── Run QA validation\n   └── Mark step complete\n5. Review completed project"
      },
      {
        title: "Task Executor",
        content: "Orchestrates multi-step execution.\n\nCore Methods:\n• run(objective) — Entry point\n• _plan_steps() — Generate step plan\n• _execute_step() — Run single step with context\n• _detect_task_type() — Classify: coding/research/writing\n• _run_qa_feedback() — Validation loop with auto-fix"
      },
      {
        title: "Context Manager",
        content: "Prevents token overflow.\n\nCore Methods:\n• set_task() — Initialize, archive old contexts\n• mark_step_complete() — Log completion\n• needs_recycling() — Check capacity threshold\n• recycle() — Summarize and continue"
      },
      {
        title: "Terminal Sandbox",
        content: "Safe command execution.\n\nSecurity Layers:\n1. Blocked Commands: rm, del, sudo, format\n2. Blocked Patterns: ;, &&, ||, | (no chaining)\n3. Blocked Keywords: delete, destroy, remove\n4. Whitelist: npm, pip, python, node, git\n\nAll commands run in isolated workspace."
      },
      {
        title: "Available Tools",
        content: "Tools:\n• autonomous_task(objective) — Multi-step projects\n• cofounder_task(type, objective) — Research/writing\n• git_push(project, message) — Version control\n• write_file(filename, content) — Quick edits\n• deep_research(topic) — Web research"
      }
    ]
  },
  {
    id: 'gnn',
    title: 'GNN Visualizer',
    subtitle: 'Graph Neural Network Frontend',
    url: 'https://gnn.vercel.app/demo',
    description: 'Visualization tool for Graph Neural Networks. Displays node relationships and network structure.',
    color: '#8b5cf6',
    tech: ['React', 'D3.js', 'Vercel']
  },
  {
    id: 'betterteams',
    title: 'BetterTeams',
    subtitle: 'Team Management Platform',
    url: 'https://betterteams.vercel.app/demo',
    description: 'Platform for team operations and task management.',
    color: '#f97316',
    tech: ['React', 'Vercel']
  },
  {
    id: 'escapism',
    title: 'Escapism Clothes',
    subtitle: 'Fashion E-commerce',
    url: 'https://escapismclothes.vercel.app',
    description: 'E-commerce frontend for a fashion brand.',
    color: '#ec4899',
    tech: ['React', 'Vercel']
  }
];
