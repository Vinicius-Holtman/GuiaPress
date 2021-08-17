const Sequelize = require('sequelize');
// Nome do banco, usuario ex root, e senha do banco
const connection = new Sequelize('fwefwe', 'root', '2312321', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection;