import { useState, useEffect } from 'react'
import Movies from '../components/Movies'

/*
   TODO:
   - vise data som hentes fra api 
   - components, sende videre mtp hierarki
   -> et komponent som håndterer visning av søkeresultater
   -> et komponent som representerer én film i listevisning
   */

export default function Home() {

    const [search, setSearch] = useState("James Bond")
    const [searchResult, setSearchResult] = useState([])

    // const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`

    //api-nøkkelen, nøkkel ligger i egen .env fil og lagt til i gitignore for at den ikke skal pushes til github
    const apiKey = import.meta.env.VITE_APP_API_KEY

    //asynkron funksjon, venter med å kjøre den funksjonen som ikke er helt lasta slik at siden ikke kræsjer
    const getMovies = async () => {
        try {

            //`${baseUrl}${apiKey}`
            const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`)
            const data = await response.json()

            console.log("sjekk data", data)

            return setSearchResult(data.Search)
        }

        catch (err) {
            console.error(err);
        }
    }

    //useEffect som henter filmer etter brukeren har skrevet inn minst 3 bokstaver
    useEffect(() => {
        if (search.length >= 3) {
            getMovies()
        }
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // e.target.reset()
    }


    return (
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film
                    <input type="search" placeholder="Back to the Future" value={search} onChange={handleChange}></input>
                </label>
                {/* <button onClick={getMovies}>Søk</button> */}
            </form>
            {/*her kommer movies componenten som har moviecard componenten*/}
            <section>
                <Movies searchResult={searchResult} />
            </section>
        </main>


    )
}