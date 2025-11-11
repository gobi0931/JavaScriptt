// // Hoisting Examples

// console.log(num);
// let num=25;

// console.log(num1);
// var num1=25;

// console.log(num2);
// const num2=25;

// // scope

// {let x=25;
//     console.log(x);
// }
// console.log(x);

// {var x=25;
//     console.log(x);
// }
// console.log(x);

// {const x=25;
//     console.log(x);
// }
// console.log(x);

// console.log(Boolean(10>6));

// let x=15;
// let y=new Number(16);
// console.log(x!=y)
// console.log(typeof(y))

// x is a boolean
// let a = false;

// // y is an object
// let b = new Boolean(false);

// console.log(typeof a + "<br>" + typeof b) ;


let x;
console.log(Boolean(x));

let y=10;
console.log(Boolean(y));

let z=0;
console.log(Boolean(z));

let a="";
console.log(Boolean(a));

let b="Hello"
console.log(Boolean(b))


let c = 5;
console.log(Boolean(c == 8));

let d = 5;
console.log(Boolean(d != 8));


let e = 5;
let f = 10;
console.log(Boolean(e > f));
console.log(Boolean(e < f));



let name=true
if(name){
    console.log("I am Thuvaragan")
}
else{
    console.log("invalide Name")
}

let num1=15;
let num2=20;
if(num1>num2){
   console.log("correct")
}
else{
    console.log("wrong")
}

let x1=false;
let y1=new Boolean(false);
console.log(x1==y1);
console.log(x1===y1);

