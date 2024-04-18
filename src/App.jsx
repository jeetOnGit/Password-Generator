import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLegnth] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPas] = useState("")

  


  const passGen = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%&)~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      // console.log(pass);
    }

    setPas(pass)
  }, [length, num, char, setPas])


  const passRef = useCallback(() =>{
    window.navigator.clipboard.writeText(password)
  }, [password])

  const copyAlert = () =>{
    alert("Copied")
  }

  useEffect(() =>{
    passGen()
  }, [length, num, char, passGen])


  return (
    
      <div className="flex justify-between flex-col gap-5 box text-black p-4 rounded-lg">

        <div className="header">
        <h1 className='text-black'>Password Generator</h1>
        </div>

        <div className='flex justify-between'>
          <input id='demo' className='text-white w-4/5 px-1' type="text" value={password} placeholder='' />
          <button className='text-white copyBtn' onClick={copyAlert} ref={passRef}>Copy</button>
        </div>

        <div className='flex justify-between'>
          <div className="range">
            <input type="range" min={8} max={30} value={length} onChange={(e) =>{setLegnth(e.target.value)}}/>
            <label>Length : {length} </label>
          </div>

          <div className="numBer">
            <input type="checkbox" defaultChecked={num} onChange={() =>{
              setNum((prev) => !prev)
            }}/>
            <label className='ms-1'>Number</label>
          </div>


          <div className="numBer">
            <input type="checkbox" defaultChecked={char} onChange={() =>{
              setChar((prev) => !prev)
            }}/>
            <label className='ms-1'>Character</label>
          </div>


            
        </div>

      </div>

  )
}

export default App
