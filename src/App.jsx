import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  
  const [selectedMovie, setSelectedMovie] = useState()

  return (

    <Layout>
      <Routes>
        {/*sender med setSelectedMovie til home*/}
        <Route index element={<Home setSelectedMovie={setSelectedMovie} />} />
        {/*dynamisk routing*/}
        {/*sender med selectedMovie til Movie*/}
        <Route path='/:movies/:title' element={<Movie selectedMovie={selectedMovie} />} />
      </Routes>
    </Layout>

  )
}

export default App
