import type { ContentItem } from '@/types';

export const contentItems: ContentItem[] = [
  // -----------------------------------------------------------------------
  // REELS (Instagram)
  // -----------------------------------------------------------------------
  {
    title: 'Claude vs ChatGPT: Which Writes Better Code?',
    slug: 'claude-vs-chatgpt-code-comparison',
    type: 'reel',
    platform: 'Instagram',
    externalUrl: '#',
    thumbnail: '/images/content/claude-vs-chatgpt-reel.jpg',
    date: '2026-06-28',
    tags: ['Claude', 'ChatGPT', 'coding', 'comparison', 'AI'],
    featured: true,
    description:
      'A side-by-side comparison of Claude and ChatGPT generating a React component from the same prompt. See which AI writes cleaner, more production-ready code.',
  },
  {
    title: '3 n8n Automations You Need Right Now',
    slug: 'three-n8n-automations-you-need',
    type: 'reel',
    platform: 'Instagram',
    externalUrl: '#',
    thumbnail: '/images/content/n8n-automations-reel.jpg',
    date: '2026-06-20',
    tags: ['n8n', 'automation', 'productivity', 'workflows'],
    featured: false,
    description:
      'Quick walkthrough of three game-changing n8n automations: auto-respond to leads, repurpose content, and sync your CRM — all in under 60 seconds.',
  },

  // -----------------------------------------------------------------------
  // CAROUSELS (Instagram)
  // -----------------------------------------------------------------------
  {
    title: '10 Claude Prompts That 10x Your Productivity',
    slug: '10-claude-prompts-productivity',
    type: 'carousel',
    platform: 'Instagram',
    externalUrl: '#',
    thumbnail: '/images/content/claude-prompts-carousel.jpg',
    date: '2026-06-25',
    tags: ['Claude', 'prompts', 'productivity', 'tips'],
    featured: true,
    description:
      'A 10-slide carousel breaking down the exact Claude prompts I use daily for writing, coding, research, and content creation. Save this one.',
  },
  {
    title: 'How I Built My AI Workflow Stack in 2026',
    slug: 'ai-workflow-stack-2026',
    type: 'carousel',
    platform: 'Instagram',
    externalUrl: '#',
    thumbnail: '/images/content/ai-stack-carousel.jpg',
    date: '2026-06-15',
    tags: ['AI', 'workflows', 'tools', 'stack', 'productivity'],
    featured: false,
    description:
      'The complete breakdown of every AI tool in my workflow: from ideation (Claude) to coding (Cursor) to automation (n8n) to publishing. 8 slides of pure utility.',
  },

  // -----------------------------------------------------------------------
  // YOUTUBE VIDEOS
  // -----------------------------------------------------------------------
  {
    title: 'Build an AI Agent with Claude MCP — Full Tutorial',
    slug: 'build-ai-agent-claude-mcp-tutorial',
    type: 'youtube',
    platform: 'YouTube',
    embedUrl: '#',
    externalUrl: '#',
    thumbnail: '/images/content/mcp-agent-tutorial-thumb.jpg',
    date: '2026-06-22',
    tags: ['Claude', 'MCP', 'agents', 'tutorial', 'TypeScript', 'AI'],
    featured: true,
    description:
      'A complete step-by-step tutorial on building an autonomous AI research agent using Claude\'s Model Context Protocol (MCP). We set up MCP servers, define tools, build the agent loop, and test it with real research queries. Code included.',
  },
  {
    title: 'n8n + AI: Automate Your Entire Content Pipeline',
    slug: 'n8n-ai-automate-content-pipeline',
    type: 'youtube',
    platform: 'YouTube',
    embedUrl: '#',
    externalUrl: '#',
    thumbnail: '/images/content/n8n-content-pipeline-thumb.jpg',
    date: '2026-06-10',
    tags: ['n8n', 'automation', 'content', 'AI', 'tutorial', 'workflows'],
    featured: false,
    description:
      'Deep dive into building an AI-powered content repurposing pipeline with n8n. Take a single YouTube video and automatically generate social media posts, newsletter content, and blog drafts.',
  },

  // -----------------------------------------------------------------------
  // BLOG POSTS
  // -----------------------------------------------------------------------
  {
    title: 'Why Claude MCP Changes Everything About AI Agents',
    slug: 'claude-mcp-changes-ai-agents',
    type: 'blog',
    platform: 'Blog',
    externalUrl: 'https://omeirmustafa.com/blog/claude-mcp-changes-ai-agents',
    date: '2026-06-18',
    tags: ['Claude', 'MCP', 'agents', 'opinion', 'AI', 'future'],
    featured: true,
    description:
      'Model Context Protocol (MCP) is Claude\'s secret weapon. In this post, I break down how MCP works, why it matters for the future of AI agents, and how it compares to OpenAI\'s function calling and Google\'s tool use. Plus, real-world examples of what you can build today.',
  },
  {
    title: 'The 2026 AI Creator Tech Stack: What I Actually Use',
    slug: '2026-ai-creator-tech-stack',
    type: 'blog',
    platform: 'Blog',
    externalUrl: 'https://omeirmustafa.com/blog/2026-ai-creator-tech-stack',
    date: '2026-06-05',
    tags: ['AI', 'tools', 'stack', 'review', 'productivity', 'creator'],
    featured: false,
    description:
      'An honest breakdown of every tool in my AI creator workflow — what I use, what I\'ve dropped, and what surprised me. Covering Claude, Cursor, n8n, v0, Perplexity, and more with actual costs and real opinions.',
  },
];
