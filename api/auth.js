// api/auth.js

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const data = JSON.parse(body || '{}');

    const { mac, ip } = data;

    if (!mac || !ip) {
      return res.status(400).json({ error: 'Missing params' });
    }

    return res.status(200).json({
      success: true,
      mac,
      ip
    });
  });
};
