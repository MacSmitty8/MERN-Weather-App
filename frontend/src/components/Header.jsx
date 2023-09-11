import {FaSignInAlt, FaSignOut, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link to ='/'>Weather Search</Link>
        </div> 
        <ul>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
        {/* If user */}
    </header>
  )
}

export default Header
