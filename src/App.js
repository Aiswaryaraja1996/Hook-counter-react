import { useState } from 'react';
import './App.css';
import Button from './components/Button'

function App() {

    const [count,setCount] = useState(0);

  function handleAdd(value){
    setCount(count+value);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h2>{count}</h2>
      <Button func={()=>handleAdd(1)} title="Add"/>
      <Button func={()=>handleAdd(-1)} title="Reduce"/>
      </header>
    </div>
  );
}

export default App;
