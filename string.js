// let str = "g\\\\\\\nou\"ra\'b"
// console.log(str);

// let str = "I am Gourab BisWas"
// console.log(str.indexOf("a",10));
// console.log(str.lastIndexOf("a",7));
// console.log(str.search(/w/i))
// let result = str.match(/a/gi)
// let result = str.matchAll("a")
// console.log(...result)
// for(let {index} of result){
//     console.log(index * index)
// }

// for(let index of result){
//     console.log(index[0])
// }

// let str = "I am Gourab BisWas"

// console.log(str.startsWith("I"))
// console.log(str.endsWith("Was"))

// console.log(str.slice(-6))
// console.log(str.substring(3,7))

// console.log(str.charAt(5))
// console.log(str.at(-3))
// console.log(str.charCodeAt(5))

// console.log("a".charCodeAt())
// console.log("A".charCodeAt())

// console.log(str.replace(/g/i,"z"))
// console.log(str.replaceAll(/a/gi,"z"))

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim())

// console.log(str.split(","))
// console.log(str.split(" "))
// console.log(str.split(""))
// let x = str.split(" ")

// console.log(x)

// console.log(x.join(" "))

// console.log("A".charCodeAt())

// console.log(String.fromCharCode(122))

// let str = "I am Gourab BisWas"

// console.log(str.split(""))

// let arr = Array.from(str)

// let arr= [...str]
// console.log(arr)

let pangram = (str) => {
  let inputArr = str.toLowerCase().split("");
  console.log(inputArr);
  let newArr = inputArr.filter((curElem) => {
    return curElem.charCodeAt() >= 97 && curElem.charCodeAt() <= 122;
  });
  console.log(newArr);

  return new Set(newArr).size === 26
};

console.log(pangram("The quick brown fox jumps over the lazy dog"))
