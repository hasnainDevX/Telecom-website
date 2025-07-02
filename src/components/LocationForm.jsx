import React, { useState } from 'react';
import { fetchCoordinates } from '../api/geocode';

const LocationForm = () => {
  const [input, setInput] = useState('');
  const [coords, setCoords] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchCoordinates(input);
    if (result) setCoords(result);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Enter an address"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Get Coordinates
        </button>
      </form>

      {coords && (
        <div className="mt-4 text-green-700">
          <p>Latitude: {coords.lat}</p>
          <p>Longitude: {coords.lng}</p>
        </div>
      )}
    </div>
  );
};

export default LocationForm;
