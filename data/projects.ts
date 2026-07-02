import type { Project } from '@/types';

export const projects: Project[] = [
  // -----------------------------------------------------------------------
  // OmniSearch AI
  // -----------------------------------------------------------------------
  {
    name: 'OmniSearch AI',
    slug: 'omnisearch-ai',
    description:
      'A high-performance semantic search and RAG engine that parses millions of multi-format enterprise documents in real-time.',
    shortDescription:
      'Semantic search and RAG engine for enterprise-scale document retrieval.',
    category: 'AI Infrastructure',
    technologies: ['Next.js', 'FastAPI', 'pgvector', 'OpenAI API', 'Redis', 'AWS'],
    featured: true,
    impact:
      'Reduced internal support document search latency by 82% and increased agent operational efficiency by 3x.',
    context:
      'Enterprise clients had multi-terabyte unindexed knowledge bases with zero semantic correlation.',
    constraints: [
      'Sub-100ms vector retrieval',
      'Strict GDPR isolation logic',
      'Dynamic context chunking',
    ],
  },

  // -----------------------------------------------------------------------
  // Synapse Orchestrator
  // -----------------------------------------------------------------------
  {
    name: 'Synapse Orchestrator',
    slug: 'synapse-orchestrator',
    description:
      'A low-latency developer platform for modeling, deploying, and tracking autonomous multi-agent state machines.',
    shortDescription:
      'Developer platform for deploying and tracking autonomous multi-agent systems.',
    category: 'Intelligent Systems',
    technologies: ['React', 'Node.js', 'TypeScript', 'WebSockets', 'Docker', 'Prisma'],
    featured: true,
    impact:
      'Facilitated over 14M+ agent execution states with 99.99% system uptime since deployment.',
    context:
      'Development teams lacked tooling to coordinate complex async LLM chains with persistent state.',
    constraints: [
      'Exactly-once state execution',
      'Visual node-routing interface',
      'Sub-second agent handovers',
    ],
  },

  // -----------------------------------------------------------------------
  // Aether Core
  // -----------------------------------------------------------------------
  {
    name: 'Aether Core',
    slug: 'aether-core',
    description:
      'An event-driven data streaming pipeline designed to ingest, clean, and write high-throughput financial transactions.',
    shortDescription:
      'Event-driven streaming pipeline for high-throughput financial transaction processing.',
    category: 'Systems Engineering',
    technologies: ['Next.js', 'Go', 'Apache Kafka', 'AWS Suite', 'Docker', 'GraphQL'],
    featured: true,
    impact:
      'Ingested 1.2B+ events with zero transactional losses, reducing infrastructure server costs by 42%.',
    context:
      'Legacy transactional architecture failed during peak events, causing database lag and event losses.',
    constraints: [
      'Handling 50k+ events per second',
      'ACID transactional consistency',
      'Zero-downtime cluster migrations',
    ],
  },
];
