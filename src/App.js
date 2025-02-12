import './App.css';
import { useState } from 'react';
//import Wizard from './modules/Wizard/Main.js';
import PrivacyBanner from './components/PrivacyBanner';
import Header from './components/Header';

console.log(process.env.REACT_APP_API_URL); //in the borwser console

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Header/>
      <div className="container-gradient"></div>
      <div>
        <p>API URL is: {process.env.REACT_APP_API_URL}</p>
        <PrivacyBanner />
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