import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navabar } from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navabar></Navabar>
       
    </div>
  )
}

export default App
