import { Link } from "react-router-dom"

function After10() {
  return (
    <main className="after10-page">

      <section className="career-title">
        <h1>DREAMS A PART</h1>
      </section>


      <section className="after10-section">

        <h2>AFTER 10th STANDARD</h2>


        <div className="after10-options">

          <Link
            to="/intermediate"
            className="after10-option"
          >
            INTERMEDIATE
          </Link>


          <Link
            to="/diploma"
            className="after10-option"
          >
            DIPLOMA
          </Link>


          <Link
            to="/iti"
            className="after10-option"
          >
            INDUSTRIAL TRAINING INSTITUTE
          </Link>

        </div>

      </section>

    </main>
  )
}

export default After10
