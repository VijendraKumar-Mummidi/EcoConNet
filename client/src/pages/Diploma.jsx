import { Link } from "react-router-dom"

function Diploma() {
  return (
    <main className="diploma-page">

      <section className="diploma-title">
        <h1>DIPLOMA</h1>
      </section>


      <section className="diploma-container">

        <div className="diploma-intro">
          <h2>DIPLOMA AFTER 10th</h2>

          <p>
            Diploma courses after 10th are generally focused on practical
            and skill-oriented education. Students can choose from fields
            such as engineering, computer science, technology and other
            professional areas.
          </p>

          <div className="diploma-details">
            <p><strong>Course Level:</strong> Diploma</p>
            <p><strong>Typical Duration:</strong> 3 years</p>
            <p><strong>Examination Type:</strong> Semester</p>
            <p><strong>Eligibility:</strong> 10th examination</p>
          </div>
        </div>


        <div className="diploma-grid">

          <article className="diploma-card">
            <h2>Diploma in Civil Engineering</h2>

            <p>
              A three-year engineering diploma focused on construction,
              infrastructure, surveying and related civil engineering
              fundamentals.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Automobile Engineering</h2>

            <p>
              A diploma focused on automobiles, mechanical systems,
              vehicle technology, maintenance and engineering principles.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Computer Science &amp; Engineering</h2>

            <p>
              Covers computer science fundamentals together with
              engineering concepts, programming and practical skills.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Pharmacy</h2>

            <p>
              An educational pathway related to pharmaceutical sciences
              and the fundamentals of medicines and pharmacy practice.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Information Technology</h2>

            <p>
              Focuses on computers, information technology and
              technology-related applications and services.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Electrical Engineering</h2>

            <p>
              Covers electrical circuits, devices, power systems,
              maintenance and other electrical engineering concepts.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Mechanical Engineering</h2>

            <p>
              Covers mechanics, design, manufacturing and maintenance
              of mechanical systems and equipment.
            </p>
          </article>


          <article className="diploma-card">
            <h2>Diploma in Electrical &amp; Electronics Engineering</h2>

            <p>
              Combines electrical and electronics fundamentals with
              practical engineering concepts.
            </p>
          </article>

        </div>


        <div className="after-diploma-link">
          <Link to="/after-diploma">
            AFTER DIPLOMA →
          </Link>
        </div>

      </section>

    </main>
  )
}

export default Diploma
