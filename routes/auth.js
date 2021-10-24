const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');

router.post('/login', function(req, res, next) {
  // !valid
  const { login, pwd } = req.body;
  const user = { login: 'lalala', pwd: 123 }; 

  const result = authCtrl.login(user.login, user.pwd);

  if (user.login !== login || user.pwd !== pwd) {
    res.json({ status: 'invalid auth' });
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
