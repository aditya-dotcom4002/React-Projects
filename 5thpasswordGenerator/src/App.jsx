import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //UseRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-=~[]{}|;"

    for (let i = 1; i <= length; i ++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }

    setPassword(pass)
 }, [length, numberAllowed, charAllowed, setPassword])
 
 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 100)
  window.navigator.clipboard.writeText(password)
 }, [password])

 useEffect(() => {
  passwordGenerator()
 }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
   
  
      <div className='w-full h-28 max-w-xl mx-auto shadow-md rounded-lg px-4 my-8
      text-orange-900 bg-gray-700'> 

      <h1 className = 'text-white text-center my-3'> Password Generator</h1>
      
     
        <div className ="flex shadow rounded-lg overflow-hidden mb-4 bg-blue-100">
          <input 
          type = "text"
          value = {password}
          className ='outline-none w-full py-1 px -3'
          placeholder ='Password'
          readOnly
          ref = {passwordRef}> 
          </input>
        
        <button 
        onClick = {copyPasswordToClipboard}
        className= 'outline-none flex-center bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      
        </div>
      
        <div className = 'flex text-sm gap-x-5'>
          <div className = 'flex items-center gap-x-1 text-orange-400'>
            <input
            type = "range"
            min = {6}
            max = {100}
            value = {length}
            className= 'cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}>
            </input>
            <label> Length:{length}</label>
          </div>

          <div className= 'flex items-center gap-x-1  text-orange-400'>
            <input
             type = "checkbox"
             defaultChecked = {numberAllowed}
             id = "numberInput"
             onChange = {() => {
              setNumberAllowed((prev) => !prev);  
             }}></input>
              <label>Numbers</label>
          </div>

          <div className= 'flex items-center gap-x-1  text-orange-400'>
            <input
             type = "checkbox"
             defaultChecked = {charAllowed}
             id = "characterInput"
             onChange = {() => {
              setCharAllowed((prev) => !prev);  
             }}></input>
             <label>Characters</label>
          </div>

        </div>
      </div>
  
  )
}

export default App
 