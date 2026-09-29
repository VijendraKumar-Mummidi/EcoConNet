const express = require("express")
const Tournament = require("../models/tournament")

const router = express.Router()


// Get all tournaments
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find()
      .sort({ createdAt: -1 })

    res.json(tournaments)

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tournaments",
      error: error.message
    })
  }
})


// Create a tournament
router.post("/", async (req, res) => {
  try {
    const {
      name,
      number,
      venue,
      age,
      date,
      description
    } = req.body

    if (
      !name ||
      !number ||
      !venue ||
      !age ||
      !date ||
      !description
    ) {
      return res.status(400).json({
        message: "All tournament fields are required"
      })
    }

    const tournament = await Tournament.create({
      name,
      number,
      venue,
      age,
      date,
      description
    })

    res.status(201).json({
      message: "Tournament created successfully",
      tournament
    })

  } catch (error) {
    res.status(500).json({
      message: "Failed to create tournament",
      error: error.message
    })
  }
})


module.exports = router
