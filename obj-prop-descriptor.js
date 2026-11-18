let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

let obj ={
    name:"gourab",
    phone:123,
    address:"west bengal"
}


console.log(obj)

console.log(Object.getOwnPropertyDescriptor(obj,"phone"))

Object.defineProperty(obj,"phone",{
        writable: false,
    })
console.log(Object.getOwnPropertyDescriptor(obj,"phone"))
    obj.phone = 456
    console.log(obj)

for(let [i,j] of Object.entries(obj)){
    console.log(i,j)
}