const router = require('express').Router();

// import routes
const apiRoutes = require('./api');

// prefix all routes
router.use('/api', apiRoutes);

// send message for wrong routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;