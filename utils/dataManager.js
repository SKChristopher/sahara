const Inventory = require('./../data/inventory.js');
const Item = require('./../models/item');
const itemController = require('./../controllers/item.js');

const dataManager = {
  post: (req, res, next) => {
    console.log('hello please respond please jesus christ');
    Item.findOne({ itemNum: 100 }, (err, result) => {
      if (result) return;
      for (let i = 0; i < Inventory.length; i += 1) {
        const objectt = {
          itemNum: Inventory[i].itemNum,
          name: Inventory[i].name,
          price: Inventory[i].price,
          description: Inventory[i].description,
        }
        itemController.create(objectt);
      }
    });
    next();
  }
}

module.exports = dataManager;
