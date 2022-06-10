const dbconn=require('./db')
const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/moveinsync";

    router.get('/getroute1', (req, res, next)=>{
         db.collection('data').insertOne({ text: req.body.text }, function (err,info) {res.json(info.ops[0])})
    
        
    
        res.send({'message': 'User Joined 1'});
    });
    router.get('/getroute2', (req, res, next)=>{
         db.collection('data').insertOne({ text: req.body.text }, function (err,info) {res.json(info.ops[0])})
    
        
    
        res.send({'message': 'User Joined 1'});
    });
    router.post('/getroute3', (req, res, next)=>{
         db.collection('data').insertOne({ text: req.body.text }, function (err,info) {res.json(info.ops[0])})
    
        
    
        res.send({'message': 'User Joined 1'});
    });

module.exports = router;
