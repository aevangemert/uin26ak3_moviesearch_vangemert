import MovieCard from "./MovieCard"

export default function Movies({searchResult, setSelectedMovie}) {
    return (
        <>
            <h2>Movies</h2>
            <ul className="listed-movies">
                {searchResult?.map((searchR) => ( <li key={searchR.imdbID}><MovieCard imdbID={searchR.imdbID}
                Title={searchR.Title} Year={searchR.Year} Poster={searchR.Poster} Type={searchR.Type} setSelectedMovie={setSelectedMovie}/> </li>))}
            </ul>

        </>
    )
}