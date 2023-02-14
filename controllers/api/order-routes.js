const router = require('express').Router();
const { order } = require('../../models');
//const withAuth = require('../../utils/auth');

//Get all orders
router.get('/', (req, res) => {
    order.findAll({
        attributes: ['id','menuitem', 'addon', 'nickname', 'created_at'],
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
order.findOne({
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
  //router.post('/', withAuth, (req, res) => {
router.post('/', (req, res) => {
    order.create({
        id: req.body.id,
        menuitem: req.body.menuitem,
        addon: req.body.addon,
        nickname: req.body.nickname
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
  order.update(req.body, {
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
//router.delete('/:id', withAuth, (req, res) => {
router.delete('/:id',(req, res) => {
    order.destroy({
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
