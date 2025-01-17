//import './App.css';
import { useState } from 'react';
//import Wizard from './modules/Wizard/Main.js';
//import PrivacyBanner from './components/PrivacyBanner';

console.log(process.env.REACT_ENDPOINT);

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div>
        <h1>Counters that update separately</h1>
        <p>API URL is: {process.env.REACT_APP_API_URL}</p>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </div>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
