//! first-class function

// function sayHello(name){
// return (`hello ${name}`)
// }

// let greet = sayHello
// console.log(greet('Gourab'))
// sayHello('Gourab')


//! higher order && callback Function

// let processuserInput = (uname,fun) =>{          //* higher order 
//     console.log(`received input = ${uname}`)
//     fun(uname)
// }

// let fun = (uname) =>{                           //* Callback 
//     console.log(`hello.. ${uname}`)
// }

// processuserInput("gourab",fun)

//! CallBack Hell

// let getStudentData = () =>{
//     setTimeout(()=>{
//         console.log("class 1")
//         setTimeout(()=>{
//             console.log("class 2")
//             setTimeout(()=>{
//                 console.log("class 3")
//                 setTimeout(()=>{
//                     console.log("class 4")
//                     setTimeout(()=>{
//                         console.log("class 5")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }

// getStudentData()


//! Promise

// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(0/0)
//     },2000)
// })
// .then((res)=>{
//     console.log("Then")
// })
// .catch((err)=>{
//     console.error(err)
// })
// .finally(()=>{
//     console.log("EXIT")
// })

// let pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("111"),2000)
// })
// let pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("222"),2000)
// })
// let pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("333"),1000)
// })

// Promise.race([pr1,pr2,pr3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

