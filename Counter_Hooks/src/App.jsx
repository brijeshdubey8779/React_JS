import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20){
    setCounter(counter + 1)
    }
    else{
      alert('This is the limit!');
    }
  }

  const subValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    }
    else{
      alert("Counter can't be negative!");
    }
  }
  return (
    <>
    <h2>Lets Play with Counter: { counter }</h2>
    <button
    onClick={addValue}
    >Add</button>
    <button
    onClick={subValue}
    >Decrease</button>
    <p>{ counter }</p>
    </>
  )
}

export default App
