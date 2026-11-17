// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeuserName(){
//         return this.username.toUpperCase()
//     }
// }

// let chai = new User("gb","g@b.com","123")

// console.log(chai.changeuserName())



//! ALTERNATE WAY [ BEHIND THE SCENE ]

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

let chai = new user("gb","g@b.com","123")

console.log(chai.encryptPassword())