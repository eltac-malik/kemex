import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {Layout} from './layout'
import {Home} from '@/Home'
import {Contact} from '@/Contact'
import {Products} from '@/Products'
import {About} from '@/About'

import './App.css'
import './assets/style/root.css'

function App() {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Layout>
    </Router>
  )
}

export default App
