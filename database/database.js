const Sequelize = require('sequelize');
// Nome do banco, usuario ex root, e senha do banco
const connection = new Sequelize('wqfqw', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;