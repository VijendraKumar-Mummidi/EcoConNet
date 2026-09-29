import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="inner-page">
      <h1>404</h1>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link className="back-home" to="/">
        ← Back to Home
      </Link>
    </main>
  )
}

export default NotFound