const express = require('express');
const router = express.Router();
const { Getblogs, Addblogs, Updateblogs, Deleteblogs } = require('../controllers/blogController')

router.get('/',  Getblogs)

router.post('/', Addblogs)

router.put('/:id', Updateblogs)

router.delete('/:id', Deleteblogs)

module.exports = router