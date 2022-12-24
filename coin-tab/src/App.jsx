import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navabar } from './Components/Navbar'
import { DisplayUsers } from './Components/DisplayUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navabar></Navabar>
       <DisplayUsers></DisplayUsers>
    </div>
  )
}

export default App
