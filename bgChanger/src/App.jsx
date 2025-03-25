import { useState } from "react"


function App() {
  const [color, setColor] = useState("Olive")
  return (
    <div className="w-[100vw] h-[100vh] duration-1000" style={{background:color}}>
      <div className="fixed bottom-10 flex flex-row flex-wrap justify-center inset-x-0">
        <div className=" flex flex-wrap justify-center gap-7 bg-white text-white px-10 py-2 rounded-3xl">
          <button className="outline-none bg-red-700 px-3 py-1 rounded-2xl w-24" 
          onClick={()=> setColor("red")}>red</button>
          <button className="outline-none bg-green-700 px-3 py-1 rounded-2xl w-24"
          onClick={()=> setColor("green")}>green</button>
          <button className="outline-none bg-yellow-700 px-3 py-1 rounded-2xl w-24"
          onClick={()=> setColor("yellow")}>yellow</button>
          <button className="outline-none bg-violet-700 px-3 py-1 rounded-2xl w-24"
          onClick={()=> setColor("violet")}>violet</button>
          <button className="outline-none bg-black px-3 py-1 rounded-2xl w-24"
          onClick={()=> setColor("black")}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
