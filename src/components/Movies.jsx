import MovieCard from "./MovieCard"

export default function Movies({searchResult}) {
    return (
        <>
            <h1>Filmer</h1>
            <ul>
                {/*skal det være Link her? for at man kan trykke på en film? og bli sendt videre?*/}
                {/*liste ut bare james bond filmer her?*/}
                {searchResult?.map((searchR) => <li key={searchR.imdbID}><MovieCard imdbID={searchR.imdbID} Title={searchR.Title} Year={searchR.Year} Poster={searchR.Poster}/> </li>)}
            </ul>

        </>
    )
}