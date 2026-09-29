import { Link } from "react-router-dom"
function Healthcare() {
  return (
    <main className="healthcare-page">

      <section className="page-hero healthcare-hero">
        <h1>HEALTH CARE</h1>
        <p>HEALTH • AWARENESS • WELL-BEING</p>
      </section>


      <section className="healthcare-section">

        <h2>HEALTHCARE ==&gt;</h2>

        <div className="healthcare-grid">

          <div className="healthcare-item">
            <h3>HEALTH AWARENESS</h3>

            <p>
              Learn about basic health awareness, healthy habits and
              the importance of taking care of your well-being.
            </p>

            <Link to="/healthcare">
              Let's go view all →
            </Link>
          </div>


          <div className="healthcare-item">
            <h3>HEALTHY LIFESTYLE</h3>

            <p>
              Explore practical information about nutrition, physical
              activity, hygiene and healthy everyday habits.
            </p>

            <Link to="/healthcare">
              Let's go view all →
            </Link>
          </div>


          <div className="healthcare-item">
            <h3>PREVENTION</h3>

            <p>
              Understand the value of preventive care and responsible
              health practices.
            </p>

            <Link to="/healthcare">
              Let's go view all →
            </Link>
          </div>


          <div className="healthcare-item">
            <h3>FITNESS &amp; WELL-BEING</h3>

            <p>
              Discover ways to support physical fitness and overall
              well-being through regular healthy habits.
            </p>

            <Link to="/healthcare">
              Let's go view all →
            </Link>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Healthcare