// dependencies
const express = require('express');

// import routes and connection
const routes = require('./routes');
const sequelize = require('./config/connection');

// create the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// set up the Express app to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up routes
app.use(routes);

// set up connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
