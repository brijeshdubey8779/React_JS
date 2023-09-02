import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "cyan"}}
            >cyan</button>
            <button
            onClick={() => setColor("cadetblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "cadetblue"}}
            >cadetblue</button>
            <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Lavender"}}
            >Lavender</button>
            <button
            onClick={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "aqua"}}
            >aqua</button>
            <button
            onClick={() => setColor("aquamarine")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "aquamarine"}}
            >aquamarine</button>
            <button
            onClick={() => setColor("blanchedalmond")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blanchedalmond"}}
            >blanchedalmond</button>
          </div>
        </div>
      </div>
  )
}

export default App
