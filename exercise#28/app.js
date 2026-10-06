// function fetchUserData (){

//     return new Promise ((resolve ,reject)=>{

//         setTimeout(()=>{
//             const user= false;
//             if (user){
//                 resolve({id: 1 , collageName:"aksa"});
//             }else{
//                 reject("failed the fetch user data");
//             }
//         } ,2000);

//     });
// }

//  async function displayUserData (){
//     try{
//         const user = await fetchUserData();
//     console.log(user)
//     } catch(err){
//         console.log(err)
//     }
// }


// displayUserData();




// function fetchUserData(){

//     return new Promise ((resolve ,reject)=>{
//         setTimeout(()=>{
//             const user = true;
//             if (user){
//                 resolve({id:1 , name :"osmanhawo"});
//             }else{
//                 reject("failed the fetch user data");
//             }
//         },1000);
//     });

// }

// async function displayUserData (){

//     try{
//         const user = await fetchUserData();
//         console.log(user)
//     }catch(err){
//         console.log(err)
//     }
// }

// displayUserData();




function fetchUserData (){

    return new Promise ((resolve ,reject)=>{

        setTimeout(()=>{
            const user= false;
            if (user){
                resolve({id: 1 , collageName:"aksa"});
            }else{
                reject("failed the fetch user data");
            }
        } ,2000);

    });
}

// fetchUserData()
//     .then(data=> console.log("user data:" , data))
//     .catch(data=>console.log("error:" ,err));

async function displayUserData (){
    
    try{
        const user= await fetchUserData();
    console.log(user)
    } catch(err){
        console.log(err)
    }
}
displayUserData();