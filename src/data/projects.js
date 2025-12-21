
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
    title: 'J.A.R.V.I.S',
    subtitle: 'Autonomous AI Workforce Platform',
    url: 'https://github.com/ibraheemmryyian/jarvis',
    component: 'JarvisSimulator',
    description: 'A locally-running autonomous AI platform with 57 specialized agents. $0 API costs, complete data privacy, self-healing execution.',
    color: '#3b82f6',
    tech: ['Python', 'FastAPI', 'LM Studio', 'PyQt6', 'SQLite'],
    isFlagship: true,
    details: {
      problem: "Cloud AI assistants cost money per API call, expose sensitive data to third parties, and can't execute complex multi-step tasks autonomously.",
      solution: "A 57-agent local AI workforce with self-healing execution, 4-layer terminal security, and adaptive token management—all running on your hardware.",
      features: [
        { title: '57 Specialized Agents', desc: 'Coding, research, business analysis, content writing—each domain has dedicated agents.' },
        { title: 'Self-Healing Execution', desc: 'Detects errors during multi-step tasks and automatically fixes them without manual intervention.' },
        { title: '4-Layer Terminal Security', desc: 'Blocked commands, blocked patterns, blocked keywords, and whitelist-only execution in sandboxed workspace.' },
        { title: 'Context Recycling', desc: 'Prevents token overflow by summarizing and compressing context when approaching limits.' },
        { title: 'Adaptive Token Limits', desc: 'Adjusts token allocation (4K-16K) based on task complexity: planning, standard, component, or max.' },
        { title: 'Cross-Platform', desc: 'Automatic Linux→Windows command translation. Works on any OS with Python.' }
      ]
    },
    documentation: [
      {
        title: "Architecture Overview",
        content: "┌─────────────────────────────────────────────────────────────┐\n│                      JARVIS CORE                             │\n├─────────────────────────────────────────────────────────────┤\n│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │\n│  │   Router    │───▶│ Orchestrator│───▶│  Recycler   │     │\n│  │  (Intent)   │    │ (Dispatch)  │    │ (Context)   │     │\n│  └─────────────┘    └─────────────┘    └─────────────┘     │\n│                            │                                 │\n│         ┌──────────────────┼──────────────────┐             │\n│         ▼                  ▼                  ▼             │\n│  ┌────────────┐    ┌────────────┐    ┌────────────┐        │\n│  │  Coding    │    │  Research  │    │  Business  │        │\n│  │  Agents    │    │  Agents    │    │  Agents    │        │\n│  └────────────┘    └────────────┘    └────────────┘        │\n│                                                              │\n├─────────────────────────────────────────────────────────────┤\n│  LM Studio (Local LLM) ◀──────────────────────────────────▶ │\n└─────────────────────────────────────────────────────────────┘"
      },
      {
        title: "Core Infrastructure",
        content: "🏗️ Core Agents\n\nautonomous.py (57KB)\n  Self-healing multi-step execution loop\n\norchestrator.py (23KB)\n  Task routing and agent coordination\n\nrecycler.py (20KB)\n  Context window management\n  Prevents token overflow\n\nmemory.py (17KB)\n  Persistent memory with SQLite"
      },
      {
        title: "Development Agents",
        content: "💻 Code Generation & QA\n\ncoder.py\n  Full-stack code generation\n\ncode_indexer.py\n  AST-based code search\n\ncode_reviewer.py\n  Automated code review\n\nqa.py\n  Quality assurance with auto-fix\n\nvisual_qa.py\n  Vision-based UI validation\n\nterminal.py\n  Sandboxed command execution\n  4-layer security model"
      },
      {
        title: "Research & Business Agents",
        content: "🔬 Research\n\nbrute_research.py\n  Multi-source research (20+ sources)\n\nacademic_research.py\n  arXiv, Semantic Scholar, CrossRef\n\nsynthesis.py\n  Cross-source analysis\n\n💼 Business\n\nbusiness_analyst.py\n  SWOT, BMC, Porter's 5 Forces\n\npitch_deck.py\n  Investor deck generation\n\ncontent_writer.py\n  Blog, email, social content"
      },
      {
        title: "Security Model",
        content: "4-Layer Terminal Security\n\n┌────────────────────────────────────┐\n│ Layer 1: Blocked Commands          │\n│   rm, del, sudo, format            │\n├────────────────────────────────────┤\n│ Layer 2: Blocked Patterns          │\n│   ; && || | > (no chaining)        │\n├────────────────────────────────────┤\n│ Layer 3: Blocked Keywords          │\n│   delete, destroy, remove          │\n├────────────────────────────────────┤\n│ Layer 4: Whitelist Only            │\n│   npm, pip, python, node, git      │\n└────────────────────────────────────┘\n\nAll commands run in isolated workspace."
      },
      {
        title: "Stats & Tech Stack",
        content: "Project Stats\n─────────────────────────────\nTotal Agents      57\nLines of Code     20,000+\nAPI Endpoints     25+\nAPI Cost          $0\nLLM               Local (any GGUF model)\n\nTech Stack\n─────────────────────────────\nLanguage          Python 3.11+\nLLM Backend       LM Studio (local)\nAPI               FastAPI\nDatabase          SQLite / Supabase\nTesting           Playwright (headless)\nVoice             Piper TTS, Vosk STT\nUI                PyQt6"
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
