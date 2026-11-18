// class User{
//     constructor(email,password){
//         this.email = email
//         this.password = password
//     }

//     get password(){
//         return `!!!not accessable!!!  ${this._password}`
//     }
//     set password(value){
//         this._password = value
//     }
//     get email(){
//         return `${this._email.toUpperCase()}`
//     }
//     set email(value){
//         this._email = value
//     }
// }

// let chai  = new User("a@abc.com","123")
// console.log(chai.email);
// console.log(chai.password);




//! Function Based Syntax


// function User(email,pass){
//     this._email = email
//     this._pass = pass

//     Object.defineProperty(this,"email",{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this,"pass",{
//         get: function(){
//             return `now available`
//         },
//         set: function(value){
//             this._pass = value
//         }
//     })
// }

// let chai = new User("c@chai.com",123)

// console.log(chai.email)
// console.log(chai.pass)


//! Object Based Syntax


let User = {
    _email:"a@abc.com",
    _pass:123,
    get email(){
        return ` email is => ${this._email.toUpperCase()}`
    },
    set email(value){
        this._email = value
    }
}

let cahi = Object.create(User)

console.log(cahi.email)