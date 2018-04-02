function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./js/accounts.js');


var getName = document.querySelector('.username-login-input');
var getPass = document.querySelector('.password-login-input');
var actionButton = document.querySelector('.login-button');
var isThere = false;

actionButton.addEventListener('click', function () {
    for (var i = 0; i < accounts.length; i++) {
        if (getName.value === accounts[i].username && getPass.value === accounts[i].password) {
            isThere = true;
        }

    }
    if (isThere === true){
        window.open("../html/success.html", '_self');
    } else {
        alert("Wrong");
    }
})



/*
window.open("../html/success.html", '_self');

        switch(getName.value === accounts[i].username && getPass.value === accounts[i].password){
            case true:
                window.open("../html/success.html", "_self");
                break;
            default:
                alert("Sorry, username or password are incorrect.");
                break;
        }

*/
