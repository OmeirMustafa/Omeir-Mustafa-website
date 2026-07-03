const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];
const fileExtensions = ['.tsx', '.ts', '.css'];

const replacements = [
    { regex: /\bbg-black\b/g, replacement: 'bg-background' },
    { regex: /\bbg-zinc-950\b/g, replacement: 'bg-muted' },
    { regex: /\bbg-zinc-950\/20\b/g, replacement: 'bg-card' },
    { regex: /\bbg-zinc-950\/30\b/g, replacement: 'bg-card' },
    { regex: /\bbg-zinc-950\/40\b/g, replacement: 'bg-card' },
    { regex: /\bbg-zinc-950\/45\b/g, replacement: 'bg-card' },
    { regex: /\bbg-zinc-950\/50\b/g, replacement: 'bg-card' },
    { regex: /\bborder-white\/5\b/g, replacement: 'border-border' },
    { regex: /\bborder-white\/10\b/g, replacement: 'border-border-hover' },
    { regex: /\btext-zinc-400\b/g, replacement: 'text-foreground-muted' },
    { regex: /\btext-zinc-500\b/g, replacement: 'text-muted-foreground' },
];

function processFile(filePath) {
    if (!fileExtensions.includes(path.extname(filePath))) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

directories.forEach(dir => {
    processDirectory(path.join(__dirname, dir));
});
