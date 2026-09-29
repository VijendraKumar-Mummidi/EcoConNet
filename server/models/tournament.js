const mongoose = require("mongoose")

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  number: {
    type: String,
    required: true
  },

  venue: {
    type: String,
    required: true
  },

  age: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Tournament", tournamentSchema)
