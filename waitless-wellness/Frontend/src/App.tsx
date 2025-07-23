import { Navbar } from './Navbar/Navbar'
import naming from './Naming.json'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <header>
      <h1>{naming.companyName}</h1>
      </header>
      <Navbar/>
    </Router>
  );
}

export default App
