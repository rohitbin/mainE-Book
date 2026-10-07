const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (content.includes('150+')) {
      content = content.replace(/150\+/g, '200+');
      changed = true;
    }

    if (content.includes('150%2B')) {
      content = content.replace(/150%2B/g, '200%2B');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});

// Update index.html
let indexHtmlPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexHtmlPath, 'utf8');
if (indexContent.includes('150+')) {
    indexContent = indexContent.replace(/150\+/g, '200+');
    fs.writeFileSync(indexHtmlPath, indexContent, 'utf8');
}
