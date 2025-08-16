export default async function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.connection?.remoteAddress ||
    'unknown';

  let location = {
    city: 'unknown',
    country: 'unknown',
  };

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();

    location.city = geoData.city || 'unknown';
    location.country = geoData.country_name || 'unknown';
  } catch (error) {
    console.error('Geolocation lookup failed:', error);
  }

  console.log(`Visitor IP: ${ip}`);
  console.log(`City: ${location.city}`);
  console.log(`Country: ${location.country}`);

  res.status(204).end();
}
