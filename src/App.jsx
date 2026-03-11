import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {

  return (

    <Layout>
      <Routes>
        <Route index element={<Home />} />
        {/*dynamisk routing*/}
        <Route path='/movies/:id' element={<Movie />}/>
      </Routes>
    </Layout>

  )
}

export default App
