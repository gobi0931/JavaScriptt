let name="gobi";
let l_name="ShaNth";


// 001 Uppercase - change All Are in uppercase
x=name.toUpperCase();
console.log(x);

          // OR
console.log(l_name.toUpperCase());

// 002 lowercase
console.log(l_name.toLowerCase());

// 003 charat - print a letter using that position
console.log(name.charAt(2));

// 004 indexof(substr) - identify the letter's position
console.log(name.indexOf("i"));

// 005 includes(substr) - Returns true if the string contains the substring, otherwise false.
console.log(name.includes("gt"));

// 006 slice(start , end)  - cut the values
console.log(l_name.slice(1,4));

// 007 substring(start , end) - same as slice but it cannot take negative values
console.log(l_name.substring(1,4));

// 008 replace(old , new) - it can be change old world to new world
console.log(name.replace("b","p"));

// 009 trim - it can be remove first and last spaces
let f_name="        SHANTH        ";
console.log(f_name.trim());

// 010 trimstart - 
console.log(f_name.trimStart());

// 011 trimend - 
console.log(f_name.trimEnd());

// 012 split -  it can be chang string into Array
let bulk="a,b,c,d"
tem=bulk.split(",");
console.log(typeof(tem));

let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray[1]);

// 013 concat - add 2 strings
let fullname=name.concat(" ", l_name);
console.log(fullname);

// 014 padstart - It pads a string with another string (multiple times) until it reaches a given length.
let textt = "5";
console.log(textt.padStart(4,"0"));

// 015 padend - 
console.log(textt.padEnd(4,"x"))



