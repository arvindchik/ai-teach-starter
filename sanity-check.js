// A tiny, lightweight sanity check you can run with `npm run sanity`.
// Validates the presence of the LESSONS export inside utils/sampleData.js.
const fs = require('fs');
const path = require('path');

try {
  const samplePath = path.join(__dirname, 'utils', 'sampleData.js');
  const content = fs.readFileSync(samplePath, 'utf8');
  const hasLessons = /export\s+const\s+LESSONS\s*=/.test(content);
  if (hasLessons) {
    console.log('OK: LESSONS export found in utils/sampleData.js');
    process.exit(0);
  }
  console.error('ERROR: LESSONS export not found in utils/sampleData.js');
  process.exit(2);
} catch (err) {
  console.error('ERROR reading sampleData.js:', err.message);
  process.exit(1);
}
