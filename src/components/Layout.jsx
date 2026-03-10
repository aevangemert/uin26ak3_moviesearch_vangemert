import {Link} from 'react-router-dom'

export default function Layout({children}){
    return(
        
        <>
        <nav>
            <Link to="/">Forside</Link>
            <Link to="/movies">Filmer</Link>
        </nav>
        {children}
    </>
    )
}