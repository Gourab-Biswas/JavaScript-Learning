class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        return `UserName is: ${this.username}`
    }
}
class Teacher extends User{
    constructor(username,book){
        super(username)
        this.book = book
    }

    course(){
        return `the ${this.book} is added by ${this.username}`
    }
}

let chai = new User("chai")
console.log(chai)
console.log(chai.logMe())
let tea = new Teacher("tea","js")
console.log(tea)
console.log(tea.logMe())
console.log(tea.course())