//----------------------------- memory allocation:---------------------------------
//Note: two type =>  1.stack (for primitive....call var only given copy change) 2.heap (non primitive or referance => original data change ) */
let myYoutubeName = "hitesh-choudhary";
//Note: primitive in stack, copy given
let anotherName = myYoutubeName;
anotherName = "chai with code";
// console.log(anotherName );
// console.log(myYoutubeName);
// non- primitive example
let userOne = {
  name: "mahroo",
  program: "bscs",
  semester: "last",
};
let userTwo = userOne;
userTwo.program = "bs-it";
// console.log( userOne.program);
// console.log( userTwo.program);
//----------------------------------------string interpolation-----------------------------------------
// Note: ${} for variable inject
let name = "mahroo";
// console.log(`this is the string interpolation ${name} this is use for contatination`);
const gameName = new String("mahroo");
//  console.log(gameName);
//  console.log(gameName[2]);
const balance = new Number(1000);
// Note:this specified the value always in number
//  console.log(balance);
//  console.log(balance.toString().length);
//  console.log(balance.toFixed(1));
//  const otherNumber = 23.8443; // 24
//  console.log(otherNumber.toPrecision(2));
//  const otherNumber1 = 243.8443; // 24
//  console.log(otherNumber1.toPrecision(2));
//Note: 2.4e+2 convert remaing in exponents
const hundreds = 100000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-PK'));
//----------------------------------------------------Maths----------------------------------------------------
// console.log(Math);
// console.log(Math.abs(-4)); // abs absolute value
// console.log(Math.round());
// Note:round --> 1)ceil grater value of round of from above 2.67 = 3,    2)floor lower value   e.g 2.67 = 2
// console.log(Math.floor(2.67));
// console.log(Math.ceil(2.67));
// console.log(Math.round(2.67));
// console.log(Math.max(3, 4, 5,8, 20 ,50));
// console.log(Math.min(3, 4, 5,8, 20 ,50));
// console.log(Math.percision(2.67));
// console.log(Math.random());
/*Note: range always b/w 0-1 => 0.9654 , to solve this problem we add this formula */
// console.log((Math.random() *10) +1);
//Note: * by 10 it convert into not a zero ... +1 in case of 0. 4 adding 1
// console.log (Math.floor(Math.random()*10) +1);
// Note:random value 1>=10 , for set developer range then add 1 to avoid zero
const min = 10;
const max = 30;
// console.log (Math.floor(Math.random()*(max- min +1) ) + min);
// ===================================================dates======================================================
let myDate = new Date();
// console.log(myDate);
// console.log(typeof (myDate));
//Note: object => new is a object
//  console.log(myDate.toString());
// Note:2023-09-03T02:58:46.050Z
//  console.log(myDate.toISOString());
//Note:Sun Sep 03 2023 07:58:46 GMT+0500 (Pakistan Standard Time)
//  console.log(myDate.toJSON());
// Note:2023-09-03T02:58:46.050Z
//  console.log(myDate.toLocaleDateString());
//Note: 9/3/2023
//  console.log(myDate.toLocaleString());
// Note:9/3/2023, 7:58:46 AM
console.clear();
let myCreatedDate = new Date(2023, 0, 1);
// Note:month start in js from 0 => jan = 0 , feb = 1
// console.log(myCreatedDate.toDateString());
let myCreatedDateWithTime = new Date(2023, 0, 23, 6, 10);
// console.log(myCreatedDateWithTime.toLocaleString());
let stringDate = new Date("2023-06-01");
// console.log(stringDate.toLocaleString());
// ------------------------------------- date in our asian regin format ----------------------------------------
let ourDate = new Date("01-25-2023"); //Note: mm-dd-yy prefer mostly
// console.log( ourDate.toLocaleString());
//----------------------------------------- time stamp---------------------------------------------------------
// Note:time stamp is use in quizes app , timer etc
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
/*Note:1693712031914 in  millisecond from 1 jan 1970, this time is use to compare for hotels reservstion or comparingv as follows etc */
// console.log(myCreatedDate.getTime());
//Note: how to convert it into seconds
// console.log(Math.floor(Date.now()/1000));// Note:into second
let TodayDate = new Date();
console.log(TodayDate.toDateString());
console.log(TodayDate.getDate());
console.log(TodayDate.getTime());
console.log(TodayDate.getMonth() + 1); //Note: its count from zero so add one to get exact month
//  console.log(TodayDate.getDay().toLocaleString());
//  console.log(TodayDate.getFullYear());
// Note: -----------for more explanation of date time is--------------------
TodayDate.toLocaleString("default", {
  weekday: "long",
});
