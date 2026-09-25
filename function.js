//? normal function
function greet(a){
    console.log(`hello ${a}`);
    
}
// greet("gourab")

function addNum(a,b){
    // console.log(a+b)
    return a+b
}
// console.log(addNum(5,3));


//? function expression
let result = function sum(a,b){
    // console.log(a+b)
    return a+b
}

// result(3,5)
// console.log(result(5,3))
// console.log(result) ❌

//? anonymous function
 
let ans = function(a,b){
    return a*b
}
// console.log(ans(4,5));

//? [IIFE] -> Immediately Invoked Function Expression

// (function greet2(){
//     console.log("hello");
    
// })()


//? default parameter
// function addSum(a=5,b=5){
//     console.log(a+b)
// }
// addSum()


//?? Fat Arrow function

// let result1 = (a,b) =>{
//     console.log(a**b)
//     // return a**b;
// }

// result1(2,4)
// console.log(result1(2,3));
// // console.log(result1)

// let gritings = (a) => console.log(`how are you ${a}`);

// gritings("gb")
// console.log(gritings("gb"))