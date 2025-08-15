// Additional lightweight test: ensure expected component files are present.
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'components/Navbar.js',
  'components/LessonCard.js',
  'components/PlaygroundRunner.js',
  'components/LessonEditor.js',
  'pages/index.js',
  'pages/playground.js',
];

try {
  const missing = requiredFiles.filter((f) => !fs.existsSync(path.join(__dirname, f)));
  if (missing.length === 0) {
    console.log('OK: all required files present');
    process.exit(0);
  }
  console.error('MISSING FILES:', missing.join(', '));
  process.exit(2);
} catch (err) {
  console.error('ERROR checking files:', err.message);
  process.exit(1);
}
