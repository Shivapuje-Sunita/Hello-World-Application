import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [aliens, setAliens] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/aliens')
      .then(response => {
        console.log({response})
        setAliens(response.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <div>
      
      <ul>
        {aliens.map((alien, index) => (
          <li key={index}>{alien.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;




