const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/MA20465211/Downloads/Portfolios/mani-miriyala/src';
const targetDir = '/Users/MA20465211/Downloads/Portfolios/mani-miriyala-1/src';

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  });
}

// Function to copy and convert files
function copyFile(src, dest) {
  let content = fs.readFileSync(src, 'utf8');
  
  // If it's a JSX file, convert SCSS imports to CSS
  if (path.extname(src) === '.jsx') {
    content = content.replace(/import\s+['"](.+)\.scss['"];?/g, "import '$1.css';");
    content = content.replace(/from\s+['"](.+)\.scss['"];?/g, "from '$1.css';");
  }
  
  // If it's an SCSS file, rename to CSS and convert basic SCSS syntax
  if (path.extname(src) === '.scss') {
    dest = dest.replace('.scss', '.css');
    content = convertScssToBasicCss(content);
  }
  
  fs.writeFileSync(dest, content);
}

// Basic SCSS to CSS conversion
function convertScssToBasicCss(content) {
  // Remove variables and mixins (basic conversion)
  content = content.replace(/\$[^:]+:\s*[^;]+;/g, ''); // Remove variable declarations
  content = content.replace(/@mixin[^{]+\{[^}]*\}/gs, ''); // Remove mixin declarations
  content = content.replace(/@include\s+[^;]+;/g, ''); // Remove mixin includes
  
  // Convert nested selectors to flat CSS (basic approach)
  content = convertNestedSelectors(content);
  
  // Convert media query mixins to regular media queries
  content = content.replace(/@include\s+mediumDevice\s*\{([^}]+)\}/g, '@media (max-width: 768px) {$1}');
  content = content.replace(/@include\s+smallDevice\s*\{([^}]+)\}/g, '@media (max-width: 480px) {$1}');
  content = content.replace(/@include\s+smallerDevice\s*\{([^}]+)\}/g, '@media (max-width: 600px) {$1}');
  content = content.replace(/@include\s+smallestDevice\s*\{([^}]+)\}/g, '@media (max-width: 320px) {$1}');
  
  return content;
}

// Basic nested selector conversion
function convertNestedSelectors(css) {
  // This is a simplified conversion - you might need to handle more complex cases
  const lines = css.split('\n');
  let result = [];
  let currentSelector = '';
  let depth = 0;
  
  for (let line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.includes('{')) {
      const selector = trimmed.replace('{', '').trim();
      if (selector) {
        if (depth === 0) {
          currentSelector = selector;
        } else {
          currentSelector += ' ' + selector;
        }
        result.push(currentSelector + ' {');
        depth++;
      }
    } else if (trimmed === '}') {
      result.push('}');
      depth--;
      if (depth === 0) {
        currentSelector = '';
      } else {
        // Go back to parent selector
        const parts = currentSelector.split(' ');
        currentSelector = parts.slice(0, depth).join(' ');
      }
    } else if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('@')) {
      result.push('  ' + trimmed);
    }
  }
  
  return result.join('\n');
}

// Skip files that already exist in target
const skipFiles = ['main.jsx', 'App.jsx', 'style.css', 'ScrollToTop.jsx'];
const skipDirs = ['context'];

// Start copying
console.log('Starting file conversion...');
copyDir(sourceDir, targetDir);
console.log('File conversion completed!');