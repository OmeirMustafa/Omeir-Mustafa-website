import { getAllTools, getAllWorkflows, getAllResources } from "@/lib/content";
import { siteConfig } from "@/data/site-config";
import { NextResponse } from "next/server";

export async function GET() {
    const tools = getAllTools().map(t => ({ title: t.name, url: `/tools/${t.slug}`, description: t.shortDescription }));
    const workflows = getAllWorkflows().map(w => ({ title: w.name, url: `/workflows/${w.slug}`, description: w.shortDescription }));
    const resources = getAllResources().map(r => ({ title: r.name, url: `/resources/${r.slug}`, description: r.shortDescription }));
    
    const allContent = [...tools, ...workflows, ...resources];

    const feedXml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.title}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}feed.xml" rel="self" type="application/rss+xml"/>
    ${allContent.map((item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${siteConfig.url}${item.url.replace(/^\//, '')}</link>
      <guid isPermaLink="true">${siteConfig.url}${item.url.replace(/^\//, '')}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`).join('')}
  </channel>
</rss>`;

    return new NextResponse(feedXml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "s-maxage=86400, stale-while-revalidate",
        },
    });
}
