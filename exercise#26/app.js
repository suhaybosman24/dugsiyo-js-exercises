
// function fetchUserData(){
//     alert("fetching user data");
//     return{id:1, name:"osman"}
// }

// console.log("starting fetching user data");

// const user=fetchUserData();
// console.log("user data" , user);
// console.log("this message is blocked untill user data is fetched");



// unblocking-assynchronouse



// function GetUserData(callback){
//     setTimeout(()=>{
//     console.log("after 3 seconds");
// },3000)
// }

// console.log("starting fetching user data");
// GetUserData();
// console.log("this message show up immideiately");

// with callback
// function GetUserData(callback){
//     setTimeout(()=>{
   
//         const user={id:1,name:"osman"}
//         callback(user);
// },3000)
// }

// console.log("starting fetching user data");

// // call as a function not method 
// GetUserData(function(user){
//     console.log(user)
// })
// console.log("this message show up immideiately");

// blocking 

// function fetchUserData(){
//     alert("print after 2 seconds");
//     return{id:1,name:osman}
// }

// console.log("after 22 seconds will print");
// const user=printafter2sconds();
// console.log("user data" user);
// console.log("this message is blocked untill 2 seconds");

// BLOCKING

function fetchUserData() {

        alert("Fetching user data");
   

    return { id: 1, name: "osman" };
}

console.log("starting fetching user data");
const user=fetchUserData();
console.log("user data", user);
console.log("this message shows up immidtely after 3 seconds");






// NON BLOCKING

function WaitSeconds(callback){
    setTimeout(()=>{
        const userData={ id :1, name: "osman"};
        callback(userData)
    }, 1000);
}

console.log("this message show up");

WaitSeconds(function(userData){
    console.log("user",userData);
});
console.log("after not waiting ");

