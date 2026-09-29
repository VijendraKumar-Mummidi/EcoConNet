import { useState } from "react"
import { Link } from "react-router-dom"

function AfterIntermediate() {
  const [btechOpen, setBtechOpen] = useState(false)
  const [degreeOpen, setDegreeOpen] = useState(false)
  const [itiOpen, setItiOpen] = useState(false)

  return (
    <main className="after-inter-page">

      <section className="career-title">
        <h1>DREAMS A PART</h1>
      </section>


      <section className="after-inter-options">

        {/* B.TECH */}
        <div className="after-inter-group">

          <button
            className="after-inter-main-button"
            onClick={() => setBtechOpen(!btechOpen)}
          >
            B.TECH
          </button>

          {btechOpen && (
            <div className="after-inter-dropdown">

              <Link to="/btech/cse">C.S.E</Link>

              <Link to="/btech/cse-datascience">
                C.S.E(DATASCIENCE)
              </Link>

              <Link to="/btech/aiml">A.I.M.L</Link>

              <Link to="/btech/it">I.T.</Link>

              <Link to="/btech/civil">CIVIL</Link>

              <Link to="/btech/ece">E.C.E.</Link>

              <Link to="/btech/eee">E.E.E.</Link>

              <Link to="/btech/mech">M.E.C.H.</Link>

              <Link to="/btech/pet">P.E.T.</Link>

            </div>
          )}

        </div>


        {/* DEGREE */}
        <div className="after-inter-group">

          <button
            className="after-inter-main-button"
            onClick={() => setDegreeOpen(!degreeOpen)}
          >
            DEGREE
          </button>

          {degreeOpen && (
            <div className="after-inter-dropdown">

              <div className="nested-group">
                <strong>B.SC</strong>

                <Link to="/degree/bsc/mpc">
                  M.P.C.
                </Link>

                <Link to="/degree/bsc/mpcs">
                  M.P.C.S
                </Link>

                <Link to="/degree/bsc/mscs">
                  M.S.C.S
                </Link>

                <Link to="/degree/bsc/bzc">
                  B.ZC
                </Link>
              </div>


              <div className="nested-group">
                <strong>B.COM</strong>

                <Link to="/degree/bcom/general">
                  GENERAL
                </Link>

                <Link to="/degree/bcom/computer">
                  COMPUTER
                </Link>

                <Link to="/degree/bcom/foreign-trade">
                  FORIEGNTRADE
                </Link>

                <Link to="/degree/bcom/accountance">
                  ACCOUNTANCE
                </Link>
              </div>


              <div className="nested-group">
                <strong>B.B.A.</strong>

                <Link to="/degree/bba/general">
                  GENERAL
                </Link>

                <Link to="/degree/bba/digital">
                  DIGITAL
                </Link>
              </div>


              <Link to="/degree/bpharm">
                B.PHARM
              </Link>

              <Link to="/degree/pharmd">
                PHARM.D
              </Link>

              <Link to="/degree/other">
                OTHER COURSES
              </Link>

            </div>
          )}

        </div>


        {/* ITI */}
        <div className="after-inter-group">

          <button
            className="after-inter-main-button"
            onClick={() => setItiOpen(!itiOpen)}
          >
            INDUSTRIAL TRAINING INSTITUTE
          </button>

          {itiOpen && (
            <div className="after-inter-dropdown">

              <Link to="/iti?trade=fitter">
                FITTER
              </Link>

              <Link to="/iti?trade=copa">
                COPA
              </Link>

              <Link to="/iti?trade=draughtsman">
                DRAUGHTSMAN
              </Link>

              <Link to="/iti?trade=mechanic">
                MECHNIC
              </Link>

              <Link to="/iti?trade=electrician">
                ELECTRICIAN
              </Link>

            </div>
          )}

        </div>

      </section>

    </main>
  )
}

export default AfterIntermediate
