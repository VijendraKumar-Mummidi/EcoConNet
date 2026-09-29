import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import NotFound from "./pages/NotFound"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import GoGreen from "./pages/GoGreen"
import Healthcare from "./pages/Healthcare"
import CareerGuide from "./pages/CareerGuide"
import Sports from "./pages/Sports"
import Reference from "./pages/Reference"
import Footer from "./components/Footer"
import JobOpportunities from "./pages/JobOpportunities"
import UpToDate from "./pages/UpToDate"
import After10 from "./pages/After10"
import Diploma from "./pages/Diploma"
import FurtherStudies from "./pages/FurtherStudies"
import AfterDiploma from "./pages/AfterDiploma"
import Btech from "./pages/Btech"
import ITI from "./pages/ITI"
import Intermediate from "./pages/Intermediate"
import AfterIntermediate from "./pages/AfterIntermediate"


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gogreen" element={<GoGreen />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/career-guide" element={<CareerGuide />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/further-studies" element={<FurtherStudies />} />
        <Route path="/job-opportunities" element={<JobOpportunities />}/>
        <Route path="/up-to-date" element={<UpToDate />} />
        <Route path="/after-10" element={<After10 />} />
        <Route path="/after-diploma" element={<AfterDiploma />} />
        <Route path="/btech" element={<Btech />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/iti" element={<ITI />} />
        <Route path="/intermediate" element={< Intermediate />} />
        <Route path="/after-intermediate" element={<AfterIntermediate />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App