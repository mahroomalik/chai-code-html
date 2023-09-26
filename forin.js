
//for in loop 
// as we see above the for of loop is not work on object, for object and some other we use for in loop
// basic syntax for for in loop is =>
/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
   }
 }*/
 // syntax explanation:
// Example of for-in loop with object
const myobj1 = {
    pk:'Pakistan',
    in:'India',
    Us:'United state',
    UK:'England',
    UAE: 'united Amarate ',
    Af:'Afganistan'
     };

 for (const key in myobj1) {
    // console.log(key);
    // console.log(myobj1[key]);
    // console.log(`${key} is stand for ${myobj1[key]}`);
 };
 // for-in loop for array:
 const programming = ["js", "python", "php", "ccp", "c++","java"];
 for (const key in  programming) {
    //  console.log(key); // just aaray keys printed 0,1,2,3,4,5 index like
    // console.log(programming[key]);
 };
// map is not iteratable cant be use in for-in loop
// for-of loop is use in Array , for-in loop is use in Object
//---------------------for-each loop------------------------------
// basic Syntax is => 
// array.forEach(element => {
// console.log();
// });
 let coding = ["js", "pytho    n", "php", "ccp", "c++","java"];
  coding.forEach( function (languages){
    // console.log(languages);
 });
// forEach function is call back function , there is no need name for function 
// languages is parameter to call all value 
//Arrow function with forEach loop
coding.forEach( (items)=>{
    // console.log(items);
});
// 
const programmingLanguages = ["js", "python", "php", "ccp", "c++","java", "rubby"];
const value = programmingLanguages.forEach( (progrm)=>{
    //  console.log(progrm);
     return progrm 
});
console.log(value);
// filter operation ....
const myNums = [1,2,3,4,5,6,7,8,9,10];
const ornum = myNums.filter( (num) => num > 5) 
  console.log(ornum);
  const newNum = myNums.filter( (num) =>{
    return num > 5
  }) 
  console.log(ornum);
//------------- for-each loop as a filter method ------------------
