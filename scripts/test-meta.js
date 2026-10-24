const http = require('http');

const urls = [
  '/',
  '/apartment-inspection',
  '/renovation-supervision',
  '/turnkey-renovation',
  '/services',
  '/about',
  '/reviews',
  '/faq',
  '/contact',
  '/privacy',
  '/portfolio/inspection-mirabad-avenue-demonstration'
];

async function checkMeta() {
  for (const u of urls) {
    await new Promise((resolve) => {
      http.get('http://localhost:3000' + u, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          const matchTitle = body.match(/<title>([^<]*)<\/title>/);
          const matchDesc = body.match(/<meta name="description" content="([^"]*)"/);
          console.log(u);
          console.log('  Title:', matchTitle ? matchTitle[1] : 'N/A');
          console.log('  Desc:', matchDesc ? matchDesc[1].slice(0, 75) + '...' : 'N/A');
          resolve();
        });
      });
    });
  }
}

checkMeta();
