const Sequelize = require('sequelize');
// Nome do banco, usuario ex root, e senha do banco
const connection = new Sequelize('gdwqfgqqs', 'root', 'fqwasd31241asfa', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection;