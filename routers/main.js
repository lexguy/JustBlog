/**
 created by Lex. 2019/9/25
 **/
const express = require('express');

let router = express.Router();

router.get('/user', function (req, res, next) {
  res.send('首页')
});

module.exports = router;
