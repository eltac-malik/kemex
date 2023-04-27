import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {Layout} from './layout'
import {Home} from '@/Home'
import {Contact} from '@/Contact'

import './App.css'
import './assets/style/root.css'

function App() {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Layout>
    </Router>
  )
}

export default App
