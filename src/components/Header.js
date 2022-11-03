import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <span>Le Mauvais Coin</span>
      </Link>
      <nav>
        <Link to='/login'>
          Log In
        </Link>
        <Link to='/signup'>
          Sign Up
        </Link>
        <Link to='/create-product'>
          Create Product
        </Link>
      </nav>
    </header>
  )
}

export default Header