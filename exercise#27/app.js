// function fetchUserData() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const success = true;

//             if (success) {
//                 resolve({ id: 1, name: "osman" });
//             } else {
//                 reject("failed to fetch user data");
//             }

//         }, 2000);

//     });
// }

// fetchUserData()

//     .then(data => console.log("user data:", data))

//     .catch(error => console.log("error:", error));

// function fetchUserData(){
    
//     return new Promise ((resolve , reject)=>{

//         setTimeout(()=>{
//             const success= false;
//             if (success){
//                 resolve({ id: 1, name: "ossman"});
//             }else{
//                 reject("failed");
//             }
//         },2000);
//     });
// }

// fetchUserData()
//     .then(data=> console.log("user data:" ,data))
//     .catch(error=> console.log("error:", error));


function fetchUserData (){

    return new Promise ((resolve ,reject)=>{

        setTimeout(()=>{
            const user= true;
            if (user){
                resolve({id: 1 , collageName:"aksa"});
            }else{
                reject("failed the fetch user data");
            }
        } ,2000);

    });
}

fetchUserData()
    .then(data=> console.log("user data:" , data))
    .catch(data=>console.log("error:" ,err));