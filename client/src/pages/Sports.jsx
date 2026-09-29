import { useEffect, useState } from "react"
import axios from "axios"

function Sports() {
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  const [form, setForm] = useState({
    name: "",
    number: "",
    venue: "",
    age: "",
    date: "",
    description: ""
  })

  const fetchTournaments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/tournaments`
      )

      setTournaments(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTournaments()
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/tournaments`,
        form
      )

      alert(response.data.message)

      setForm({
        name: "",
        number: "",
        venue: "",
        age: "",
        date: "",
        description: ""
      })

      setShowForm(false)
      fetchTournaments()

    } catch (error) {
      console.log(error)

      alert(
        error.response?.data?.message ||
        "Failed to create tournament"
      )
    }
  }

  return (
    <main className="sports-page">

      <section className="page-hero sports-hero">
        <h1>SPORTS REFERENCE CENTER</h1>
        <p>SPORTS • SKILLS • TEAMWORK • FITNESS</p>
      </section>


      <section className="sports-section">

        <div className="sports-header">

          <h2>TOURNAMENTS</h2>

          <button
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "CLOSE" : "CREATENEW"}
          </button>

        </div>


        {showForm && (
          <form
            className="tournament-form"
            onSubmit={handleSubmit}
          >

            <h3>Create New Tournament</h3>

            <input
              type="text"
              name="number"
              placeholder="Tournament Number"
              value={form.number}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="name"
              placeholder="Tournament Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={form.venue}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="age"
              placeholder="Age Limit"
              value={form.age}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="date"
              placeholder="Meet Date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              required
            />

            <button type="submit">
              SAVE TOURNAMENT
            </button>

          </form>
        )}


        {loading ? (
          <p className="sports-status">
            Loading tournaments...
          </p>

        ) : tournaments.length === 0 ? (
          <p className="sports-status">
            No tournaments available.
          </p>

        ) : (
          <div className="tournament-table-wrapper">

            <table className="tournament-table">

              <thead>
                <tr>
                  <th>NUMBER</th>
                  <th>TOURNAMENT NAME</th>
                  <th>VENUE</th>
                  <th>AGE LIMIT</th>
                  <th>MEET DATE</th>
                  <th>DESCRIPTION</th>
                </tr>
              </thead>

              <tbody>
                {tournaments.map((tournament) => (
                  <tr key={tournament._id}>
                    <td>{tournament.number}</td>
                    <td>{tournament.name}</td>
                    <td>{tournament.venue}</td>
                    <td>{tournament.age}</td>
                    <td>{tournament.date}</td>
                    <td>{tournament.description}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </section>

    </main>
  )
}

export default Sports