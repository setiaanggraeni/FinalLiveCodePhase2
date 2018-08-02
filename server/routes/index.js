var express = require('express');
var router = express.Router();
const {register, login} = require('../controllers/userController')

/* GET home page. */
router.get('/', function(err, res){
  res.send('Hallo there! Setia')
})
router.post('/register', register)
      .post('/login', login)

module.exports = router;
