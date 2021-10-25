import React from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';

function App() {
  const [simpsons, setSimpsons] = React.useState('');
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
