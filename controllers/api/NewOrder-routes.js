const router = require('express').Router();
const { NewOrder } = require('../../models');

//Get all orders
router.get('/', (req, res) => {
    NewOrder.findAll({
        attributes: ['id','menuitem', 'addon', 'nickname', 'created_at'],
        order: [['created_at', 'DESC']],
        })

        .then(dbNewOrderData => res.json(dbNewOrderData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

});

//Get a single order
NewOrder.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'menuitem',
      'addon',
      'created_at',
    ],
  })
    .then(dbNewOrderData => {
      if (!dbNewOrderData) {
        res.status(404).json({ message: 'No order found with this id' });
        return;
      }
      res.json(dbNewOrderData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

//Post request for New Orders
router.post('/', (req, res) => {
    NewOrder.create({
        id: req.body.id,
        menuitem: req.body.menuitem,
        addon: req.body.addon,
        nickname: req.body.nickname
       })
        .then(dbNewOrderData => res.json(dbNewOrderData))
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
       

});

// Delete request for Orders by id
router.delete('/:id', (req, res) => {
    NewOrder.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbNewOrderData => {
          if (!dbNewOrderData) {
            res.status(404).json({ message: 'No order found with this id' });
            return;
          }
          res.json(dbNewOrderData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

});

module.exports = router;
