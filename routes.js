const url = require('url');
const dbconn=require('./db')
const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
    var myurl = "mongodb://localhost:27017/moveinsync";
    MongoClient.connect(myurl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("moveinsync");

    router.post('/addcustomerrecord', (req, res, next)=>{
         dbo.collection('customers').insertOne({ text: req.body.text }, 
            function (err,info) { 
                if (err) throw err; console.log(JSON.stringify(info));
            })     
        res.send({'message': 'Record inserted'});
    })

    router.post('/addporecord', (req, res, next)=>{
        dbo.collection('purchaseorders').insertOne({ text: req.body.text },
             function (err,info) { 
                if (err) throw err; 
                console.log(JSON.stringify(info));
            })  
          res.send({'message': 'Record inserted'});
   })

   router.post('/addshippingdetail', (req, res, next)=>{
    dbo.collection('shippingdetails').insertOne({ text: req.body.text }, 
        function (err,info) { 
            if (err) throw err; console.log(JSON.stringify(info));
        })
      
   res.send({'message': 'Record inserted'});
})

    router.get('/getcustomer/:name', (req, res, next)=>{
         dbo.collection('customers').find( { City: req.params.name },
            function (err,info) { 
                if (err) throw err; console.log(JSON.stringify(info));
            } )
    
        console.log(req.params.name)
    
        res.send({'message': 'Successful'});
    });
    router.get('/getcustomerswithPO', (req, res, next)=>{
       
        dbo.collection('customers').aggregate([
            { $lookup:
               {
                 from: 'purchaseorders',
                 localField: 'CustomerID',
                 foreignField: 'CustomerID',
                 as: 'purchaseorderdetails'
            
            }
          }
         ]).toArray(function(err, res) {
         if (err) throw err;
         console.log(JSON.stringify(res));
         })
    router.get('/getcustomerswithSD', (req, res, next)=>{
      
        dbo.collection('customers').aggregate([
            { $lookup:
               {
                 from: 'purchaseorders',
                 localField: 'CustomerID',
                 foreignField: 'CustomerID',
                 as: 'purchaseorderdetails'
            
            }
          }
         
         ]).toArray(function(err, res) {
         if (err) throw err;
         console.log(JSON.stringify(res));
         });
         dbo.collection('purchaseorders'.aggregate([
            { $lookup:
                {
                  from: 'shippingdetails',
                  localField: 'PurchaseOrderID',
                  foreignField: 'PurchaseOrderID',
                  as: 'shipmentdetails'
             
             }
           }

        ])).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        });
        
    
        res.send({'message': "Successful"});
    });

module.exports = router;
db.close();
});
});
  

