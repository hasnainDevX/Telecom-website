export const fetchCoordinates = async (address) => {
  const apiKey = 'ded072bf11384c1da393e1bcb672a164';
  const encodedAddress = encodeURIComponent(address);
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      console.warn('No results found');
      return null;
    }
  } catch (err) {
    console.error('Geocoding error:', err);
    return null;
  }
};
