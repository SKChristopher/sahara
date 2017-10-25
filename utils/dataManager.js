const inventory = require('./../data/inventory');
const Item = require('./../models/item');
const itemController = require('./../controllers/item');

const dataManager = {
  post: (req, res, next) => {
    Item.findOne({ itemNum: 100 }, (err, result) => {
      if (result) return;
      for (let i = 0; i < inventory.length; i += 1) {
        const objectt = {
          itemNum: inventory[i].itemNum,
          name: inventory[i].name,
          description: inventory[i].description,
          price: inventory[i].price
        }
        itemController.create(objectt);
      }
    });
    next();
  }
}

module.exports = dataManager;
