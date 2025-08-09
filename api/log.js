export default function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.connection?.remoteAddress ||
    'unknown';

  console.log(`Visitor IP: ${ip}`);

  res.status(204).end();
}
