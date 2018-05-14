const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://Admin:admin@ds119160.mlab.com:19160/social_hub';
const async = require('async');

const mongoose = require('mongoose');
const mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));


const user = require('../models/users.js');


let users = [];

let regEmail = document.querySelector('.register-email-input');
let regUsername = document.querySelector('.register-username-input');
let regFirstName = document.querySelector('.register-firstName-input');
let regLastName = document.querySelector('.register-lastName-input');
let regBirth = document.querySelector('.register-birth-input');
let regPassword = document.querySelector('.register-password-input');
let confirmPass = document.querySelector('.register-confirmPass-input');
let regBtn = document.querySelector('.button-register-account');

function userCreate(email, username, first_name, last_name, d_birth, cb){
    userdetail = {
        email: email,
        username: username,
        fname: first_name,
        lname:last_name,
        birth: d_birth
    };
    if(d_birth != false) userdetail.birth = d_birth;

    let user = new User(userdetail);

    user.save((err) => {
        if(err) {
            cb(err, null);
            return
        }
        console.log('New User: ' + user);
        users.push(user);
        cb(null, user)
    })
}



function createNewUser(cb) {
    async.parallel([
        function (callback) {
            userCreate(regEmail, regUsername, regFirstName, regLastName, regBirth, callback)
        }
    ])
};

regBtn.addEventListener('click',() => {
    async.series([
        createNewUser
    ])
});


mongoose.connection.close();




    /*
// Include the fields from the users.js
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

// Include users.js
include('./')

var regEmail = window.document.querySelector('.register-email-input');
var regUsername = document.querySelector('.register-username-input');
var regFirstName = document.querySelector('.register-firstName-input');
var regLastName = document.querySelector('.register-lastName-input');
var regBirth = document.querySelector('.register-birth-input');
var regPassword = document.querySelector('.register-password-input');
var confirmPass = document.querySelector('.register-confirmPass-input');
var regBtn = document.querySelector('.button-register-account');



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

});
*/










































