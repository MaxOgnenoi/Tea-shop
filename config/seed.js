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
      name: 'Golden Monkey Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/GoldenMonkey20221025_ArtofTea_0012_800x.jpg?v=1666945613',
      flavor: "TASTING NOTES: AMBER, MOLASSES, PISTACHIO",
    },
    {
      name: 'English Breakfast Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/20200312_ArtofTea__AudreyMa_0284_Web_1200x.jpg?v=1633472260',
      flavor: "TASTING NOTES: MALTY, ROBUST, SMOOTH",
    },
    {
      name: 'Summer Peach Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/SUMMER_PEACH_1200x.jpg?v=1582325253',
      flavor: "TASTING NOTES: FRUITY, ROUND, SWEET",
    },
    {
      name: 'Tali\'s Masala Chai Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/20200206_ArtofTea__AudreyMa-0028_Web_1200x.jpg?v=1633472731',
      flavor: "TASTING NOTES: ROUND, SAVORY, SPICE",
    },
    {
      name: 'Garden of Eden Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/GARDEN_OF_EDEN_1200x.jpg?v=1582322882',
      flavor: "TASTING NOTES: BRIGHT, FRUITY, TROPICAL",
    },
    {
      name: 'Earl Grey Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/EARL_GREY_1200x.jpg?v=1582320345',
      flavor: "TASTING NOTES: BOLD, CITRUS, FLORAL",
    },
    {
      name: 'Passionfruit Jasmine Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/PASSIONFRUIT_JASMINE_1200x.jpg?v=1582324567',
      flavor: "TASTING NOTES: BRISK, FLORAL, TROPICAL",
    },
    {
      name: 'Big Sur Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/BIG_SUR_1200x.jpg?v=1582319830',
      flavor: "TASTING NOTES: CITRUS, CREAMY, MINT",
    },
    {
      name: 'Assam Gold Tea',
      category: categories[0],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/Assam20221025_ArtofTea_0010_1200x.jpg?v=1666945408',
      flavor: "TASTING NOTES: MALTY, RICH, SMOOTH",
    },
    {
      name: 'Cleanse Tea',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/CLEANSE_1200x.jpg?v=1582760796',
      flavor: "TASTING NOTES: BERRY, CITRUS, SPICE",
    },
    {
      name: 'Sencha Cherry Blossom',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/20210520_ArtofTea__AudreyMa_0629_1_86c770a1-f796-42af-ae53-b7d6430c34c3_1200x.jpg?v=1649696565',
      flavor: "TASTING NOTES: CREAMY, FRESH, SWEET, TART",
    },
    {
      name: 'Happy Tea',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/HAPPY_TEA_1200x.jpg?v=1628903627',
      flavor: "TASTING NOTES: BERRY, FRUITY, LIGHT",
    },
    {
      name: 'Jasmine Pearls',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/JASMINE_PEARLS_1200x.jpg?v=1633472514',
      flavor: "TASTING NOTES: CRISP, FLORAL, FRESH",
    },
    {
      name: 'Meyer Lemon Tea',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/MEYER_LEMON_1200x.jpg?v=1582491502',
      flavor: "TASTING NOTES: CITRUS, GRASSY, SWEET",
    },
    {
      name: 'Liquid Jade Tea',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/LIQUID_JADE_1200x.jpg?v=1582490954',
      flavor: "TASTING NOTES: CITRUS, CRISP, HONEY",
    },
    {
      name: 'Green Pomegranate Tea',
      category: categories[1],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/GREEN_POMEGRANATE_3bdca8a2-69e6-4aca-9237-3c18df361537_1200x.jpg?v=1582745074',
      flavor: "TASTING NOTES: FRUITY, SWEET, TART",
    },
    {
      name: 'Caramelized Pear Tea',
      category: categories[2],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/CARAMELIZED_PEAR_1200x.jpg?v=1582509245',
      flavor: "TASTING NOTES: FRUITY, ROUND, SWEET",
    },
    {
      name: 'Egyptian Chamomile Tea',
      category: categories[2],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/EGYPTIAN_CHAMOMILE_1200x.jpg?v=1582526775',
      flavor: "TASTING NOTES: CALMING, ROUND, SWEET",
    },
    {
      name: 'Bright Eyed Blend',
      category: categories[2],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/BRIGHT_EYED_1200x.jpg?v=1582519107',
      flavor: "TASTING NOTES: EARTHY, SAVORY, SPICE",
    },
    {
      name: 'Glow Blend',
      category: categories[2],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/THROAT_THERAPY_1200x.jpg?v=1582524045',
      flavor: "TASTING NOTES: CITRUS, MINTY, SMOOTH",
    },
    {
      name: 'Breathe Blend',
      category: categories[2],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/BREATHE_1200x.jpg?v=1582574035',
      flavor: "TASTING NOTES: CITRUS, EARTHY, SPICE",
    },
    {
      name: 'Himalayan White Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/files/20230619_ArtofTeaEcom_0074_1200x.jpg?v=1687276860',
      flavor: "TASTING NOTES: HONEY, IRIS, ROUND",
    },
    {
      name: 'White Coconut Crème Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/WHITE_COCONUT_CREME_1200x.jpg?v=1633472848',
      flavor: "TASTING NOTES: CREAMY, SMOOTH, SWEET",
    },
    {
      name: 'Silver Needle Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/SILVER_NEEDLE_1200x.jpg?v=1582494823',
      flavor: "TASTING NOTES: ARTICHOKE, HONEYSUCKLE, SAGE",
    },
    {
      name: 'White Peach Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/WHITE_PEACH_1200x.jpg?v=1582505609',
      flavor: "TASTING NOTES: CRISP, DELICATE, FRUITY",
    },
    {
      name: 'Sakura Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/SAKURA_1200x.jpg?v=1582504566',
      flavor: "TASTING NOTES: FLORAL, SOFT, SWEET",
    },
    {
      name: 'Tuscany Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/TUSCANY_1200x.jpg?v=1582503407',
      flavor: "TASTING NOTES: DELICATE, FLORAL, MINTY",
    },
    {
      name: 'Liquid Jade Tea',
      category: categories[3],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/LIQUID_JADE_1200x.jpg?v=1582490954',
      flavor: "TASTING NOTES: CITRUS, CRISP, HONEY",
    },
    {
      name: 'Peach Oolong Tea',
      category: categories[4],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/12_00PM_365eb92e-c3c6-49d3-b5be-c5f6b07e0fb0_1200x.jpg?v=1623182545',
      flavor: "TASTING NOTES: FRUITY, HONEY, WOODSY",
    },
    {
      name: 'Crimson Oolong Tea',
      category: categories[4],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/CRIMSON_OOLONG_1_1200x.jpg?v=1582492723',
      flavor: "TASTING NOTES: AGED BOURBON, HONEY, ORANGE BLOSSOM, SPICE",
    },
    {
      name: 'Blue Pineapple Tea',
      category: categories[4],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/20210711_ArtofTea__AudreyMa_0069_1200x.jpg?v=1626114566',
      flavor: "TASTING NOTES: BRIGHT, CITRUS, LYCHEE",
    },
    {
      name: 'Jasmine Ancient Beauty Tea',
      category: categories[4],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/JASMINE_ANCIENT_BEAUTY_1200x.jpg?v=1582493145',
      flavor: "TASTING NOTES: AMBER, JASMINE, PEACH",
    },
    {
      name: 'Mandarin Silk Tea',
      category: categories[4],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/MANDARIN_SILK_1200x.jpg?v=1582493920',
      flavor: "TASTING NOTES: CITRUS, CREAMY, LIGHT",
    },
    {
      name: 'Plum Oolong Tea',
      category: categories[4],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/PLUM_OOLONG_1200x.jpg?v=1582494613',
      flavor: "TASTING NOTES: FRUITY, FULL, TART",
    },
    {
      name: 'Crème Brûlée',
      category: categories[5],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/9_00PM_143d81a0-c53f-4794-962c-4768236404f0_1200x.jpg?v=1623183202',
      flavor: "TASTING NOTES: MINTY, ROUND, SWEET",
    },
    {
      name: 'Vanilla Berry Truffle Tea',
      category: categories[5],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/VANILLA_BERRY_TRUFFLE_1200x.jpg?v=1582510059',
      flavor: "TASTING NOTES: CREAMY, SWEET, TART",
    },
    {
      name: 'Caramelized Pear Tea',
      category: categories[5],
      price: 5.95,
      imageUrl: 'https://www.artoftea.com/cdn/shop/products/CARAMELIZED_PEAR_1200x.jpg?v=1582509245',
      flavor: "TASTING NOTES: FRUITY, ROUND, SWEET",
    },
    {
      name: 'Lavender Chamomile Rose Blend',
      category: categories[5],
      price: 5.95,
      imageUrl: 'TASTING NOTES: FLORAL, FRESH, HONEY',
      flavor: "https://www.artoftea.com/cdn/shop/products/6_00PM_ab9b71cf-d31d-43f8-ac2c-a6ba9313e5b7_1200x.jpg?v=1623182945",
    },
  ]);

  
  process.exit();

})();