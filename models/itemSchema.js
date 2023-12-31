const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 },
  imageUrl: String, 
  flavor: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = itemSchema;
