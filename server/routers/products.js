const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/', function (req, res){
  Product.find({}, function (err, foundProduct){
    res.json(foundProduct);
  })
})

router.get('/:productId', function (req, res){
  // urlのパラメータを格納（リクエスト時）
  const productId = req.params.productId;
  Product.findById(productId, function (err, foundProduct){
    if(err) {
      return res.status(422).send({ errors: [{ title: 'product error', detail: 'product not found', }] })
    }
    return res.json(foundProduct);
  })
})

module.exports = router;