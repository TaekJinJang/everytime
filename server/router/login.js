const express = require('express');
const router = express.Router();
const db = require('../schema/db');
///login/
router.route('/')
  .post((req, res) => {
  })
  .get((req, res) => {
    //req.id을 찾는다.
    let query = `SELECT ${req.id} FROM school.user;`;
    db.connect();
    db.query(query, (err, result) => console.log(result))
    res.send('result');
  })

module.exports = router;