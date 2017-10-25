const Inventory = require('./../data/inventory');
const Item = require('./../models/item');
const itemController = require('./../controllers/item');

const dataManager = {
  post: (req, res, next) => {
    Item.findOne({ itemNum: 100 }, (err, result) => {
      if (result) return;
      for (let i = 0; i < Inventory.length; i += 1) {
        const objectt = {
          itemNum: Inventory[i].itemNum,
          name: Inventory[i].name,
          description: Inventory[i].description,
          price: Inventory[i].price
        }
        itemController.create(objectt);
      }
    });
    next();
  }
}

module.exports = dataManager;
