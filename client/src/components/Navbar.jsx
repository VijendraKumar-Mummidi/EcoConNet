import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav>
      <h2>E-CONNECT</h2>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>

        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <Link to="/gogreen" onClick={closeMenu}>
          GOGREEN
        </Link>

        <Link to="/healthcare" onClick={closeMenu}>
          HEALTH CARE
        </Link>

        <Link to="/career-guide" onClick={closeMenu}>
          CAREER GUIDE
        </Link>

        <Link to="/sports" onClick={closeMenu}>
          SPORTS
        </Link>

        <Link to="/reference" onClick={closeMenu}>
           REFERENCE CENTER
        </Link>

      </div>
    </nav>
  )
}

export default Navbar