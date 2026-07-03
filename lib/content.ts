import type { AITool, Workflow, Resource, ContentItem, Project, SearchResult } from '@/types';
import { tools } from '@/data/tools';
import { workflows } from '@/data/workflows';
import { resources } from '@/data/resources';
import { contentItems } from '@/data/content';
import { projects } from '@/data/projects';

// =============================================================================
// Tools
// =============================================================================

export function getAllTools(): AITool[] {
  return tools;
}

export function getToolBySlug(slug: string): AITool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getFeaturedTools(): AITool[] {
  return tools.filter((t) => t.featured);
}

export function getToolsByCategory(category: string): AITool[] {
  return tools.filter((t) => t.category === category);
}

// =============================================================================
// Workflows
// =============================================================================

export function getAllWorkflows(): Workflow[] {
  return workflows;
}

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

export function getFeaturedWorkflows(): Workflow[] {
  return workflows.filter((w) => w.featured);
}

// =============================================================================
// Resources
// =============================================================================

export function getAllResources(): Resource[] {
  return resources;
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured);
}

// =============================================================================
// Content
// =============================================================================

export function getAllContent(): ContentItem[] {
  return contentItems;
}

export function getFeaturedContent(): ContentItem[] {
  return contentItems.filter((c) => c.featured);
}

export function getContentByType(type: string): ContentItem[] {
  return contentItems.filter((c) => c.type === type);
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return contentItems.find((c) => c.slug === slug);
}

// =============================================================================
// Projects
// =============================================================================

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// =============================================================================
// Search — fuzzy search across all content types
// =============================================================================

/**
 * Performs a case-insensitive search across all content types.
 * Matches against names/titles, descriptions, and tags.
 * Returns a unified array of SearchResult objects.
 */
export function searchAll(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  // Helper: check if any string in the list includes the query
  const matches = (...fields: (string | undefined)[]): boolean =>
    fields.some((f) => f?.toLowerCase().includes(q));

  const tagMatch = (tags: string[]): boolean =>
    tags.some((tag) => tag.toLowerCase().includes(q));

  // Search tools
  for (const tool of tools) {
    if (matches(tool.name, tool.description, tool.shortDescription) || tagMatch(tool.tags)) {
      results.push({
        title: tool.name,
        description: tool.shortDescription,
        url: `/tools/${tool.slug}`,
        type: 'tool',
      });
    }
  }

  // Search workflows
  for (const workflow of workflows) {
    if (
      matches(workflow.name, workflow.description, workflow.shortDescription) ||
      tagMatch(workflow.tags)
    ) {
      results.push({
        title: workflow.name,
        description: workflow.shortDescription,
        url: `/workflows/${workflow.slug}`,
        type: 'workflow',
      });
    }
  }

  // Search resources
  for (const resource of resources) {
    if (
      matches(resource.name, resource.description, resource.shortDescription) ||
      tagMatch(resource.tags)
    ) {
      results.push({
        title: resource.name,
        description: resource.shortDescription,
        url: `/resources/${resource.slug}`,
        type: 'resource',
      });
    }
  }

  // Search content
  for (const item of contentItems) {
    if (matches(item.title, item.description) || tagMatch(item.tags)) {
      results.push({
        title: item.title,
        description: item.description ?? '',
        url: item.externalUrl,
        type: 'content',
      });
    }
  }

  // Search projects (map to 'page' type since they're standalone pages)
  for (const project of projects) {
    if (
      matches(project.name, project.description, project.shortDescription) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(q))
    ) {
      results.push({
        title: project.name,
        description: project.shortDescription,
        url: `/projects/${project.slug}`,
        type: 'page',
      });
    }
  }

  return results;
}

// =============================================================================
// Related content helpers
// =============================================================================

/**
 * Returns tools matching the given slugs, preserving order.
 */
export function getRelatedTools(slugs: string[]): AITool[] {
  return slugs
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is AITool => t !== undefined);
}

/**
 * Returns workflows matching the given slugs, preserving order.
 */
export function getRelatedWorkflows(slugs: string[]): Workflow[] {
  return slugs
    .map((slug) => workflows.find((w) => w.slug === slug))
    .filter((w): w is Workflow => w !== undefined);
}

// =============================================================================
// Tags — aggregated and deduplicated across all content types
// =============================================================================

/**
 * Collects every tag from tools, workflows, resources, and content items,
 * deduplicates them (case-insensitive, preserving first-seen casing),
 * and returns a sorted array.
 */
export function getAllTags(): string[] {
  const seen = new Map<string, string>(); // lowercase → original casing

  const collect = (tags: string[]) => {
    for (const tag of tags) {
      const key = tag.toLowerCase();
      if (!seen.has(key)) {
        seen.set(key, tag);
      }
    }
  };

  tools.forEach((t) => collect(t.tags));
  workflows.forEach((w) => collect(w.tags));
  resources.forEach((r) => collect(r.tags));
  contentItems.forEach((c) => collect(c.tags));

  return Array.from(seen.values()).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
}
