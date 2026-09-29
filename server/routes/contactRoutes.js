const express = require("express")
const Contact = require("../models/Contact")

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required"
      })
    }

    const contact = await Contact.create({
      name,
      email,
      message
    })

    res.status(201).json({
      message: "Message submitted successfully",
      contact
    })

  } catch (error) {

    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
})


router.get("/", async (req, res) => {
  try {

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })

    res.json(contacts)

  } catch (error) {

    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
})


module.exports = router