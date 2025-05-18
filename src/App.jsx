import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Work from './Pages/Work'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Layout from './HOC/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route element={<Layout/>}>
       <Route  path='/'  element={<Home/>}></Route>
       <Route path='/Work' element={<Work/>}></Route>
       <Route path='/Services' element={<Services/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Blog' element={<Blog/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>
       </Route>
      
    </Routes>
    </>
  )
}

export default App
