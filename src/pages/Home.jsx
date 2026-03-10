import { useState } from 'react'
import Movies from '../components/Movies'


export default function Home() {

    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    //GJØR SÅNN!!!!!
    const apiKey = import.meta.env.VITE_APP_API_KEY

    //asynkron funksjon, venter med å kjøre den funksjonen som ikke er helt lasta slik at siden ikke kræsjer
    const getMovies = async () => {
        try {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()

            console.log("sjekk data", data)

            return setSearchResult(data.Search)
        }

        catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        // console.log(searchResult)
    }


    return (
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film
                    <input type="search" placeholder="Harry Potter" onChange={handleChange}></input>
                </label>
                {/* ?? focused <History history={history} setSearch={setSearch}/> : null*/}
                <button onClick={getMovies}>Søk</button>
            </form>
            {/*
        TODO:
        - vise data som hentes fra api 
        - components, sende videre mtp hierarki
        -> et komponent som håndterer visning av søkeresultater
        -> et komponent som representerer én film i listevisning
        */}

            {/*her kommer movies componenten med moviecard componenten "inni seg"*/}
            <section>
                <Movies searchResult={searchResult}/>
            </section>
        </main>


    )
}