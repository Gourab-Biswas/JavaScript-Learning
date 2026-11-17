class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeuserName(){
        return this.username.toUpperCase()
    }
}

let chai = new User("gb","g@b.com","123")

console.log(chai.changeuserName())



