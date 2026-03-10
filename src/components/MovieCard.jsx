export default function MovieCard({Title, Year, Poster}){
    return(
        <article>
            <h2>{Title}</h2>
            <img src={Poster.image} alt={Poster} />
            <p>{Year}</p>
        </article>
    )
}