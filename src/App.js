import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [advice, setAdvice] = useState("")

useEffect (() => {
  getAdvice();
}, [])

  const getAdvice = async() => {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data);
    setAdvice(data.activity);

  }
 

  return (
    <div className="App">

      <div className="container">
      <h1>Bored? Here's what you can do:</h1>
      </div>

      <div className="container">
      <p>{advice}</p>
      </div>

      <div className="container">
      <button onClick={getAdvice}>Get New Advice</button>
      </div>

    </div>
  );
}

export default App;
