var accounts = [mitkobachvarov,tonyTheGreat, gero]

function User(email,username,firstName,lastName, birthdate,password){
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.password = password;
    }

function createNewObject(inp){
    inp = new User(JSON.parse(localStorage.getItem('user')));
    console.log("Works");
}

var mitkobachvarov = {
    email: "mitkobachvarov@ymail.com",
    username : "mitkobachvarov",
    firstName: "Mitko",
    lastName: "Bachvarov",
    age: 23,
    password : "hello"

};

var tonyTheGreat = {
    email: "tony@abv.bg",
    username: "tonyTheGreat",
    firstName: "Tony",
    lastName: "Stark",
    age: 23,
    password: "byebye"

};

var gero = {
    email: "gero@gmail.com",
    username: "gero",
    firstName: "Gero",
    lastName: "Stoev",
    age: 25,
    password: "hell"
};
