class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `UserName: ${this.username}`
    }

    static createId(){
        return `123`
    }
}

let tea = new User("gourab")

console.log(tea.createId())