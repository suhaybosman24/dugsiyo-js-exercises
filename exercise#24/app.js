// // spread operators

// const numbers=[1,2,3,4,5];
// const newNumbers=[...numbers,7,8,9,10];
// console.log(newNumbers)

// // rest operators
// function sum(...numbers){
//     return numbers.reduce((total ,numb)=>total+numb,0)
// }

// // console.log(sum([20]));

// console.log(sum(20,30,50));

// exercise#25
// spread operators

const numbers=[1,2,3];
const newNumbers=[...numbers,4,5,6];
console.log(newNumbers)

// rest operators

function multiply(...numbers){
    return numbers.reduce((total,numb)=>total *numb,1)
}

// console.log(multiply([20,10]));

console.log(multiply(20,10));