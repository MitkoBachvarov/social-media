const mongoose = require('mongoose');
const control = require('../js/Control-registration-page');

const Schema = mongoose.Schema;

let regEmail = document.querySelector('.register-email-input');
let regUsername = document.querySelector('.register-username-input');
let regFirstName = document.querySelector('.register-firstName-input');
let regLastName = document.querySelector('.register-lastName-input');
let regBirth = document.querySelector('.register-birth-input');
let regPassword = document.querySelector('.register-password-input');
let confirmPass = document.querySelector('.register-confirmPass-input');
let regBtn = document.querySelector('.button-register-account');

let Users = new Schema(
    {
        email: regEmail.value,
        username: regUsername.value,
        fname: regFirstName.value,
        lname: regLastName.value,
        birth: regBirth.value,
        pass: regPassword.value
    },
    {
        regEmail: document.querySelector('.register-email-input'),
        regUsername: document.querySelector('.register-username-input'),
        regFirstName: document.querySelector('.register-firstName-input'),
        regLastName: document.querySelector('.register-lastName-input'),
        regBirth: document.querySelector('.register-birth-input'),
    }

);


Users
    .virtual('name')
    .get(function () {
        return this.fname + ' , ' + this.lname;
    });


module.exports = mongoose.model('User', Users);

/*
        email: regEmail.value,
        username: regUsername.value,
        fname: regFirstName.value,
        lname: regLastName.value,
        birth: regBirth.value,
        pass: regPassword.value

 */