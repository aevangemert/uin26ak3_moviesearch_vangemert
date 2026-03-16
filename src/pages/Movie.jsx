export default function Movie({ selectedMovie }) {

   if (!selectedMovie) {
      return <p>Search gave no result</p>
   }

   /*kilde: https://chatgpt.com/share/69b6a048-c398-8003-95e1-33ab45c91566*/
   const posterImage = selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "/404notfound.png"

   return (
      <section className="movie-section">
         <article className="movie-card-movie">
            <h2>{selectedMovie.Title}</h2>
            {/*noen filmer har ikke gyldig URL.. spurte Ki om løsning på dette..
            kilde: https://chatgpt.com/share/69b6a048-c398-8003-95e1-33ab45c91566
            kan hende linken ikke funker fra vscode, må åpnes separat i nettleser*/}
            <img src={posterImage} alt={selectedMovie.Title} onError={(e) => {
               e.target.src = "/404notfound.png"
            }} />
            <p>Year: {selectedMovie.Year}</p>
            <p>Genre: {selectedMovie.Type}</p>
         </article>
      </section>
   )
}
