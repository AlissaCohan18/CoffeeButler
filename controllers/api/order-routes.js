const router = require('express').Router();

const { Order } = require('../../models');


//const withAuth = require('../../utils/auth');


//Get all orders
router.get('/', (req, res) => {
    Order.findAll({
        attributes: ['id','drink','created_at'],
        order: [['created_at', 'DESC']],
        })

        .then(dborderData => res.json(dborderData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.get('/:id:', (req, res) => {
//Get a single order
Order.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'drink',
      'created_at',
    ],
  })
    .then(dborderData => {
      if (!dborderData) {
        res.status(404).json({ message: 'No order found with this id' });
        return;
      }
      res.json(dborderData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

//Post request for new orders
router.post('/dashboard', (req, res) => {
    Order.create({
        drink: req.body.drink
  //router.post('/dashboard', withAuth, (req, res) => {
})
        .then(dborderData => res.json(dborderData))
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
       

});

// PUT - Update existing order
//router.put('/:id', withAuth, (req, res) => {
router.put('/:id', (req, res) => {
  Order.update(req.body, {
    where: {
    id: req.params.id
    }
  })
    .then(dborderData => {
    if (!dborderData[0]) {
    res.status(404).json({ message: 'No order found with this id' });
    return;
    }
    res.json(dborderData);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
   
// Delete request for orders by id

router.delete('/:id', (req, res) => {
    Order.destroy({

//router.delete('/:id', withAuth, (req, res) => {

        where: {
          id: req.params.id
        }
      })
        .then(dborderData => {
          if (!dborderData) {
            res.status(404).json({ message: 'No order found with this id' });
            return;
          }
          res.json(dborderData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

});

module.exports = router;
