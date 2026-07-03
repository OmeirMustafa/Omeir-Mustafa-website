import type { Resource } from '@/types';

export const resources: Resource[] = [
  // -----------------------------------------------------------------------
  // 1. Ultimate AI Prompt Engineering Guide
  // -----------------------------------------------------------------------
  {
    name: 'Ultimate AI Prompt Engineering Guide',
    slug: 'ultimate-ai-prompt-engineering-guide',
    description:
      'A comprehensive 40+ page guide covering prompt engineering fundamentals, advanced techniques, and real-world examples for Claude, ChatGPT, and Gemini. Includes chain-of-thought prompting, few-shot learning, system prompt design, structured output formatting, and prompt templates for coding, writing, analysis, and automation tasks.',
    shortDescription:
      'Master prompt engineering with 40+ pages of techniques, templates, and real-world examples.',
    type: 'guide',
    pricing: 'free',

    tags: ['prompts', 'AI', 'Claude', 'ChatGPT', 'guide', 'free'],
    featured: true,
    icon: 'book-open',
  },

  // -----------------------------------------------------------------------
  // 2. n8n Automation Starter Templates
  // -----------------------------------------------------------------------
  {
    name: 'n8n Automation Starter Templates',
    slug: 'n8n-automation-starter-templates',
    description:
      'A collection of 15 ready-to-import n8n workflow templates covering the most common automation use cases: lead capture to CRM, social media scheduling, email sequences, Slack notifications, webhook integrations, AI-powered data processing, and more. Each template includes setup instructions and customization notes.',
    shortDescription:
      '15 ready-to-import n8n workflow templates for common automation use cases.',
    type: 'automation',
    pricing: 'free',

    tags: ['n8n', 'automation', 'templates', 'workflows', 'free'],
    featured: true,
    icon: 'workflow',
  },

  // -----------------------------------------------------------------------
  // 3. AI Workflow Notion Dashboard
  // -----------------------------------------------------------------------
  {
    name: 'AI Workflow Notion Dashboard',
    slug: 'ai-workflow-notion-dashboard',
    description:
      'A comprehensive Notion system for managing your AI workflows, tools, and automation projects. Includes databases for tracking AI tools (with ratings and notes), workflow documentation templates, prompt libraries with version history, project trackers with Kanban and timeline views, and a weekly AI learning journal. Designed for creators who want a single command center for their AI stack.',
    shortDescription:
      'All-in-one Notion system for managing AI tools, workflows, prompts, and projects.',
    type: 'notion-system',
    pricing: 'paid',
    price: '$19',

    tags: ['Notion', 'productivity', 'AI', 'dashboard', 'organization', 'paid'],
    featured: true,
    icon: 'layout-dashboard',
  },

  // -----------------------------------------------------------------------
  // 4. Claude Prompt Pack for Developers
  // -----------------------------------------------------------------------
  {
    name: 'Claude Prompt Pack for Developers',
    slug: 'claude-prompt-pack-developers',
    description:
      'A curated collection of 50+ battle-tested prompts specifically designed for software developers using Claude. Organized into categories: code review and refactoring, architecture design, debugging assistance, test generation, documentation writing, API design, database query optimization, and DevOps/CI-CD. Each prompt includes usage notes, variable placeholders, and expected output examples.',
    shortDescription:
      '50+ developer-focused Claude prompts for code review, architecture, testing, and more.',
    type: 'prompt-pack',
    pricing: 'paid',
    price: '$9',

    tags: ['Claude', 'prompts', 'coding', 'developer-tools', 'paid'],
    featured: false,
    icon: 'terminal',
  },

  // -----------------------------------------------------------------------
  // 5. ChatGPT Business Automation Playbook
  // -----------------------------------------------------------------------
  {
    name: 'ChatGPT Business Automation Playbook',
    slug: 'chatgpt-business-automation-playbook',
    description:
      'A practical playbook for non-technical business owners and solopreneurs who want to use ChatGPT to automate repetitive business tasks. Covers email drafting, customer support response templates, social media content calendars, meeting summary generation, proposal writing, and invoice follow-ups. Includes step-by-step instructions with screenshots and prompt templates for each use case.',
    shortDescription:
      'Practical ChatGPT playbook for automating everyday business tasks — no coding required.',
    type: 'guide',
    pricing: 'free',

    tags: ['ChatGPT', 'business', 'automation', 'guide', 'no-code', 'free'],
    featured: false,
    icon: 'briefcase',
  },
];
