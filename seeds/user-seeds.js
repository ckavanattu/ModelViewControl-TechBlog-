// const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'johnWick',
    password: 'password111'
  },
  {
    username: 'johnWick2',
    password: 'password222'
  },
  {
    username: 'johnWick3',
    password: 'password333'
  },
  {
    username: 'johnWick4',
    password: 'password444'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;