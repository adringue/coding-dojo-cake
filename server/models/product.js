const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator=require("mongoose-unique-validator");

const ProductSchema = new Schema({
  baker_name: {type: String, required: [true,'provide baker_name!']},
  img_url: {type: String},
  rates: [{type: Schema.Types.ObjectId, ref: 'Rate'}],
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Product', ProductSchema);
