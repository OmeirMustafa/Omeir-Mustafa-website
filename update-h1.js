const fs = require('fs');
const path = require('path');

const pages = [
  'app/tools/page.tsx',
  'app/workflows/page.tsx',
  'app/content/page.tsx',
  'app/resources/page.tsx',
  'app/projects/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx'
];

for (const p of pages) {
  const filePath = path.join(__dirname, p);
  if (!fs.existsSync(filePath)) {
    // If it doesn't exist, it might be in a section file
    console.log('Skipping', p, 'not found');
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = content.replace(/<Section heading="/, '<Section h1 heading="');
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', p);
  }
}

// For about and contact, they might be in components/sections
const sections = [
  'components/sections/about-section.tsx',
  'components/sections/contact-cta-section.tsx' // Wait, contact page uses contact-cta-section or does it use something else? Let's try.
];
for (const s of sections) {
    const filePath = path.join(__dirname, s);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const original = content;
        content = content.replace(/<Section id="[^"]+" className="[^"]+">/, '<Section h1 id="about" className="bg-background relative overflow-hidden py-24 md:py-32">');
        // Actually, about-section has a Section without heading prop, it has its own h2 inside.
    }
}
