const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator=require("mongoose-unique-validator");

const RateSchema = new Schema({
  star: {type: Number},
  comment: {type: String},
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Rate', RateSchema);
