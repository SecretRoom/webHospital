const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  idEmpl: { type: String || Array, required: true },
  fioEmpl: { type: String, required: true },
  empl: [{ type: Types.ObjectId, ref: 'User' }]
});

module.exports = model('Staff', schema);
