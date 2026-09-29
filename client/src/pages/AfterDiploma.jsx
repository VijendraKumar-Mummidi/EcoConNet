import { useState } from "react"
import { Link } from "react-router-dom"

function AfterDiploma() {
  const [btechOpen, setBtechOpen] = useState(false)
  const [jobsOpen, setJobsOpen] = useState(false)

  return (
    <main className="after-diploma-page">

      <section className="career-title">
        <h1>DREAMS A PART</h1>
      </section>


      <section className="after-diploma-options">

        {/* B.TECH */}
        <div className="after-diploma-group">

          <button
            className="after-diploma-main-button"
            onClick={() => setBtechOpen(!btechOpen)}
          >
            B.TECH
          </button>

          {btechOpen && (
            <div className="after-diploma-dropdown">

              <Link to="/btech/cse">
                C.S.E
              </Link>

              <Link to="/btech/cse-datascience">
                C.S.E(DATASCIENCE)
              </Link>

              <Link to="/btech/aiml">
                A.I.M.L
              </Link>

              <Link to="/btech/it">
                I.T.
              </Link>

              <Link to="/btech/civil">
                CIVIL
              </Link>

              <Link to="/btech/ece">
                E.C.E.
              </Link>

              <Link to="/btech/eee">
                E.E.E.
              </Link>

              <Link to="/btech/mech">
                M.E.C.H.
              </Link>

              <Link to="/btech/pet">
                P.E.T.
              </Link>

            </div>
          )}

        </div>


        {/* JOB OPPORTUNITIES */}
        <div className="after-diploma-group">

          <button
            className="after-diploma-main-button"
            onClick={() => setJobsOpen(!jobsOpen)}
          >
            JOB OPPORTUNITIES
          </button>

          {jobsOpen && (
            <div className="after-diploma-dropdown">

              <Link to="/jobs/defense">
                DEFENSE
              </Link>

              <Link to="/jobs/railways">
                RAILWAYS
              </Link>

              <Link to="/jobs/private-sector">
                PRIVATESECTOR
              </Link>

            </div>
          )}

        </div>

      </section>

    </main>
  )
}

export default AfterDiploma
