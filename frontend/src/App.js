import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [userName,setUsername] = useState('')

  useEffect(()=>{
    getNames()

  })

  const getNames = async() => {
    const response = await axios.get('/names')
    setUsername(response.data)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello Simple React!</h1>
      <h3>Welcome {userName}</h3>
      </header>
    </div>
  );
}

export default App;
