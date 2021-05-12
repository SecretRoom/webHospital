const { Schema, model } = require('mongoose');

const schema = new Schema({
  idAnalysis: { type: String, required: true },
  idExam: { type: String, required: true },
  count: { type: String, required: true },
  date: { type: String, required: true },
  idPat: { type: String, required: true },
  idEmpl: { type: String, required: true },
})

module.exports = model('Schedule_analyzes', schema);
