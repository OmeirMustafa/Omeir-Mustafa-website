import type { Workflow } from '@/types';

export const workflows: Workflow[] = [
  // -----------------------------------------------------------------------
  // 1. Automate Client Onboarding with n8n + Claude
  // -----------------------------------------------------------------------
  {
    name: 'Automate Client Onboarding with n8n + Claude',
    slug: 'automate-client-onboarding-n8n-claude',
    description:
      'A complete client onboarding automation that triggers when a new client submits a form. n8n orchestrates the entire flow: Claude generates a personalized welcome email, creates a custom project brief from form responses, provisions a Notion workspace from a template, sends Slack notifications to the team, and schedules a kick-off calendar invite — all without manual intervention.',
    shortDescription:
      'Automate the entire client onboarding flow from form submission to project kickoff using n8n and Claude.',
    tools: ['n8n', 'claude'],
    timeSaved: '5 hours/week',
    difficulty: 'intermediate',
    steps: [
      {
        title: 'Set up the intake trigger',
        description:
          'Configure an n8n webhook or form trigger node to capture new client submissions from Typeform, Tally, or a custom form. Map all field data to workflow variables.',
      },
      {
        title: 'Generate personalized content with Claude',
        description:
          'Pass the client\'s form data to a Claude API node. Use a structured prompt to generate a personalized welcome email and a project brief document tailored to the client\'s industry and requirements.',
      },
      {
        title: 'Provision workspace and assets',
        description:
          'Use n8n\'s Notion node to duplicate a project template, populating it with the client name, brief, timeline, and deliverables. Create a shared Google Drive folder and upload the generated brief.',
      },
      {
        title: 'Notify the team and schedule kickoff',
        description:
          'Send a Slack message to the relevant channel with the client summary and workspace links. Use the Google Calendar node to create a kick-off meeting invite with both the client and team.',
      },
      {
        title: 'Send the welcome email',
        description:
          'Route the Claude-generated welcome email through your email provider (Gmail/SendGrid node) with the client\'s personalized onboarding packet and next-steps timeline.',
      },
    ],
    prompt:
      'You are an expert client success manager. Given the following client intake data: {{formData}}, generate: 1) A warm, professional welcome email (3 paragraphs max), 2) A structured project brief with sections for Objectives, Scope, Timeline, and Deliverables. Use a confident but approachable tone.',

    videoUrl: 'https://youtube.com/@omeirmustafa',
    tags: ['automation', 'n8n', 'Claude', 'onboarding', 'client-management', 'AI'],
    featured: true,
    estimatedTime: '30 min setup',
  },

  // -----------------------------------------------------------------------
  // 2. AI-Powered Content Repurposing Pipeline
  // -----------------------------------------------------------------------
  {
    name: 'AI-Powered Content Repurposing Pipeline',
    slug: 'ai-content-repurposing-pipeline',
    description:
      'Transform a single long-form piece of content (YouTube video, blog post, or podcast) into multiple platform-optimized formats automatically. This workflow uses AI to extract key points, generate social media posts for Twitter/LinkedIn/Instagram, create email newsletter sections, and produce a carousel script — maximizing content reach with minimal effort.',
    shortDescription:
      'Turn one piece of content into 10+ platform-optimized posts using AI-powered repurposing.',
    tools: ['chatgpt', 'n8n'],
    timeSaved: '3 hours/week',
    difficulty: 'beginner',
    steps: [
      {
        title: 'Capture the source content',
        description:
          'Set up an n8n trigger that activates when a new YouTube video is published (via RSS) or a blog post is created (via webhook). Extract the transcript or full text as the source material.',
      },
      {
        title: 'Extract key themes and quotes',
        description:
          'Send the source content to ChatGPT with a prompt that extracts the top 5 key points, 3 quotable moments, and the core thesis. This becomes the raw material for all derivative content.',
      },
      {
        title: 'Generate platform-specific content',
        description:
          'Use separate ChatGPT calls with platform-specific prompts to generate: a Twitter/X thread (5-8 tweets), a LinkedIn post (professional tone), an Instagram carousel script (8-10 slides), and an email newsletter summary.',
      },
      {
        title: 'Queue and distribute',
        description:
          'Route each generated piece to the appropriate publishing tool: Buffer/Typefully for social media scheduling, ConvertKit/Beehiiv for the newsletter draft, and Notion for the content calendar archive.',
      },
    ],
    prompt:
      'Analyze the following content and extract: 1) The core thesis in one sentence, 2) Top 5 key insights (one sentence each), 3) Three quotable moments suitable for social media, 4) A suggested hook for each platform (Twitter, LinkedIn, Instagram). Content: {{sourceContent}}',
    videoUrl: 'https://youtube.com/@omeirmustafa',
    tags: ['content', 'repurposing', 'social-media', 'automation', 'ChatGPT', 'productivity'],
    featured: true,
    estimatedTime: '20 min setup',
  },

  // -----------------------------------------------------------------------
  // 3. Build an AI Research Agent with Claude + MCP
  // -----------------------------------------------------------------------
  {
    name: 'Build an AI Research Agent with Claude + MCP',
    slug: 'ai-research-agent-claude-mcp',
    description:
      'Build a sophisticated AI research agent that uses Claude\'s Model Context Protocol (MCP) to autonomously browse the web, read documents, query databases, and synthesize findings into structured research reports. This agent can handle complex, multi-step research tasks like competitive analysis, market research, and technical due diligence — tasks that would take a human analyst hours.',
    shortDescription:
      'Build an autonomous research agent using Claude MCP that browses, analyzes, and synthesizes information.',
    tools: ['claude', 'cursor'],
    timeSaved: '8 hours/week',
    difficulty: 'advanced',
    steps: [
      {
        title: 'Set up the MCP server environment',
        description:
          'Initialize a TypeScript project with the MCP SDK. Configure MCP servers for web browsing (Puppeteer/Playwright), file system access, and any database connections you need. Define the tool schemas that Claude will use.',
      },
      {
        title: 'Define the research agent\'s tool set',
        description:
          'Create MCP tool definitions for: web_search (query the web), read_page (extract content from URLs), save_finding (store intermediate results), and generate_report (compile final output). Each tool has typed input/output schemas.',
      },
      {
        title: 'Build the orchestration logic',
        description:
          'Write the agent loop that sends a research query to Claude, processes tool-use responses, feeds results back, and continues until Claude determines the research is complete. Implement depth limits and cost guards.',
      },
      {
        title: 'Add structured output and reporting',
        description:
          'Configure Claude to output findings in a structured JSON format with sections, sources, confidence levels, and key takeaways. Build a simple UI or markdown renderer to display the final research report.',
      },
      {
        title: 'Test and iterate with real queries',
        description:
          'Run the agent against real research tasks — competitor analysis, technology evaluation, or trend research. Refine prompts, adjust tool definitions, and add error handling based on real-world results.',
      },
    ],
    prompt:
      'You are an expert research analyst. Your goal is to thoroughly research: {{researchQuery}}. Use the available tools to search the web, read relevant pages, and gather data. For each finding, note the source URL and your confidence level (high/medium/low). When you have sufficient information, compile a structured report with: Executive Summary, Key Findings (with sources), Analysis, and Recommendations.',

    videoUrl: 'https://youtube.com/@omeirmustafa',
    tags: ['agents', 'MCP', 'Claude', 'research', 'autonomous', 'advanced', 'TypeScript'],
    featured: true,
    estimatedTime: '2-3 hours setup',
  },

  // -----------------------------------------------------------------------
  // 4. Automated Email Newsletter with AI
  // -----------------------------------------------------------------------
  {
    name: 'Automated Email Newsletter with AI',
    slug: 'automated-email-newsletter-ai',
    description:
      'An automated newsletter pipeline that curates top AI and tech news, generates summaries with editorial commentary, and delivers a polished weekly newsletter — on autopilot. The workflow scrapes RSS feeds and curated sources, uses AI to summarize and editorialize, formats the content into a newsletter template, and sends it through your email platform.',
    shortDescription:
      'Curate, summarize, and send a weekly AI newsletter automatically with zero manual writing.',
    tools: ['n8n', 'chatgpt'],
    timeSaved: '2 hours/week',
    difficulty: 'beginner',
    steps: [
      {
        title: 'Set up content sources',
        description:
          'Configure n8n RSS feed nodes to pull from curated AI news sources (TechCrunch AI, The Batch, Hacker News AI, etc.). Set a weekly CRON trigger to fire every Friday at 9 AM.',
      },
      {
        title: 'Filter and rank articles',
        description:
          'Use an n8n function node to deduplicate, filter by relevance keywords, and rank articles by recency and source authority. Limit to the top 5-7 most relevant stories.',
      },
      {
        title: 'Generate summaries and commentary',
        description:
          'Pass each selected article to ChatGPT with a prompt that generates a 2-3 sentence summary and a brief editorial take. Add a witty intro paragraph that ties the week\'s themes together.',
      },
      {
        title: 'Format and send the newsletter',
        description:
          'Compile the AI-generated content into your email template using n8n\'s HTML node. Send the formatted newsletter through ConvertKit, Beehiiv, or Mailchimp API. Archive the edition in Notion.',
      },
    ],
    prompt:
      'You are a witty AI newsletter editor writing for tech-savvy creators. Summarize this article in 2-3 sentences, then add a one-sentence editorial take with your perspective on why it matters. Keep the tone sharp, insightful, and slightly opinionated. Article: {{articleContent}}',
    videoUrl: 'https://youtube.com/@omeirmustafa',
    tags: ['newsletter', 'automation', 'n8n', 'ChatGPT', 'email', 'content-curation'],
    featured: false,
    estimatedTime: '25 min setup',
  },
];
