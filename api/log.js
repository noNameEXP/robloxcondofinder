import fetch from 'node-fetch';

export default async function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.connection?.remoteAddress ||
    'unknown';

  let country = 'unknown';
  let city = 'unknown';

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();
    country = geoData.country_name || 'unknown';
    city = geoData.city || 'unknown';
  } catch (err) {
    console.error('Failed to fetch geolocation:', err);
  }

  console.log(`Visitor IP: ${ip}`);
  console.log(`Country: ${country}`);
  console.log(`City: ${city}`);

  res.status(204).end();
}
