// Importing framewoks
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Sequelize } = require('sequelize');
const config = require ('./config/config.json')

const path = require('path');

const app = express();

// CORS Management
// CORS is enabled for all origins 
app.use(cors());
/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})*/

// Connection to DataBase Mysql
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Increase security
app.use(helmet());

app.use(express.json());

const userRoutes = require('./routes/users');
const publicationRoutes = require('./routes/publications');
const commentRoutes = require('./routes/comments');

//Specifies the path to signup or login
app.use('/api/auth', userRoutes);
//Specifies the path for actions on the publications
app.use('/api/publications', publicationRoutes);
//Specifies the path for actions on the comments
app.use('/api/comments', commentRoutes);

module.exports = app;