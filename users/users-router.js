const router = require('express').Router();

const Users = require('../users/users-model.js');


router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(user => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
  .then(user => {
    if (user) {
      Users.update(changes, id)
      .then(updatedUser => {
        res.json(updatedUser);
      });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});
module.exports = router;