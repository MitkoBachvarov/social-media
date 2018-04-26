var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err,db) =>{
    if (err) throw err;
    var dbo = db.db('accounts');
    var myObj = { name: 'Company Inc', address: 'Highway 37'};
    dbo.collection('users').insertOne(myObj, (err, res) =>{})
    if(err) throw err;
    console.log('1 document inserted');
    db.close();
});