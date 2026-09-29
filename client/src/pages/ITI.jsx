import { Link } from "react-router-dom"

function ITI() {
  return (
    <main className="iti-page">

      <section className="iti-title">
        <h1>INDUSTRIAL TRAINING INSTITUTE</h1>
      </section>


      <section className="iti-container">

        <section className="iti-block">
          <h2>Industrial Training Institute</h2>

          <p>
            Industrial Training Institutes (ITI) are vocational training
            institutes that provide practical and technical training
            across different trades.
          </p>

          <p>
            These courses are designed to help students develop
            job-oriented technical skills.
          </p>
        </section>


        <section className="iti-block">
          <h2>ITI Admission Eligibility</h2>

          <p>
            Admission eligibility varies depending on the trade and
            the relevant admission authority.
          </p>

          <ul>
            <li>Educational qualification varies by trade.</li>
            <li>Different trades may require different levels of study.</li>
            <li>Age requirements depend on the applicable admission rules.</li>
          </ul>
        </section>


        <section className="iti-block">
          <h2>Certification and Assessment</h2>

          <p>
            ITI programs include practical and theoretical assessment.
            Assessment requirements can vary according to the duration
            and trade.
          </p>
        </section>


        <section className="iti-block">

          <h2>ITI Courses</h2>

          <div className="iti-course-grid">

            <div>Computer Operator and Programming Assistant</div>
            <div>Craftsman Food Production</div>
            <div>Carpenter</div>
            <div>Draughtsman Civil</div>
            <div>Electrician</div>
            <div>Electronic Mechanic</div>
            <div>Fashion Technology</div>
            <div>Fitter</div>
            <div>Hair and Skin Care</div>
            <div>Health Sanitary Inspector</div>
            <div>Information Technology and Electronics System Maintenance</div>
            <div>Library and Information Science</div>
            <div>Machinist</div>
            <div>Mechanic Diesel</div>
            <div>Mechanic Radio and Television</div>
            <div>Painter General</div>
            <div>Photographer</div>
            <div>Radiology Technician</div>
            <div>Surveyor</div>
            <div>Tool and Die Maker</div>
            <div>Turner</div>
            <div>Wireman</div>

          </div>

        </section>


        <section className="iti-block">

          <h2>ITI Salary</h2>

          <p>
            Salary after ITI depends on the trade, employer, location
            and experience.
          </p>


          <div className="iti-table-wrapper">

            <table className="iti-table">

              <thead>
                <tr>
                  <th>ROLE</th>
                  <th>SALARY</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Electrician</td>
                  <td>Rs. 1.1 lakhs</td>
                </tr>

                <tr>
                  <td>Refrigeration Engineer</td>
                  <td>Rs. 2 lakhs</td>
                </tr>

                <tr>
                  <td>Plumber</td>
                  <td>Rs. 2 lakhs</td>
                </tr>

                <tr>
                  <td>Stenographer</td>
                  <td>Rs. 2.6 lakhs</td>
                </tr>

                <tr>
                  <td>Computer Operator &amp; Programming Assistant</td>
                  <td>Rs. 1.7 lakhs - Rs. 2.4 lakhs</td>
                </tr>
              </tbody>

            </table>

          </div>

        </section>


        <div className="after-iti-link">

          <Link to="/after-iti">
            <img
              src="https://raw.githubusercontent.com/VijendraKumar-Mummidi/Eco-connect/main/afiti.jpg"
              alt="After ITI"
            />
          </Link>

          <p>AFTER ITI →</p>

        </div>

      </section>

    </main>
  )
}

export default ITI
