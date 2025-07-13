import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './Navbar/Navbar'
import naming from './Naming.json'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <header>
      <h1>{naming.companyName}</h1>
    </header>
      <Navbar/>
    </>
  )
}

export default App
