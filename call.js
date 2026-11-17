function setUserName(username){
    this.username = username;
    console.log("called---");
    
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

let chai = new createUser("gourab","g@g.com",123)

console.log(chai);
