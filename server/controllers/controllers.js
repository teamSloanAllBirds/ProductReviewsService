const models = require('../models/models');

module.exports = {
  get: (req, res) => {
    // console.log('GET REQUEST', req.body);
    models.getAll((err, results) => {
      if (err) {
        console.log('SERVER GET FAILS', err);
      }
      console.log('SERVER GET SUCCESS');
      res.send(results);
    });
  }

};