export default async function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.connection?.remoteAddress ||
    'unknown';

  let country = 'unknown';
  let city = 'unknown';
  let geoData = {}; // ✅ Define geoData outside the try block

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    geoData = await geoRes.json();
    country = geoData.country_name || 'unknown';
    city = geoData.city || 'unknown';
  } catch (error) {
    console.error('Geolocation lookup failed:', error);
  }

  console.log('GeoData:', geoData); // ✅ Now this won't throw
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] IP: ${ip} | Country: ${country} | City: ${city}`);
  res.status(204).end();
}
