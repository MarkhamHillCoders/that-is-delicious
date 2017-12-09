const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It Works!');
  // res.json(req.query);
  res.render("hello", {
    name: 'Daniel',
    dog: 'Hulk'
    // req.query.dog - locals
  });
});

router.get('reverse/:name', (req, res) =>{
  const reverse = [...req.param.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
