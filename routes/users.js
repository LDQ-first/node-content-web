const express = require('express')
const router = express.Router()

const users = []

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.json(users)
  })
  .post((req, res, next) => {
    const user = req.body
    users.push(user)
    res.json(users)
  })

module.exports = router
