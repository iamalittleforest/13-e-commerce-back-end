// import Tag model
const { Tag } = require('../models');

// array of data for Tag class
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// create and insert mulitple instances of Tag using tagData
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
