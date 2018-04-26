

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';


var regEmail = window.document.querySelector('.register-email-input');
var regUsername = document.querySelector('.register-username-input');
var regFirstName = document.querySelector('.register-firstName-input');
var regLastName = document.querySelector('.register-lastName-input');
var regBirth = document.querySelector('.register-birth-input');
var regPassword = document.querySelector('.register-password-input');
var confirmPass = document.querySelector('.register-confirmPass-input');
var regBtn = document.querySelector('.button-register-account');

function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./js/accounts.js');
include('../Database/accounts.js');


regBtn.addEventListener('click', function(){

    var user = {
        email: regEmail.value,
        username: regUsername.value,
        fname: regFirstName.value,
        lname: regLastName.value,
        birth: regBirth.value,
        pass: regPassword.value
    };

    MongoClient.connect(url, (err,db) =>{
        if (err) throw err;
        var dbo = db.db('accounts');
        dbo.collection('users').insertOne(user, (err, res) =>{})
        if(err) throw err;
        console.log('1 document inserted');
        db.close();
    });





    /*
    var user = new User(regEmail.value, regUsername.value, regLastName.value, regBirth.value, regPassword.value);
    dbo.collection('users').insertOne(user, (err, res) => {
        if (err) throw err;
        console.log("1 User added");
        db.close();
    })

    console.log(user);
    if (typeof(Storage) !== 'undefined'){
        // Store user
        localStorage.setItem(regUsername.value, JSON.stringify(user));
        // Retrieve


    }
    */

});


