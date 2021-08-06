const Sequelize = require('sequelize');
// Nome do banco, usuario ex root, e senha do banco
const connection = new Sequelize('nomeEx', 'root', '3214123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;