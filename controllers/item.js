const Item = require('./../models/item.js');

const itemController = {
  create: (req, res) => {
    Item.findOne({ itemNum: req.itemNum }, (err, result) => {
      if (result) return res.status(200).send(false);
      else if (req.itemNum && req.name && req.price) {
        Item.create({
          itemNum: req.itemNum,
          name: req.name,
          description: req.description,
          price: req.price,
        });
      } else return res.status(200).send(false);
    });
  },
  
  get: (req, res) => {
    const query = Item.find({});
    query.exec((err, item) => {
      if (err) res.send(err);
      return res.send(item);
    });
  },
}

module.exports = itemController;
