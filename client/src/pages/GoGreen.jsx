import { useState } from "react"

function GoGreen() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      alert("Please enter your advise or query")
      return
    }

    alert("Your advise/query has been submitted")
    setQuery("")
  }

  return (
    <main className="gogreen-page">

      <section className="page-hero gogreen-hero">
        <h1>GOGREEN</h1>
        <p>ORGANIC AGRICULTURE</p>
      </section>


      <section className="gogreen-section">

        <h2>ORGANIC AGRICULTURE ==&gt;</h2>

        <div className="gogreen-grid">

          <div className="gogreen-item">
            <h3>ORGANIC FARMING:-</h3>

            <img
              src="https://raw.githubusercontent.com/VijendraKumar-Mummidi/Eco-connect/main/of2.jpg"
              alt="Organic Farming"
            />

            <p>
              Learn about organic farming and sustainable agricultural
              practices.
            </p>
          </div>


          <div className="gogreen-item">
            <h3>MINI PLANTATIONS:-</h3>

            <img
              src="https://raw.githubusercontent.com/VijendraKumar-Mummidi/Eco-connect/main/of3.jpg"
              alt="Mini Plantations"
            />

            <p>
              Discover simple plantation ideas that can be practiced
              around homes and communities.
            </p>
          </div>

        </div>


        <div className="gogreen-grid lower-grid">

          <div className="gogreen-item">
            <h3>LEARNINGZONE</h3>

            <img
              src="https://raw.githubusercontent.com/VijendraKumar-Mummidi/Eco-connect/main/orle.jpg"
              alt="Learning Zone"
            />

            <p>
              Explore useful agricultural learning resources.
            </p>
          </div>


          <div className="gogreen-item query-card">
            <h3>ADVISES(OR)QUERIES:-</h3>

            <form onSubmit={handleSubmit}>

              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ADVISES(OR)QUERIES..."
                rows="10"
              />

              <button type="submit">
                Submit
              </button>

            </form>
          </div>

        </div>

      </section>

    </main>
  )
}

export default GoGreen