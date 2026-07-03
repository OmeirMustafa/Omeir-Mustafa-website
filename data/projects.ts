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
      'Delivered a high-performance vector search architecture capable of sub-second semantic retrieval across enterprise document stores.',
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
      'Architected an event-driven system to guarantee exactly-once state execution and reliable handovers for multi-agent workflows.',
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
      'Engineered a resilient event-driven pipeline designed for ACID transactional consistency and high-throughput data processing.',
    context:
      'Legacy transactional architecture failed during peak events, causing database lag and event losses.',
    constraints: [
      'Handling 50k+ events per second',
      'ACID transactional consistency',
      'Zero-downtime cluster migrations',
    ],
  },
];
