const models = require('../models/models');

module.exports = {
  get: (req, res) => {
    console.log('GET REQUEST', req.body);
    models.getAll((err, results) => {
      if (err) {
        res.send('CONTROLLER GET FAILS', err);
      }
      // res.send('CONTROLLER GET SUCCESS');
      res.send(results);
    });
  }

};