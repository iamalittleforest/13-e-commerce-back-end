// import Category model
const { Category } = require('../models');

// array of data for Category class
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// create and insert mulitple instances of Category using categoryData
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
