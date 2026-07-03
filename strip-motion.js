const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'components/sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip hero-section as it uses complex staggered animations
    if (file === 'hero-section.tsx') continue;
    
    let original = content;
    
    // Remove "use client";
    content = content.replace(/"use client";\r?\n+/, '');
    
    // Remove motion imports
    content = content.replace(/import \{.*?motion.*?\} from "framer-motion";\r?\n/, '');
    
    // Replace <motion.div> with <div>
    content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
    content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');
    
    // Remove framer-motion specific props (assuming they are formatted on their own lines)
    const lines = content.split('\n');
    const newLines = lines.filter(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('initial=') || 
            trimmed.startsWith('whileInView=') || 
            trimmed.startsWith('viewport=') || 
            trimmed.startsWith('transition=') ||
            trimmed.startsWith('animate=')) {
            return false;
        }
        return true;
    });
    
    content = newLines.join('\n');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Stripped', file);
    }
}
