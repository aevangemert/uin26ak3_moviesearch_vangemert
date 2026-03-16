import { Link } from "react-router-dom"
import "../styles/style.scss"

export default function MovieCard({ imdbID, Title, Year, Poster, Type, setSelectedMovie }) {

    const movie = {imdbID, Title, Year, Poster, Type}

    /*kilde: https://chatgpt.com/share/69b6a048-c398-8003-95e1-33ab45c91566*/
    const posterImage = Poster !== "N/A" ? Poster : "/404notfound.png"

    return (

        /*Link som gjør hele filmkortet klikkbart*/
        <Link to={`/movies/${Title}`}
            //anonym onclick funksjon, console.log på movie
            onClick={() => {
                console.log("sjekk movie", movie)
                setSelectedMovie(movie)
            }}>
            <article className="movie-card">
                <h2>{Title}</h2>
                {/*noen filmer har ikke gyldig URL.. spurte Ki om løsning på dette..
                kilde: https://chatgpt.com/share/69b6a048-c398-8003-95e1-33ab45c91566
                kan hende linken ikke funker fra vscode, må kanskje åpnes separat i nettleser*/}
                <img src={posterImage} alt={Title} onError={(e) => {
                    e.target.src = "/404notfound.png"
                }}/>
                {/*når man trykker på moviecard får man mere informasjon, dermed ikke tatt med her*/}
                {/* <p>Year: {Year}</p> */}
            </article>
        </Link>

    )
}