var regEmail = document.querySelector('.register-email-input');
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


regBtn.addEventListener('click', function(){
    var user = new User(regEmail.value, regUsername.value, regLastName.value, regBirth.value, regPassword.value);

    console.log(user);
    if (typeof(Storage) !== 'undefined'){
        // Store user
        localStorage.setItem(regUsername.value, JSON.stringify(user));
        // Retrieve


    }

});


