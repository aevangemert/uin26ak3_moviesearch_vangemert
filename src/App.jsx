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
        {/*bruke useState i Home ???*/}
        <Route index element={<Home setSelectedMovie={setSelectedMovie} />} />
        {/*dynamisk routing*/}
        {/*må sende id med movie elementet, bruk riktig prop.. kan prøve sende med setselectedmovie?*/}
        <Route path='/movies/:id' element={<Movie />}/>
      </Routes>
    </Layout>

  )
}

export default App
