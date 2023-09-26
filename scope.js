/* Note1:  there are different type of scope like local, global and functional scope  */
//  1 . global scope 
let a = "this is global scope" ;
const b = 20;
// console.log(a);
// console.log(b);
// console.log(d); 
/* Note: value is present in block scope but cant be access outside*/

// 2 . functional / block scope 
if (true) {
let c = "this is the block scope";
var  d = 30;
const e = 50;
// console.log(c); //Note: only access inside or here access not outside
// console.log(d);
// console.log(e);
};
/* Note2 : var can be declared outside of the loop and console it inside the loop not outside but if value declared inside the loop then can't be access outside ... this count error for var 
the value inside loop cant be goes outside but outside declare value can be access inside the loop */
 for (let i = 0; i < array.length; i++) {
    const element = array[i];   //Note3 also block scope example 
 }; 
/* Note4 the scope in this console is different then browser console */
// 3. local scope 
console.clear(); 
function one (){
    const username = "mahroo Jaan❤️";
    function two() {
        const profession = "Coding 💻 ";
    //     console.log(username);
    //  console.log(profession); // Note: inside the scope can be run 
    }
    // console.log(profession);  // Note: outof the scope cant run 

    two();
}
one ();
/* Note5: insider function can be access outer function in nested function is called closure 
 in loop */
    if (true) {
    const realName = "Humaira";
    const profession = "programming";
     if ( realName == "Humaira") {
        const websiteName = "codeWithConsistency";
        // console.log(realName);
        // console.log(websiteName);
        // console.log(profession);
        // console.log("you accessed finally 🫢 "); 
        // Note: this  all above run bcz inside the scope
    } else{
        // console.log("you can't access 🫤 " ); 
        // Note:this run bcz inside the scope
    }

    // console.log(`"happy coding" with  ${realName} ❤️`);
    // Note: this run bcz inside the scope 
}
// console.log(realName); // note: end of above function on this line
 //Note out of the scope can't print

// +++++++++++ Function techniques to express function +++++++++++++++
 // 1.  direct express function

//console.log(addTwoNumber(5)); // note: direct function start from this console
 // Note: this can be write before or after function
      // 1. function
 function addTwoNumber (num){
    return num +1; 
 }
//  console.log(addTwoNumber(5));
 // ---- indrect or hold with memory allocation as variable ----
//  2. function
   const functionHosting= function addNumbers(num1){
    return num1 +10; 
 }
// console.log(functionHosting(10)); 
// Note:this cannot be write before function like above function
// !!!!!!!!!!!!!!!!!   Arrow function     !!!!!!!!!!!!!!!!!
// 3. function
const user ={
    userName : "mahraaa ",
    price : 1000,
    websiteName : "codewithMahroo",
    welcomeMessage : function () {
        // console.log(` "welcome to our website" ${this.websiteName} : developer is :  ${this.userName}`);
        // note : when we refer current context we use =>.this
        // console.log(this); // this here print all above object values
    }
};
// user.welcomeMessage();
// user. userName = "mahhaaa";
// user.websiteName = "learn programming";
// user.welcomeMessage();
// console.log(this); // output overall  => {} 
 // 4. function  
 function fnForThis (){
    // console.log(this); // globle value 
    // console.log(this.userName); // undefined
 };

 fnForThis ();
 // 5. function with variable
 const chai =  function fnForThis (){
    // console.log(this); // globle value 
    // console.log(this.userName); // undefined
 };
 fnForThis ();
  // 6.function 
   const arrowFn = () => ({
    UserIs : "i'm User👨‍🎓" 
    // console.log(this. UserIs);
  })
  arrowFn();
  //  -------- Arrow Function Detail ---------
  // Note: basic Syntax of Arrow function => ---- () => {}  ----
     /* note: syntax for => also const arrowFn = ()=>{
        console.log();
      } */
      // 6. Arrow Function example #1
    const ArrowFn1 = (num1 , num2) =>{
        return num1 * num2 ;
    }
    // console.log(ArrowFn1(50, 10));
    // Note :implicit return arrow function => implicit mean humny maan liya ky ye arrow fn hai bo need to write  parenthesis => { } and return word like return write in { } not in () or we cant use this also 
 // 7. Arrow Function example #2
    const implicitFn = (num1 , num2) => (num1 + num2);
    
    // console.log(implicitFn(5 ,2))
    // 8. Arrow Function example: how to put value in arrow function

    const implicitFn1 = () => ({User1 : "random-User"});
    // console.log(implicitFn1());
    //9. arrow function: example for array- function 
    let fnArray =["user2 : banker", "user3 : officer " , 7 , "greeting"];
    // different syntaxes of functions in Array 
    fnArray.forEach(function name(params) { console.log();});
    /* fnArray.forEach( fnname() = > {return} console.log())*/
        /* fnArray.forEach( fnname() = > () console.log())*/
        /* fnArray.forEach( fnname() = > ({for  put value user: "mahroo"}) console.log());*/