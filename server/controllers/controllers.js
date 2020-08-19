const models = require('../models/models');

module.exports = {
  get: (req, res) => {
    var id = req.url.split('/')[3];
    // console.log('ID', id);
    models.getAll(id, (err, results) => {
      if (err) {
        console.log('SERVER GET FAILS', err);
      }
      console.log('SERVER GET SUCCESS');
      res.status(200).send(results);
    });
  }

};