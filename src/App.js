import React from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';

const first = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
}
function App() {
  const [simpsons, setSimpsons] = React.useState(first);
  const getSimpsons = ()=> {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpsons(data[0]);
      });
  }
  return (
    <div >
      <QuoteCard simpsons = { simpsons }/>
      <button type="button" onClick={getSimpsons}>Get Simpson</button>
    </div>
  );
}

export default App;
