
function include(file){

    var script = document.createElement('script');
    script.src =  file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./js/accounts.js');


var getName = document.querySelector('.username-login-input');
var getPass = document.querySelector('.password-login-input');
var actionButton = document.querySelector('.login-button');


actionButton.addEventListener('click',function(){
    for(var i = 0; i < accounts.length; i++){

        if(getName.value === accounts[i].username){
            if(getPass.value === accounts[i].password){
            window.open("../html/success.html", '_self');

            }
        } else {
            alert("Sorry, username or password incorrect");

        }
    }
})
