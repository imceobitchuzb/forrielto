const http = require('http');

const checked = new Set();
const toCheck = ['/'];
const broken = [];

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, data });
      });
    }).on('error', (err) => {
      resolve({ status: 500, data: '' });
    });
  });
}

async function run() {
  while (toCheck.length > 0) {
    const current = toCheck.pop();
    if (checked.has(current)) continue;
    checked.add(current);

    const res = await fetchPage(current);
    if (res.status >= 400) {
      broken.push({ url: current, status: res.status });
      console.log('BROKEN:', current, res.status);
    } else {
      console.log('OK (' + res.status + '):', current);
    }

    const regex = /href=["'](\/[^"'#\s]*)["']/g;
    let match;
    while ((match = regex.exec(res.data)) !== null) {
      let found = match[1];
      if (found.endsWith('/') && found.length > 1) found = found.slice(0, -1);
      if (!found) found = '/';
      if (!checked.has(found) && !toCheck.includes(found) && !found.startsWith('/_next') && !found.startsWith('/api') && !found.startsWith('/images')) {
        toCheck.push(found);
      }
    }
  }

  console.log('=== AUDIT COMPLETE ===');
  console.log('Total checked routes:', checked.size);
  console.log('Broken routes count:', broken.length);
  if (broken.length > 0) {
    console.log(broken);
    process.exit(1);
  }
}

run();
