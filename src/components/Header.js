import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex justify-between mb-10 pb-5 border-b-2 bg-teal-600 p-5">
            <Link to="/">
                <span className="font-semibold text-2xl text-white">
                    Le Mauvais Coin
                </span>
            </Link>
            <nav className="flex items-center gap-10">
                <Link
                    to="/login"
                    className="text-white hover:bg-teal-700 rounded px-3.5 py-1.5"
                >
                    Log In
                </Link>
                <Link
                    to="/signup"
                    className="text-white hover:bg-teal-700 rounded px-3.5 py-1.5"
                >
                    Sign Up
                </Link>
                <Link
                    to="/create-product"
                    className="text-white hover:bg-teal-700 rounded px-3.5 py-1.5"
                >
                    Create Product
                </Link>
                <Link
                    to="/user"
                    className="text-white hover:bg-teal-700 rounded px-3.5 py-1.5"
                >
                    USER
                </Link>
            </nav>
        </header>
    )
}

export default Header
