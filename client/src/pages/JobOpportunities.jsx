import { Link } from "react-router-dom"

function JobOpportunities() {
  return (
    <main className="career-original-page">

      <section className="career-title">
        <h1>DREAMS A PART</h1>
      </section>


      <section className="career-options">

        <Link
          to="/further-studies"
          className="career-option"
        >
          FURTHER STUDIES
        </Link>

        <Link
          to="/job-opportunities"
          className="career-option"
        >
          JOB OPPORTUNIES
        </Link>

        <Link
          to="/up-to-date"
          className="career-option"
        >
          BRING UP TO DATE
        </Link>

      </section>

    </main>
  )
}

export default JobOpportunities
