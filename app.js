var express = require('express');
var app = express();
var myrouter=require('./routes')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/moveinsync";

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.use(myrouter);
  app.listen(8000);
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },function(err, db) {
     if (err) throw err;
    db.db();
    app.listen(8000);
    console.log("Database created!");
  });  