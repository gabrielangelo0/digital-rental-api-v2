const sequelize = require('../config/database');
const Cars = require('./Car');
const Users = require('./User');

sequelize.sync({ alter: true })
.then(() => console.log('Database & tables created!'))
.catch(err => console.log(err));

module.exports = {
    Cars,
    Users,
};