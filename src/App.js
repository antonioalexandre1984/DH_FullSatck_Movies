const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const port = 5000;

// view engine setup
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//const { Sequelize } = require('sequelize');


/* const sequelize = new Sequelize('movies_db_revisao', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});  
async function autenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfullyuuuu.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

autenticate();
 */
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);


app.listen(port, () => (console.log(`Server runing on port ${port}. Happy Hacking 😃!`)));