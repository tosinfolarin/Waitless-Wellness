import { Navbar } from './Navbar/Navbar'
import naming from './Naming.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SymptomPage from './SymptomPage'
import FAQs from './FAQs'
import ClosestClinicsPage from './ClosestClinicsPage'
import SignupPage from './SignUpPage'
import LoginPage from './LoginPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symptoms" element={<SymptomPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/closestClinics" element={<ClosestClinicsPage />} />
        // <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}