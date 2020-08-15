const models = require('../models/models');

module.exports = {
  get: (req, res) => {
    models.getAll((err, results) => {
      if (err) {
        console.log('SERVER GET FAILS', err);
      }
      console.log('SERVER GET SUCCESS');
      res.status(200).send(results);
    });
  }

};