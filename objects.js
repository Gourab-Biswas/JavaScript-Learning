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

// let obj1 ={a:10,b:20}
// let obj2 ={b:30,c:40}
// Object.assign(obj1,obj2)
// Object.freeze(obj2)
// console.log(obj1)
// console.log(obj2)
// obj2.x = 30
// console.log(obj1)
// console.log(obj2)

//! interview Questions

//? Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// let addGrade = (student, sub, marks) => {
//      if(!student.grades){
//         student.grades = {}
//      }

//     student.grades[sub] = marks;

// };

// addGrade(student, "computer", 34);
// console.log(student)

//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };

// let o1 = Object.keys(objA)
// let o2 = Object.keys(objB)

// if(o1.length !== o2.length){
//     console.log("not equal")
//     return;
// }
// for(let i in objA){
//     console.log(objA[i]===objB[i])
// }

//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

// let inputArray = [
//   { id: 1, name: "Alice" },
//   { id: 5, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// let result = {}

// let arrayToObj = (inputArray)=>{
//     // console.log(inputArray[0].id,inputArray[0])
//     for(let i of inputArray){
//         // console.log(i.id,i)
//         result[i.id] = i

//         console.log("-----")
//     }
// }

// arrayToObj(inputArray)
// console.log(result)

let student = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 5,
    name: "b",
  },
  {
    id: 0,
    name: "c",
  },
];

let obj = {}
for(let i of student){
    obj[i.id]=i
}
console.log(obj)