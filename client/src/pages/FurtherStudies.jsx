import { Link } from "react-router-dom"

function FurtherStudies() {
  return (
    <main className="further-studies-page">

      <section className="further-studies-title">
        <h1>DREAMS A PART</h1>
      </section>

      <section className="qualification-section">

        <h2>SELECT YOUR EDUCATIONAL QUALIFICATION:---</h2>

        <div className="qualification-list">

          <Link to="/after-10" className="qualification-button">
            10th STANDARD
          </Link>

          <Link to="/after-intermediate" className="qualification-button">
            INTERMEDIATE
          </Link>

          <Link to="/after-diploma" className="qualification-button">
            DIPLOMA
          </Link>

          <Link to="/after-iti" className="qualification-button">
            INDUSTRIAL TRAINING INSTITUTE
          </Link>

          <Link to="/after-degree" className="qualification-button">
            DEGREE
          </Link>

          <Link to="/after-btech" className="qualification-button">
            B.TECH
          </Link>

          <Link to="/after-masters" className="qualification-button">
            MASTER'S
          </Link>

        </div>

      </section>

    </main>
  )
}

export default FurtherStudies
