const Purchase = require('./../models/purchase.js');

const purchaseController = {
  create: (req, res) => {
    Purchase.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      creditcard: req.body.creditcard,
      purchase: req.body.purchase,
    }, res.status(200).send(true));
  }
};

module.exports = purchaseController;
