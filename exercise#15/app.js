
// for of loop
// using for array

// const studnets=["namima","nasra","halit"];
// for(let student of studnets){
//   console.log(studnets)
// }

// const student = {
//     name: "Ahmet",
//     schoolname: "Aksa",
//     country: "Somalia"
// };

// for (const key in student) {
//     console.log(key + ": " + student[key]);
// }
// exercise#15


const person1 = { name: "Alice", age: 25, city: "Wonderland" };
const person2 = { name: "mohamed", age: 29, city: "maleysia" };
const person3 = { name: "ahmet", age: 30, city: "cyprus" }
for (const key in person1) {
    console.log(key + ": " + person1[key]);
}
console.log("------")

for (const key in person2){
  console.log(key +": "+ person2[key]);
}

console.log("-------")

for (const key in person3){
  console.log(key +": " +person3[key]);

}
