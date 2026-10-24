



// clicked
// const button=document.querySelector('#MyClick');
// button.addEventListener('click', function(){
//    alert('Button was clicked!');
// });

// remove
// const button=document.querySelector('#MyClick');
// const remove=document.querySelector('#RemoveElement');

// function handleclick(){
//     console.log("click this one")
// }

// button.addEventListener('click',handleclick);

// remove.addEventListener('click',function(){
//     button.removeEventListener('click',handleclick);
//     console.log("removed the events")
// })



// handling
// const color=document.querySelector('#color');
// const selectedcolor=document.querySelector('#selectedcolor');
// const username=document.querySelector('#username');
// const currentname=document.querySelector('#currentname');

//     color.addEventListener('change',function(){
//         console.log("change this ones" ,color.value);
//         selectedcolor.textContent=`selected color is :${color.value}`
//     });
    
//     username.addEventListener('change',function(){
//         console.log("your current name is ", username.value);
//         currentname.textContent=`your current name is: ${username.value}`
//     });

// // submitting
// const myform=document.querySelector('#myform');
// const formessage=document.querySelector('#formessage');
// myform.addEventListener('submit',function(event){
//     event.preventDefault();
//    formessage.textContent=("submitted")
// })

// username

const checkingform=document.querySelector("#checkingform");



checkingform.addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.querySelector("#name").value;
const email=document.querySelector("#email").value;
const password=document.querySelector("#password").value;
const confirmpassword=document.querySelector("#confirmpassword").value;

    console.log("username is:",username)
const error=document.querySelector("#error")

    if(username===''){
        error.textContent="username is required"
        return
    }
    console.log("my email is:",email)
    const patternemail= /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/;

    if (!email.match(patternemail)) {
    error.textContent = "Please enter your email";
    return;
    }
    // password and confirmpassword
    console.log("please enter your pasword",password)
    if(password.length<=s8){
        error.textContent="password must be 8 charecteristics";
        return;
    }
    if(password!==confirmpassword){
        error.textContent="password didnot match"
        return;
    }


    error.textContent="resgister successfully!"
   
    // console.log("username is:",username)

})