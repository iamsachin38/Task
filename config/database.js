const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cheackbox', 'root', 'Sachin@2002', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
