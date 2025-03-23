import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  function incHandler(){
    counter=counter+1
    setCounter(counter)       

  }

  function decHandler(){
    if(counter>0){
       setCounter(counter-1)
    }
  }

  const resetHandler = () =>{
    setCounter(0)
  }

  return (
    <>
    <h1>Hello! lets chai with react</h1>
    <br />
    <h1>couter: {counter}</h1>
    <button onClick={incHandler}>increament</button>
    <br />
    <br />
    <button onClick={decHandler}>decreament</button>
    <br />
    <br />
    <button onClick={resetHandler}>Reset counter</button>
    </>
  )
}

export default App
