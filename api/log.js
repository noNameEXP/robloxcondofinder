export default async function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.connection?.remoteAddress ||
    'unknown';

  let country = 'unknown';
  let city = 'unknown';
  let geoData = {};

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);

    // ✅ Check if response is JSON before parsing
    const contentType = geoRes.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      geoData = await geoRes.json();
      country = geoData.country_name || 'unknown';
      city = geoData.city || 'unknown';
    } else {
      const text = await geoRes.text();
      console.error('Non-JSON response from geo API:', text);
    }
  } catch (error) {
    console.error('Geolocation lookup failed:', error);
  }

  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] IP: ${ip} | Country: ${country} | City: ${city}`);
  res.status(204).end();
}
