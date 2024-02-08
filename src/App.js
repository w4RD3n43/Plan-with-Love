import './App.css';
import Tours from './Components/Tours'
import data from './Data.js'
import { useState } from 'react';

function App() {

  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };  

  if (tours.length === 0) {
    return (
      <div>
        <h2>
          No tours left 
        </h2>
        <button onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
