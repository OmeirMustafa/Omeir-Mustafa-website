import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';
import { getAllTools, getAllWorkflows, getAllResources, getAllContent } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const tools = getAllTools().map((tool) => ({
        url: `${baseUrl}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const workflows = getAllWorkflows().map((workflow) => ({
        url: `${baseUrl}/workflows/${workflow.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));
    


    const routes = [
        '',
        '/content',
        '/tools',
        '/workflows',
        '/resources',
        '/newsletter',
        '/projects',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    return [...routes, ...tools, ...workflows];
}
