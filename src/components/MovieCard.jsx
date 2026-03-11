import { Link } from "react-router-dom"

export default function MovieCard({ imdbID, Title, Year, Poster }) {
    return (

        //skal link være her eller i Movies????
        <Link to={`/movies/${imdbID}`}>
            <article>
                <h2>{Title}</h2>
                {/*noen filmer har ikke bilde.. finne løsning på det*/}
                <img src={Poster} alt={Title} />
                <p>{Year}</p>
            </article>
        </Link>

    )
}