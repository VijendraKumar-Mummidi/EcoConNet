import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

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
  `${import.meta.env.VITE_API_URL}/api/contact`,
  form
)

      alert(response.data.message)

      setForm({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      console.log(error)
      alert("Failed to submit message")
    }
  }

  return (
    <main>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO</p>

          <h1>E-CONNECT</h1>

          <p className="hero-description">
            Connecting people with information, opportunities,
            knowledge and resources.
          </p>

          <a href="#content">
            <button>EXPLORE</button>
          </a>
        </div>
      </section>


      <section id="content" className="connect-section">

        <div className="connect-card gogreen">
          <div className="card-number">01</div>

          <h2>GOGREEN</h2>

          <h3>LIVE LONG</h3>

          <p>
            Explore environmental awareness, sustainable living
            and agriculture for a greener future.
          </p>

          <Link to="/gogreen">
            Let's go view all →
          </Link>
        </div>


        <div className="connect-card healthcare">
          <div className="card-number">02</div>

          <h2>HEALTHCARE</h2>

          <h3>HEALTH IS WEALTH</h3>

          <p>
            Discover useful healthcare information and learn
            about healthy habits and well-being.
          </p>

          <Link to="/healthcare">
            Let's go view all →
          </Link>
        </div>


        <div className="connect-card career">
          <div className="card-number">03</div>

          <h2>DREAMS A PART</h2>

          <h3>BUILD YOUR FUTURE</h3>

          <p>
            Explore education, career guidance, skills and
            opportunities to achieve your goals.
          </p>

          <Link to="/career-guide">
            Let's go view all →
          </Link>
        </div>


        <div className="connect-card abilities">
          <div className="card-number">04</div>

          <h2>ABILITIES AND CAPABILITIES</h2>

          <h3>DISCOVER YOUR POTENTIAL</h3>

          <p>
            Develop skills, participate in sports and discover
            opportunities to improve your capabilities.
          </p>

          <Link to="/sports">
            Let's go view all →
          </Link>
        </div>


        <div className="connect-card reference">
          <div className="card-number">05</div>

          <h2>REFERENCE CENTER</h2>

          <h3>LEARN • EXPLORE • DISCOVER</h3>

          <p>
            Access useful learning resources, references and
            information in one convenient place.
          </p>

          <Link to="/reference">
            Let's go view all →
          </Link>
        </div>

      </section>


      <section className="suggestion-section">

        <div className="suggestion-header">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Post Your Suggestion</h2>

          <p>
            If you have any comments or suggestions about the
            above content, please share them with us.
          </p>
        </div>


        <form onSubmit={handleSubmit}>

          <label>FullName</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />


          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />


          <label>Your Message</label>

          <textarea
            name="message"
            placeholder="Write your suggestion..."
            value={form.message}
            onChange={handleChange}
            required
          />


          <button type="submit">
            Submit Suggestion
          </button>

        </form>

      </section>

    </main>
  )
}

export default Home