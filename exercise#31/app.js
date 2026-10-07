// async function fetchData() {
//     try {
//         console.log("Start fetching data...");

//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1ddd');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // const data = await response.json();
//         // console.log("Response data:", data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// // fetchData();


// async function fetchUserData() {
//     try{

//         console.log("start fetching user data");

//          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     } catch(err){
//         console.log("error:", err)
//     }
    
// }

// fetchUserData();

// async function fetchUserData() {

//     try {

//         console.log("start fetching user data");

//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/posts/1ddd')
           
//              if(!response.ok){
//                 throw new Error(`HTTP error! Status: ${response.status}`);

//                 // throw new Error ('HTTP error! Status: ${response.status}')



                
           
//              }

//              const user= await response.json();
//                 console.log(user)

//     } catch (err) {

//         console.log("error:", err);

//     }
// }

// fetchUserData();



// async function postData(){
//     try{
//         console.log("start fetching data");

//         const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {

//             method:"post",
//             headers:{
//                 'content-type':'application/json'
//             }, 
//             body: JSON.stringify({
//                 title:"whats title of this post",
//                 body:"this body of the title maybe contains more things",

// postData()



//  making https requests post
// async function dataTry(){
//     try{
//         console.log("start fetching data");
//         const response= await fetch('https://jsonplaceholder.typicode.com/posts' , {
//             method:"post",
//             headers:{
//                 'content-type':"application/json"
//             },
//             body: JSON.stringify({
//                 title: "whats is the topic for today",
//                 body:"this topic we are taking about new thngs thats important",

//                 userid:1
//             })
//         });
//         if (!response.ok){
//             throw new Error('HTTP error: ${response.status}');
//         }
//         const user= await response.json();
//         console.log(user)
//     } catch(err){
//         console,log(error);
        
//     }
// }

// dataTry()


async function example (){
    try{

        console.log("start fetching data");
         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

         if (!response.ok){
            throw new Error ('HTTP error: ${response.status}');
         }
         const user= await response.json();
         console.log(user);
    } catch(err){
        console.log(error);
        
    }
}

example();

