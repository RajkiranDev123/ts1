"use strict";
//Primitives : number,string,boolean
let a = 1;
let b = "raj";
let c = false;
//c=8
//arrays
let arr1 = [1, 2];
//let arr2: number[]=[1,2,false]
//Tuples : tuples are like arrays with a fixed number of elements and types for each index.
let arr3 = ["raj", 8];
console.log(arr3);
// let arr4: [string,number]=[8,"raj"]
//Enums : =
var userroles;
(function (userroles) {
    userroles["admin"] = "admin";
})(userroles || (userroles = {}));
console.log(userroles.admin);
// any unknown void null undefined never
//any : you dont provide any type and  value : ts gets off with any
let a1;
a1 = 5;
a1 = "ok";
a1.toUpperCase();
//a1.toFixed() //'toFixed' does not exist on type 'string
//unknown
let a2;
a2 = 5;
a2 = "ok";
//a2.toUpperCase() //cant do need to do type narrowing to use in future
if (typeof a2 == "string") {
    a2.toLowerCase();
}
else if (typeof a2 == "number") {
    a2.toFixed();
}
//void : when function never returns
function one() {
    console.log(666);
}
//null
let a3; //variable has been declared and given the value of null .
//undefined : undefined means a variable has been declared but has not yet been assigned a value
let a4;
//never : next line of code is not reachable : console.log(888)
function two() {
    while (true) {
        console.log(77);
    }
}
//two()
console.log(888);
//Reference : {},[],()
