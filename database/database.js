const Sequelize = require('sequelize');
// Nome do banco, usuario ex root, e senha do banco
const connection = new Sequelize('nameBank', 'root', '12312412', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;