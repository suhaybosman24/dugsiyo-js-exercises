// const user={
//     id: 1,
//     name:"osman",
//     city:"wonderland",
//     collage:"aksa"

// };
// console.log(user)

// // object to json

// const jsonString= JSON.stringify(user);
// console.log(jsonString);

// // json to object

// const ParsedData = JSON.parse(jsonString);
// console.log(ParsedData);


// async function fetchUserData(){
//     console.log("starting fetching user data");

//     const response = await fetch('./data.json');

//    const data = await response.json();
//     console.log("response:" , data);
// }
// fetchUserData();


// async function fetchUserData(){
//     console.log("starting fetching user data");

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//    const data = await response.json();
//     console.log("response:" ,  data[0].body);
// }
// fetchUserData();

// async function fetching() {

//     console.log("start to fetch user data");

//     const userData = await fetch('https://jsonplaceholder.typicode.com/posts');

//     const user = await userData.json();

//     console.log("response:", user);
// }
// fetching();




async function fetching() {

    console.log("start to fetch user data");

    const userData = await fetch('./user.json');

    const user = await userData.json();

    console.log("response:", user);
}

fetching();