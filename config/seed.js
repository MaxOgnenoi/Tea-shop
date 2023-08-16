require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Black Tea', sortOrder: 10 },
    { name: 'Green Tea', sortOrder: 20 },
    { name: 'Herbal Tea', sortOrder: 30 },
    { name: 'White Tea', sortOrder: 40 },
    { name: 'Oolong Teas', sortOrder: 50 },
    { name: 'Caffeine free Teas', sortOrder: 60 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Hamburger',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/GoldenMonkey20221025_ArtofTea_0012_800x.jpg?v=1666945613',

    },
    {
      name: 'Turkey Sandwich', category: categories[0], price: 6.95
    },
    {
      name: 'Hot Dog', category: categories[0], price: 3.95
    },
    { name: 'Crab Plate', category: categories[1], price: 14.95 },
    { name: 'Fried Shrimp', category: categories[1], price: 13.95 },
    { name: 'Whole Lobster', category: categories[1], price: 25.95 },
    { name: 'Taco', category: categories[2], price: 1.95 },
    { name: 'Burrito', category: categories[2], price: 4.95 },
    { name: 'Pizza Slice', category: categories[3], price: 3.95 },
    { name: 'Spaghetti', category: categories[3], price: 7.95 },
    { name: 'Garlic Bread', category: categories[3], price: 1.95 },
    { name: 'French Fries', category: categories[4], price: 2.95 },
    { name: 'Green Salad', category: categories[4], price: 3.95 },
    { name: 'Ice Cream', category: categories[5], price: 1.95 },
    { name: 'Cup Cake', category: categories[5], price: 0.95 },
    { name: 'Custard', category: categories[5], price: 2.95 },
    { name: 'Strawberry Shortcake', category: categories[5], price: 3.95 },

  ]);

  console.log('Categories:', categories); // Add this line to log categories
  console.log('Items:', items); // Keep the existing line to log items
  process.exit();

})();