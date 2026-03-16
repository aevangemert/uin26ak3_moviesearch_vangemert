import { Link } from 'react-router-dom'
import "../styles/style.scss"

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Main Page</Link>
                    <Link to="/movies">Movie</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>2026 - MovieSearchAPI - Anna Elea van Gemert</p>
            </footer>
        </>
    )
}