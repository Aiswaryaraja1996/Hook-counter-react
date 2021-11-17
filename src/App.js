import { useState } from 'react';
import './App.css';
import Button from './components/Button'

function App() {

    const [count,setCount] = useState(0);

  function handleAdd(value){
    setCount(count+value);
  }

  function handleDouble(){
    setCount(count*2);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h2>{count}</h2>
      <Button func={()=>handleAdd(1)} title="Add"/>
      <Button func={()=>handleAdd(-1)} title="Reduce"/>
      <Button func={()=>handleDouble()} title="Double"/>
      </header>
    </div>
  );
}

export default App;
