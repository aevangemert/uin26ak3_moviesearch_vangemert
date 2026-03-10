import MovieCard from "./MovieCard"

export default function Movies({searchResult}) {
    return (
        <>
            <h1>Filmer</h1>
            <ul>
                {/*liste ut james bond filmer? altså movies card componentet*/}
                {searchResult?.map((searchR) => <li key={searchR.imbdID}><MovieCard Title={searchR.Title} Year={searchR.Year} Poster={searchR.Poster}/> </li>)}
            </ul>

        </>
    )
}