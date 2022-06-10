const url = require('url');
const dbconn=require('./db')
const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
    var myurl = "mongodb://localhost:27017/moveinsync";

    router.get('/addcustomerrecord', (req, res, next)=>{
         db.collection('customers').insertOne({ text: req.body.text }, function (err,info) {res.json(info.ops[0])})
           
    
        res.send({'message': 'Record inserted'});
    });
    router.get('/addporecord', (req, res, next)=>{
        db.collection('purchaseorders').insertOne({ text: req.body.text }, function (err,info) {res.json(info.ops[0])})
          
   
       res.send({'message': 'Record inserted'});
   });
   router.get('/addshippingdetail', (req, res, next)=>{
    db.collection('shippingdetails').insertOne({ text: req.body.text }, function (err,info) {res.json(info.ops[0])})
      

   res.send({'message': 'Record inserted'});
});

    router.get('/getcustomer/:name', (req, res, next)=>{
         db.collection('customers').find( { City: req.params.name } )
    
        console.log(req.params.name)
    
        res.send({'message': 'Successful'});
    });
    router.post('/getcustomerswithPO', (req, res, next)=>{
        db.collection('purchaseorders').find().toArray(function (err, items) {res.send(items)})
    
        
    
        res.send({'message': 'Successful'});
    });
    router.post('/getcustomerswithSD', (req, res, next)=>{
        db.collection('shippingdetails').find().toArray(function (err, items) {res.send(items)})
    
        
    
        res.send({'message': "Successful"});
    });

module.exports = router;
