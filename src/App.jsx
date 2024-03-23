import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnotherHome from './components/AnotherHome'
import Quote from './components/Quote'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AnotherHome/>}/>
        <Route path='/quote' element={<Quote/>}/>
    </Routes>
    </Router>
  )
}

export default App
