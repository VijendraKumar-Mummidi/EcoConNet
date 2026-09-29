import { Link } from "react-router-dom"

function Intermediate() {
  return (
    <main className="intermediate-page">

      <section className="intermediate-title">
        <h1>INTERMEDIATE</h1>
        <p>10 + 2 EDUCATION</p>
      </section>


      <section className="intermediate-container">

        <div className="intermediate-intro">

          <h2>INTERMEDIATE:---</h2>

          <p>
            Intermediate is the 10 + 2 level of education. Students can
            choose different subject groups based on their interests and
            future education plans.
          </p>

        </div>


        <div className="intermediate-groups">

          <article className="intermediate-card">

            <h2>M.P.C.</h2>

            <p>
              <strong>Eligibility:</strong> 10th standard pass.
            </p>

            <p>
              <strong>Course Duration:</strong> 2 years.
            </p>

            <p>
              <strong>Subjects:</strong> Maths, Physics, Chemistry,
              English and a second language.
            </p>

          </article>


          <article className="intermediate-card">

            <h2>BI.P.C.</h2>

            <p>
              <strong>Eligibility:</strong> 10th standard pass.
            </p>

            <p>
              <strong>Course Duration:</strong> 2 years.
            </p>

            <p>
              <strong>Subjects:</strong> Biology, Physics, Chemistry,
              English and a second language.
            </p>

          </article>


          <article className="intermediate-card">

            <h2>H.E.C.</h2>

            <p>
              <strong>Eligibility:</strong> 10th standard pass.
            </p>

            <p>
              <strong>Course Duration:</strong> 2 years.
            </p>

            <p>
              <strong>Subjects:</strong> History, Economics, Commerce,
              English and a second language.
            </p>

          </article>


          <article className="intermediate-card">

            <h2>C.E.C.</h2>

            <p>
              <strong>Eligibility:</strong> 10th standard pass.
            </p>

            <p>
              <strong>Course Duration:</strong> 2 years.
            </p>

            <p>
              <strong>Subjects:</strong> Civics, Economics, Commerce,
              English and a second language.
            </p>

          </article>


          <article className="intermediate-card">

            <h2>M.E.C.</h2>

            <p>
              <strong>Eligibility:</strong> 10th standard pass.
            </p>

            <p>
              <strong>Course Duration:</strong> 2 years.
            </p>

            <p>
              <strong>Subjects:</strong> Maths, Economics, Commerce,
              English and a second language.
            </p>

          </article>

        </div>


        <div className="after-inter-link">

          <Link to="/after-intermediate">
            <img
              src="https://raw.githubusercontent.com/VijendraKumar-Mummidi/Eco-connect/main/afIint.jpg"
              alt="After Intermediate"
            />
          </Link>

          <p>AFTER INTERMEDIATE →</p>

        </div>

      </section>

    </main>
  )
}

export default Intermediate
