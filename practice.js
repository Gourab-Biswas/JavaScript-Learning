// let abc = () =>{
//     setTimeout(()=>{
//         console.log("hiii")
//     },2000)
// }
// abc()

// let abc = () =>{
//     console.log("hlw wo0rld ");

// }

// setTimeout(()=>{
//     abc()
// },3000)

// let fun2 = () =>{
//     setTimeout(()=>{
//         console.log("fun 2 start and end")
//     },10)
// }
// let fun1 = () =>{
//     console.log("fun 1 start");
//     fun2()
//     console.log("fun 1 end");

// }
// fun1()

//? closore

// let outer = () => {
//   let x = "i am outer ";
//   return inner = () => {
//     console.log(x);
//   };
  
// };

// let fun = outer()
// fun()

//! es-2015

// let uname = "gourab"
// let age = 22

// // let person = {uname:uname,age:age}
// let person = {uname,age}
// console.log(person)

//* De-Structuring

// let numbers  = [10,20,30]
// // let [a,b,c]= numbers
// let [,b,]= numbers
// // console.log(a)
// console.log(b)
// let [a,b,c] = [10,20,30]
// console.log(a)

//* Swap 2 numbers

// let a = 10
// let b = 20;
// [a, b] = [b ,a];
// console.log(`a => ${a} --- b => ${b}`)


// const user = {uname:"gourab",age:22};

// // const name = user.name;
// const {uname,age} = user
// // const {uname:personname,age} = user //! re-name
// console.log(uname)
// console.log(age)

//* Spread Operator

// let num1 = [1,2,3]
// // let num2  = num1 ❌❌❌
// let num2  = [...num1] 
// num2.push(6)
// console.log("num 1",num1)
// console.log("num 2",num2)

// let num1  = [1,2,3];
// let num2 = [3,4,5];
// let num3 = [...num1,...num2];
// console.log(num3)

// let num1  = ["apple","banana"];

// num1.push(...["maqngo","guava"])
// console.log(num1)

// let str = "INDIA"
// // console.log(str.split(""))
// let country = [...str]
// console.log(country)

// let fun  = (...x) =>{
//      return x.reduce((acc,val)=>{
//         return acc += val
//     },0)
// }
// console.log(fun(10,5,2,3))


// let fun  = (...x) =>{
//     let sum = 0
//     for(let i of x){
//         sum+=i
//     }
//     return sum
// }
// console.log(fun(10,2,3))

//! Es - 2017

// let str = "gourab"

// console.log(str.padStart(10,"."))
// console.log(str.padEnd(10))

// let num = [1,2,3,]
// console.log(num)

//! Es - 2018

// let numbers  = [1,2,3,4]
// let [a,b,...c]= numbers
// console.log(c)

// let x = [1,2,3,4]
// let sum = (a,b,c,d)=>{
//     return a+b+c+d;
// }

// console.log(sum(...x))

//objects

// let student = {
//     age:22,
//     name:"vinod",
//     isStudent: true
// }

// let {age,...others} = student
// console.log(others)

// let obj1 = {a:1,b:2,c:3}
// let obj2 = {c:4,d:5,e:6}
// let obj3 = {...obj1,...obj2}
// console.log(obj3) 


//! Es - 2019

// let arr = ["apple","banana"];

// let newArr = arr.flatMap((cur)=>{
//     return cur.split("")
// })
// console.log(newArr)

// let obj = {userName:"gourab",age:22}

// let entries = Object.entries(obj)

// console.log(entries)

// let normal = Object.fromEntries(entries)

// console.log(normal)

// let str = "   gourab   "

// console.log(str.trim())

// let sm = Symbol(":)");

// console.log(sm.description)



// let x;
// try{    
//      x = 0/n
// } catch{
//     console.log("not possiable")
// }

// console.log(x)



//! ES 2020

// let maxNum = Number.MAX_SAFE_INTEGER;
// maxNum+=10
// let val = 123n
// val += 11n
// console.log(typeof val);

// let num = undefined

// console.log(num ?? 11)

// let person = {
//     name:"gb",
//     address:{
//         city:"kolkata",
//         zip:123
//     }
// }
// let cityx  = person.address ?. city ?? "not availabale";
// console.log(cityx)

//! ES 2021

// let x = 2

// x = x || 3 

// console.log(x)


// let y = 10

// y &&= 20        

// console.log(y)