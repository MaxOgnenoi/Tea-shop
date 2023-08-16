const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 },
  imageUrl: String, // Add the image field
}, {
  timestamps: true
});

module.exports = itemSchema;
