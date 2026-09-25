// let arr = [1,2,3,4,5]
// let numbers = new Array(1 , 3 , 5)
// console.log(arr[3])
// console.log(numbers);
// console.log(arr);
// arr[1]=99;
// console.log(arr)

// let fruits = ["apple","banana","guava","mango","cherry"];



// let str = ""
// for(let i of fruits){
//     console.log(i)
//     str += i
// }
// console.log(str)


// for (let i in fruits){
//     console.log(i)
// }

// fruits.forEach((curElem,indx,arr)=>{
//     console.log(`${curElem} - ${indx}`)
    
// })


// let abc = fruits.map((curElem,index,arr)=>{
//     return `my fav fruit is ${curElem}`
//     // return `my fav fruit is ${curElem} ${index}`
// })

// console.log(abc)


// let arr1 = [1,2,3,4,1,5]


// console.log(arr.push(9))
// console.log(arr.pop())
// console.log(arr.pop())
// arr.pop()
// arr.unshift(0)
// console.log(arr.unshift(0))
// console.log(arr.shift())

// arr.splice(1,2,22,33)


// let arr = arr1.map((cur,ind,arr)=>{
//     return cur*10
// })


// console.log(arr.indexOf(10))
// console.log(arr.lastIndexOf(10))

// console.log(arr.includes(110))

// let result = arr.find((curElem)=>{
//     return curElem > 25
// })
// let result = arr.findIndex((curElem)=>{
//     return curElem > 20
// })

// let result = arr.filter((curElem)=>{
//     return curElem > 20
// })


// console.log(result);

// console.log(arr);


// let numbers = [1,2,3,4,2,5,6,4,7,8];

// let result = numbers.filter((curElem,index,arr)=>{
//     console.log(index)
//     console.log(arr.indexOf(curElem))
//     // return arr.indexOf(curElem) === index
//     if(arr.indexOf(curElem) === index){
//         return curElem
//     }
// })

// console.log("---------")
// console.log(result)

//? SORTING

// let arr = [ 4,7,2,6,9,3,5,8,1]

// let result = arr.sort((a,b)=>{
//     if(a>b){
//         return 1
//     }else{
//         return -1
//     }
// })


// let result = arr
// .map((curElem)=>{
//     return curElem % 2 === 0 ? curElem*curElem:false;
// })
// .filter((ele)=>{
//     return ele !== false   
// })

// console.log(result)
// // console.log(result1)

//! reduce

let price = [100,200,300,400,500]

let total = price.reduce((acc,curElem,indx,arr)=>{
    console.log(acc)
    console.log(curElem)
    console.log(curElem+acc)
    return acc+curElem
},0)

console.log(total)