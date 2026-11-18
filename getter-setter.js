class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `!!!not accessable!!!  ${this._password}`
    }
    set password(value){
        this._password = value
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }
}

let chai  = new User("a@abc.com","123")
console.log(chai.email);
console.log(chai.password);
