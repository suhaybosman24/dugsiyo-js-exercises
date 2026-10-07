// function greeet(name){
//     console.log("hello ," , name);
// }

// function userDefinedData(callback){
//     const user= prompt("enter your name ");
//     callback(user);
// }
// userDefinedData(greeet);


function operate(a ,b , callback){
    return callback(a ,b)
}

function add (a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function mutiplication(a,b){
    return a*b;
}

function division (a ,b){
    return a/b;
}


// function mutliply (a,b){
//     return a*b;
// }
// function divide ( a/b){
//     return a/b;
// }

console.log( "addition:" ,operate (2 , 3 , add));

console.log( "subtraction :" ,operate (20,10,subtract));

console.log( "mutiplication:",operate(5 , 4 , mutiplication));

console.log("division:",operate(10,2,division))

