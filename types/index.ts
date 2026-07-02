// =============================================================================
// Omeir Mustafa — AI Creator Platform
// Core Type Definitions
// =============================================================================

// ---------------------------------------------------------------------------
// Enums / Union Types
// ---------------------------------------------------------------------------

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type ContentType = 'reel' | 'carousel' | 'youtube' | 'blog';

export type ResourceType =
  | 'prompt-pack'
  | 'template'
  | 'guide'
  | 'automation'
  | 'notion-system';

export type PricingType = 'free' | 'freemium' | 'paid' | 'enterprise';

export type ToolCategory =
  | 'ai-assistant'
  | 'coding'
  | 'automation'
  | 'design'
  | 'productivity'
  | 'llm'
  | 'agent-framework';

// ---------------------------------------------------------------------------
// Tag
// ---------------------------------------------------------------------------

export interface Tag {
  name: string;
  slug: string;
}

// ---------------------------------------------------------------------------
// AI Tool
// ---------------------------------------------------------------------------

export interface AITool {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ToolCategory;
  icon: string; // lucide-react icon name
  rating: number; // 1–5
  pricing: PricingType;
  pricingDetails?: string;
  pros: string[];
  cons: string[];
  useCases: string[];
  alternatives: string[]; // slugs of other AITool entries
  affiliateUrl?: string;
  websiteUrl: string;
  tags: string[];
  featured: boolean;
  tutorialUrl?: string;
  relatedContent?: string[]; // content slugs
  relatedWorkflows?: string[]; // workflow slugs
}

// ---------------------------------------------------------------------------
// Workflow
// ---------------------------------------------------------------------------

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface Workflow {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  tools: string[]; // tool slugs
  timeSaved: string; // e.g. "2 hours/week"
  difficulty: Difficulty;
  steps: WorkflowStep[];
  prompt?: string;
  downloadUrl?: string;
  videoUrl?: string;
  tags: string[];
  featured: boolean;
  estimatedTime: string; // e.g. "15 min setup"
}

// ---------------------------------------------------------------------------
// Resource
// ---------------------------------------------------------------------------

export interface Resource {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  type: ResourceType;
  pricing: 'free' | 'paid';
  price?: string;
  downloadUrl?: string;
  tags: string[];
  featured: boolean;
  icon: string; // lucide-react icon name
}

// ---------------------------------------------------------------------------
// Content Item
// ---------------------------------------------------------------------------

export interface ContentItem {
  title: string;
  slug: string;
  type: ContentType;
  platform: string;
  embedUrl?: string;
  externalUrl: string;
  thumbnail?: string;
  date: string; // ISO 8601 date string
  tags: string[];
  featured: boolean;
  description?: string;
}

// ---------------------------------------------------------------------------
// Project (evolved from Case Study)
// ---------------------------------------------------------------------------

export interface Project {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  impact?: string;
  context?: string;
  constraints?: string[];
}

// ---------------------------------------------------------------------------
// Site Config
// ---------------------------------------------------------------------------

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  keywords: string[];
  socials: SocialLink[];
  navigation: NavItem[];
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'tool' | 'workflow' | 'resource' | 'content' | 'page';
}
