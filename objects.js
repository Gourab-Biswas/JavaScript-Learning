// let idType = "studentId"
// let product = {
//     [idType] : 23,
//     name : "laptop",
//     greet:()=>{
//         console.log(`my ${idType} is ${product[idType]} and my name is ${product.name}`)
//     }
    
// }

// console.log(product.id)
// console.log(product["name"])
// product.brand = "asus"
// product["price"] = 99
// product["greet"] = ()=>{console.log("hii")}
// product.greet()

// let product2 = {}
// Object.assign(product2,product)

// let product2 =Object.assign({},product)

// product2 = product
// product2.price = 99
// console.log("product 1",product)
// console.log("product 2",product2)


// //! This Keyword
// let person = {
//     name:"GB",
//     age:22,
//     phone:123,
//     greet:function(){
//         console.log(this)
//     }
// }
// person.greet()

// "use strict";
// function add(){
//     console.log(this)
// }
// add()



// let person = {
//     name:"GB",
//     age:22,
//     phone:123,
//     greet:function(){
//         console.log(this)
//     }
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// console.log(person.hasOwnProperty("age"))

let obj1 ={a:10,b:20}
let obj2 ={b:30,c:40}
Object.assign(obj1,obj2)
Object.freeze(obj2)
console.log(obj1)
console.log(obj2)
obj2.x = 30
console.log(obj1)
console.log(obj2)