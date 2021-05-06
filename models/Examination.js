const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  idExamType: { type: String, required: true },
  idPat: { type: String },
  dateExam: { type: Date, required: true },
  idCreateEmpl: { type: String, required: true },
})

module.exports = model('Examination', schema);
