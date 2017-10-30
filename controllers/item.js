const Item = require('./../models/item');

const itemController = {
  create: (req, res) => {
    Item.findOne({ itemNum: req.itemNum }, (err, result) => {
      if (result) return res.status(200).send(false);
      else if (req.itemNum && req.name && req.price) {
        Item.create({
          itemNum: req.itemNum,
          name: req.name,
          price: req.price,
          description: req.description,
        });
      } else return res.status(200).send(false);
    });
  },
  
  get: (req, res) => {
    const query = Item.find({}).sort({ itemNum: 1 });
    query.exec((err, items) => {
      if (err) res.send(err);
      return res.send(items);
    });
  },
}

module.exports = itemController;
