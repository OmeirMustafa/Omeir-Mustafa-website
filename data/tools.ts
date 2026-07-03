import type { AITool } from '@/types';

export const tools: AITool[] = [
  // -----------------------------------------------------------------------
  // Claude — Anthropic
  // -----------------------------------------------------------------------
  {
    name: 'Claude',
    slug: 'claude',
    description:
      'Anthropic\'s flagship AI assistant renowned for nuanced reasoning, long-context understanding (up to 200K tokens), and safety-first design. Claude excels at code generation, document analysis, creative writing, and complex multi-step tasks. Its extended thinking mode and tool-use (MCP) capabilities make it uniquely powerful for agentic workflows.',
    shortDescription:
      'Anthropic\'s advanced AI assistant with 200K context, extended thinking, and MCP tool-use.',
    category: 'ai-assistant',
    icon: 'brain',
    rating: 4.8,
    pricing: 'freemium',
    pricingDetails: 'Free tier available. Pro plan $20/mo. Team $30/user/mo. Enterprise custom pricing.',
    pros: [
      'Best-in-class reasoning and instruction following',
      'Massive 200K token context window',
      'Extended thinking for complex problem solving',
      'MCP protocol enables tool use and agent workflows',
      'Strong code generation across multiple languages',
      'Excellent at document analysis and summarization',
    ],
    cons: [
      'Free tier has lower rate limits',
      'Occasionally over-cautious with safety refusals',
      'No native image generation',
      'API costs can scale quickly at high volume',
    ],
    useCases: [
      'Building autonomous AI agents with MCP',
      'Large codebase analysis and refactoring',
      'Long-document summarization and research',
      'Content creation with nuanced tone control',
      'Complex multi-step reasoning tasks',
    ],
    alternatives: ['chatgpt', 'gemini', 'perplexity'],

    websiteUrl: 'https://claude.ai',
    tags: ['AI', 'LLM', 'agents', 'coding', 'MCP', 'reasoning'],
    featured: true,
    tutorialUrl: 'https://youtube.com/@omeirmustafa',
    relatedWorkflows: ['ai-research-agent-claude-mcp', 'automate-client-onboarding-n8n-claude'],
  },

  // -----------------------------------------------------------------------
  // ChatGPT — OpenAI
  // -----------------------------------------------------------------------
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    description:
      'OpenAI\'s conversational AI assistant powered by GPT-4o and o-series reasoning models. ChatGPT offers a broad feature set including vision, voice, image generation via DALL·E, code interpreter, web browsing, and a rich plugin/GPT ecosystem. It remains the most widely adopted AI assistant globally with the largest third-party integration ecosystem.',
    shortDescription:
      'OpenAI\'s versatile AI assistant with GPT-4o, vision, image generation, and plugins.',
    category: 'ai-assistant',
    icon: 'message-square',
    rating: 4.5,
    pricing: 'freemium',
    pricingDetails: 'Free tier (GPT-4o mini). Plus $20/mo. Team $25/user/mo. Enterprise custom.',
    pros: [
      'Largest ecosystem of plugins and GPTs',
      'Multimodal: text, vision, voice, image generation',
      'Built-in code interpreter and data analysis',
      'Web browsing for real-time information',
      'Strong general-purpose performance across tasks',
    ],
    cons: [
      'Can hallucinate confidently on niche topics',
      'Context window smaller than Claude for long docs',
      'Plugin quality varies significantly',
      'Reasoning depth trails Claude on complex tasks',
    ],
    useCases: [
      'Quick content drafting and brainstorming',
      'Data analysis with code interpreter',
      'Image generation and visual content creation',
      'Customer-facing chatbot prototyping',
      'General-purpose business automation',
    ],
    alternatives: ['claude', 'gemini', 'perplexity'],

    websiteUrl: 'https://chat.openai.com',
    tags: ['AI', 'LLM', 'GPT', 'plugins', 'multimodal', 'image-generation'],
    featured: true,
    relatedWorkflows: ['ai-content-repurposing-pipeline', 'automated-email-newsletter-ai'],
  },

  // -----------------------------------------------------------------------
  // Gemini — Google
  // -----------------------------------------------------------------------
  {
    name: 'Gemini',
    slug: 'gemini',
    description:
      'Google\'s multimodal AI model family with native integration across Google Workspace, Search, and Cloud. Gemini stands out for its 1M+ token context window (Gemini 1.5 Pro), deep Google ecosystem integration, and strong performance on multimodal tasks combining text, images, audio, and video understanding.',
    shortDescription:
      'Google\'s multimodal AI with 1M+ context window and deep Workspace integration.',
    category: 'ai-assistant',
    icon: 'sparkles',
    rating: 4.3,
    pricing: 'freemium',
    pricingDetails: 'Free tier available. Gemini Advanced $20/mo (bundled with Google One AI Premium).',
    pros: [
      'Massive 1M+ token context window',
      'Native Google Workspace and Search integration',
      'Strong multimodal capabilities (text, image, audio, video)',
      'Competitive API pricing via Google AI Studio',
      'Built-in grounding with Google Search',
    ],
    cons: [
      'Instruction following less precise than Claude',
      'Creative writing quality can be inconsistent',
      'Smaller third-party tool ecosystem',
      'Advanced features locked behind Google One subscription',
    ],
    useCases: [
      'Analyzing long documents and research papers',
      'Multimodal content understanding (video, audio)',
      'Google Workspace productivity automation',
      'Cost-effective API access for high-volume apps',
      'Cross-modal search and retrieval',
    ],
    alternatives: ['claude', 'chatgpt', 'perplexity'],

    websiteUrl: 'https://gemini.google.com',
    tags: ['AI', 'LLM', 'multimodal', 'Google', 'long-context'],
    featured: false,
  },

  // -----------------------------------------------------------------------
  // Cursor — AI Code Editor
  // -----------------------------------------------------------------------
  {
    name: 'Cursor',
    slug: 'cursor',
    description:
      'An AI-native code editor built on VS Code that deeply integrates LLMs into every part of the development workflow. Cursor\'s standout features include multi-file editing with Composer, intelligent autocomplete (Tab), inline chat with full codebase context, and the ability to reference documentation and files. It has become the go-to editor for AI-first development.',
    shortDescription:
      'AI-native code editor with multi-file editing, codebase-aware chat, and intelligent autocomplete.',
    category: 'coding',
    icon: 'code',
    rating: 4.7,
    pricing: 'freemium',
    pricingDetails: 'Free tier (limited). Pro $20/mo. Business $40/user/mo.',
    pros: [
      'Multi-file editing with Composer mode',
      'Full codebase context awareness',
      'Intelligent Tab autocomplete understands intent',
      'Reference docs, files, and URLs in chat',
      'Built on VS Code — familiar extensions and keybindings',
      'Supports multiple LLM backends (Claude, GPT-4o, etc.)',
    ],
    cons: [
      'Pro plan costs add up for teams',
      'Heavy AI usage can hit rate limits',
      'Occasional autocomplete suggestions that miss context',
      'Resource-intensive on lower-spec machines',
    ],
    useCases: [
      'Full-stack application development',
      'Rapid prototyping with AI pair programming',
      'Large codebase refactoring and migration',
      'Learning new languages and frameworks',
      'Debugging and code review assistance',
    ],
    alternatives: ['github-copilot', 'bolt', 'v0'],

    websiteUrl: 'https://cursor.com',
    tags: ['coding', 'AI', 'IDE', 'developer-tools', 'pair-programming'],
    featured: true,
    tutorialUrl: 'https://youtube.com/@omeirmustafa',
  },

  // -----------------------------------------------------------------------
  // n8n — Workflow Automation
  // -----------------------------------------------------------------------
  {
    name: 'n8n',
    slug: 'n8n',
    description:
      'A powerful open-source workflow automation platform that lets you connect any app or API with a visual node-based editor. n8n supports 400+ integrations, custom code nodes (JavaScript/Python), webhooks, and AI-powered nodes for LLM chains. Its self-hostable architecture gives you full data control, making it ideal for privacy-conscious automation.',
    shortDescription:
      'Open-source workflow automation with 400+ integrations, AI nodes, and self-hosting.',
    category: 'automation',
    icon: 'workflow',
    rating: 4.6,
    pricing: 'freemium',
    pricingDetails: 'Free self-hosted (unlimited). Cloud: Starter $20/mo. Pro $50/mo. Enterprise custom.',
    pros: [
      'Open-source and self-hostable for full data control',
      '400+ pre-built integrations',
      'Visual node-based workflow builder',
      'AI/LLM nodes for intelligent automation',
      'Custom JavaScript/Python code nodes',
      'Active community and extensive documentation',
    ],
    cons: [
      'Self-hosting requires DevOps knowledge',
      'Learning curve for complex multi-branch workflows',
      'Cloud pricing can increase with execution volume',
      'UI can feel overwhelming with very large workflows',
    ],
    useCases: [
      'Client onboarding automation',
      'Content repurposing across platforms',
      'CRM and email marketing automation',
      'Data pipeline and ETL workflows',
      'AI agent orchestration with LLM chains',
    ],
    alternatives: ['chatgpt', 'cursor'],

    websiteUrl: 'https://n8n.io',
    tags: ['automation', 'workflows', 'no-code', 'open-source', 'integrations', 'AI'],
    featured: true,
    tutorialUrl: 'https://youtube.com/@omeirmustafa',
    relatedWorkflows: ['automate-client-onboarding-n8n-claude', 'automated-email-newsletter-ai'],
  },

  // -----------------------------------------------------------------------
  // v0 by Vercel
  // -----------------------------------------------------------------------
  {
    name: 'v0 by Vercel',
    slug: 'v0',
    description:
      'Vercel\'s AI-powered UI generation tool that creates production-ready React components from text prompts and images. v0 generates clean code using shadcn/ui, Tailwind CSS, and Next.js conventions. It excels at rapidly prototyping landing pages, dashboards, and complex UI patterns — turning design ideas into deployable components in seconds.',
    shortDescription:
      'AI UI generator that creates production-ready React + Tailwind components from prompts.',
    category: 'design',
    icon: 'palette',
    rating: 4.4,
    pricing: 'freemium',
    pricingDetails: 'Free tier (limited generations). Premium $20/mo for unlimited.',
    pros: [
      'Generates clean, production-ready React code',
      'Uses shadcn/ui and Tailwind CSS conventions',
      'Image-to-code capability for design replication',
      'Iterative refinement through conversational prompts',
      'Instant preview with shareable links',
    ],
    cons: [
      'Limited to React/Next.js ecosystem',
      'Complex interactive logic may need manual refinement',
      'Free tier generations are limited',
      'Backend/API integration still requires manual work',
    ],
    useCases: [
      'Rapid UI prototyping from wireframes',
      'Converting design mockups to code',
      'Building landing pages and marketing sites',
      'Creating dashboard layouts and data visualizations',
      'Generating component libraries quickly',
    ],
    alternatives: ['bolt', 'cursor'],

    websiteUrl: 'https://v0.dev',
    tags: ['design', 'UI', 'React', 'Tailwind', 'prototyping', 'code-generation'],
    featured: false,
  },

  // -----------------------------------------------------------------------
  // Bolt — StackBlitz
  // -----------------------------------------------------------------------
  {
    name: 'Bolt',
    slug: 'bolt',
    description:
      'StackBlitz\'s AI-powered full-stack development environment that runs entirely in the browser. Bolt can scaffold, build, and deploy complete web applications from natural language prompts. It leverages WebContainers to run Node.js natively in the browser, enabling instant previews, npm package installation, and deployment — all without local setup.',
    shortDescription:
      'In-browser AI dev environment that builds and deploys full-stack apps from prompts.',
    category: 'coding',
    icon: 'zap',
    rating: 4.2,
    pricing: 'freemium',
    pricingDetails: 'Free tier available. Pro plan with increased limits.',
    pros: [
      'Zero local setup — runs entirely in browser',
      'Scaffold full-stack apps from natural language',
      'Instant previews with live hot-reload',
      'Built-in deployment to hosting providers',
      'Supports npm packages and Node.js runtime',
    ],
    cons: [
      'Browser-based limits complex project scale',
      'Less control than local development environments',
      'Can struggle with very large codebases',
      'Quality depends heavily on prompt clarity',
    ],
    useCases: [
      'Rapid prototyping without local setup',
      'Building MVPs and proof-of-concepts',
      'Learning web development with AI guidance',
      'Quick demo and presentation builds',
      'Hackathon and side project scaffolding',
    ],
    alternatives: ['cursor', 'v0', 'github-copilot'],

    websiteUrl: 'https://bolt.new',
    tags: ['coding', 'AI', 'browser-IDE', 'full-stack', 'prototyping'],
    featured: false,
  },

  // -----------------------------------------------------------------------
  // Perplexity
  // -----------------------------------------------------------------------
  {
    name: 'Perplexity',
    slug: 'perplexity',
    description:
      'An AI-powered research and answer engine that combines real-time web search with LLM synthesis to deliver cited, up-to-date answers. Perplexity\'s Pro Search performs multi-step research with follow-up questions, and its Focus modes let you target academic papers, code, or specific domains. It has become the go-to tool for research-heavy AI workflows.',
    shortDescription:
      'AI research engine combining real-time web search with cited, LLM-synthesized answers.',
    category: 'ai-assistant',
    icon: 'search',
    rating: 4.5,
    pricing: 'freemium',
    pricingDetails: 'Free tier available. Pro $20/mo for unlimited Pro Search and file uploads.',
    pros: [
      'Real-time web search with source citations',
      'Pro Search for multi-step deep research',
      'Focus modes (Academic, Code, Writing, etc.)',
      'Clean, distraction-free research interface',
      'File upload and analysis capabilities',
    ],
    cons: [
      'Not designed for long-form content creation',
      'Pro Search queries limited on free tier',
      'Less suitable for creative or generative tasks',
      'API access is separate and priced differently',
    ],
    useCases: [
      'Deep research with cited sources',
      'Competitive analysis and market research',
      'Technical documentation lookup',
      'Academic paper discovery and summarization',
      'Fact-checking and verification workflows',
    ],
    alternatives: ['claude', 'chatgpt', 'gemini'],

    websiteUrl: 'https://perplexity.ai',
    tags: ['AI', 'research', 'search', 'citations', 'knowledge'],
    featured: false,
  },

  // -----------------------------------------------------------------------
  // Midjourney
  // -----------------------------------------------------------------------
  {
    name: 'Midjourney',
    slug: 'midjourney',
    description:
      'The leading AI image generation platform known for producing stunningly artistic and photorealistic visuals. Midjourney operates primarily through Discord with a web interface in development. Its v6 model delivers exceptional quality for marketing visuals, social media graphics, concept art, and brand imagery with fine-grained style and composition control.',
    shortDescription:
      'Premier AI image generator producing artistic, photorealistic visuals via Discord.',
    category: 'design',
    icon: 'image',
    rating: 4.6,
    pricing: 'paid',
    pricingDetails: 'Basic $10/mo. Standard $30/mo. Pro $60/mo. Mega $120/mo.',
    pros: [
      'Best-in-class image quality and aesthetics',
      'Exceptional style consistency and control',
      'Strong at photorealistic and artistic outputs',
      'Active community sharing prompts and techniques',
      'Continuous model improvements',
    ],
    cons: [
      'No free tier — requires paid subscription',
      'Primary interface is Discord (web app in beta)',
      'Less control over precise layouts and text',
      'Commercial usage rights vary by plan',
    ],
    useCases: [
      'Social media visual content creation',
      'Brand identity and marketing materials',
      'Concept art and mood boards',
      'Thumbnail and cover image generation',
      'Product mockup visualization',
    ],
    alternatives: ['v0', 'chatgpt'],

    websiteUrl: 'https://midjourney.com',
    tags: ['AI', 'image-generation', 'design', 'creative', 'visual-content'],
    featured: false,
  },

  // -----------------------------------------------------------------------
  // GitHub Copilot
  // -----------------------------------------------------------------------
  {
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description:
      'GitHub\'s AI pair programmer that provides real-time code suggestions, chat-based assistance, and now workspace-level agent capabilities. Copilot integrates directly into VS Code, JetBrains, and other editors with autocomplete, inline chat, and Copilot Workspace for issue-to-PR automation. Backed by OpenAI Codex and GPT models.',
    shortDescription:
      'GitHub\'s AI pair programmer with autocomplete, chat, and workspace agent capabilities.',
    category: 'coding',
    icon: 'git-branch',
    rating: 4.3,
    pricing: 'freemium',
    pricingDetails: 'Free for verified students/OSS. Individual $10/mo. Business $19/user/mo. Enterprise $39/user/mo.',
    pros: [
      'Deep GitHub ecosystem integration (PRs, Issues, Actions)',
      'Works across VS Code, JetBrains, Neovim, and more',
      'Copilot Workspace turns issues into pull requests',
      'Strong autocomplete for repetitive patterns',
      'Free for open-source contributors and students',
    ],
    cons: [
      'Autocomplete quality varies by language/framework',
      'Less context-aware than Cursor for large codebases',
      'Chat interface is less powerful than dedicated AI assistants',
      'Can suggest deprecated or insecure patterns',
    ],
    useCases: [
      'Day-to-day coding with intelligent autocomplete',
      'Generating boilerplate and repetitive code',
      'Understanding unfamiliar codebases via chat',
      'Automating issue-to-PR workflow with Workspace',
      'Code documentation and test generation',
    ],
    alternatives: ['cursor', 'bolt', 'v0'],

    websiteUrl: 'https://github.com/features/copilot',
    tags: ['coding', 'AI', 'GitHub', 'autocomplete', 'developer-tools'],
    featured: false,
  },
];
