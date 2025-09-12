import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CtHeader from './Component/CtHeader'
import CtFooter from './Component/CtFooter'
import CtHome from './Component/CtHome'
import CtMargarita from './Component/CtMargarita'
import CtMartini from './Component/CtMartini'
function App() {
  return (
    <div>
    <CtHeader/>
    <Routes>
      <Route path='/' element={<CtHome/>}/>
      <Route path='/Margarita' element={<CtMargarita/>}/>
      <Route path='/Martini' element={<CtMartini/>}/>
    </Routes>
    <CtFooter/>
      
    </div>
  )
}

export default App
