import { useParams } from "react-router-dom"

function BTech() {
  const { specialization } = useParams()

  const specializationNames = {
    cse: "C.S.E",
    "cse-datascience": "C.S.E(DATASCIENCE)",
    aiml: "A.I.M.L",
    it: "I.T.",
    civil: "CIVIL",
    ece: "E.C.E.",
    eee: "E.E.E.",
    mech: "M.E.C.H.",
    pet: "P.E.T."
  }

  const selectedSpecialization =
    specializationNames[specialization] || "B.TECH"

  return (
    <main className="btech-page">

      <section className="btech-title">
        <h1>B.TECH</h1>
        <p>{selectedSpecialization}</p>
      </section>


      <section className="btech-container">

        <h2>B.TECH:---</h2>

        <p>
          Bachelor of Technology (BTech) is a professional undergraduate
          engineering degree. The original E-CONNECT project presents
          information about the course, its structure, eligibility,
          admission process and different engineering specializations.
        </p>


        <h2>BTech Course Highlights</h2>

        <div className="btech-table-wrapper">

          <table className="btech-table">

            <tbody>

              <tr>
                <th>Course Level</th>
                <td>Undergraduate</td>
              </tr>

              <tr>
                <th>Course Name</th>
                <td>Bachelor of Technology</td>
              </tr>

              <tr>
                <th>Course Duration</th>
                <td>4 years</td>
              </tr>

              <tr>
                <th>Examination Type</th>
                <td>Semester-wise</td>
              </tr>

              <tr>
                <th>Job Scope</th>
                <td>
                  Engineering, software, research and other
                  technology-related roles
                </td>
              </tr>

              <tr>
                <th>Entrance Examinations</th>
                <td>
                  JEE Main, JEE Advanced and relevant state-level
                  or university-level examinations
                </td>
              </tr>

            </tbody>

          </table>

        </div>


        <section className="btech-text-section">

          <h2>Why Pursue BTech?</h2>

          <p>
            BTech provides an engineering-focused undergraduate
            education and allows students to specialize in different
            technical disciplines.
          </p>


          <h2>Who Should Pursue BTech?</h2>

          <p>
            Students interested in engineering, technology,
            problem-solving and technical careers can explore
            BTech programs and their different specializations.
          </p>


          <h2>Eligibility Criteria for BTech</h2>

          <p>
            Eligibility requirements vary by institution and admission
            route. The original E-CONNECT page describes both the regular
            route after Class 12 and lateral-entry opportunities after
            a diploma.
          </p>


          <h2>Admission Process for BTech</h2>

          <p>
            Depending on the institution, admission may involve national,
            state or institution-level entrance examinations followed by
            counselling or the relevant admission process.
          </p>


          <h2>BTech Specialisations</h2>

          <div className="specialization-grid">

            <div>C.S.E</div>
            <div>INFORMATION TECHNOLOGY</div>
            <div>MECHANICAL</div>
            <div>AEROSPACE</div>
            <div>CIVIL</div>
            <div>CERAMIC</div>
            <div>E.C.E</div>
            <div>METALLURGICAL</div>
            <div>ELECTRICAL</div>
            <div>MARINE</div>

          </div>

        </section>

      </section>

    </main>
  )
}

export default BTech
