//--------------------- console.log(" console checking ...🍂 🍂 🍂 ");---------------------
// --------------------------- DataType -----------------------------------
const accountID = 121212;
let accountEmail = "mahroo.321@gmail.com";
var accountPassword = "123456";
accountCity = "islamabad";
accountEmail = "maha.567@gmail.com";
var accountPassword = "676786";
accountCity = "lahore ";
let accountStatus;
// console.table([
//   accountID,
//   accountEmail,
//   accountPassword,
//   accountCity,c
//   accountStatus,
// ]);
/*  
Note: -prefer not to use var because of issue in block scope and functional scope
- accountCity is not variable defind javascript accept as varibale 
-undefined  is use for deserved space for later use and value it a time not defined 
- javascript engine is totally hide in browser
*/
// ----------------------------use strict ---------------------------------
("use strict"); //Note: treat all JS code as newer version
// alert(3+3); //Note: we are using nodejs, not browser
// Note:ECMA material link: https://tc39.es/ecma262/
//Note: MDN material link: https://developer.mozilla.org/en-US/docs/Web/JavaScript
/* Note: --------------------basic datatype in javascript --------------------------
 1.number => 2 t0  power 53
 2.bignit
 3.string => "mahroo"
 4.boolean=>  true/flase
 5.null => standalone value
 6.undefined => 
 7.symbol => uniquness
 8.object non premitive data type
  */
//  console.log( typeof "mahroo"); //Note: string
//  console.log( typeof 20); //Note: number
//  console.log( typeof undefined); // Note:undefined type
//  console.log( typeof null); //Note: object type
//  console.log( typeof Boolean);
console.clear;
// -------------------------conversion of DataTypes----------------------------
let score = 100;
let score1 = "100abc ";

//  console.log(typeof(score));
let valueInNumber = Number(score1);
//  console.log(score1);
//  console.log(typeof(score1));
//  console.log(valueInNumber);
// Note:"33" => 33 when apply  valueInNumber convert into number ,"33abc " => 33abc when apply  valueInNumber convert into number but type is NAN  ,  true => 1
// ------------------------------- boolean conversion -----------------------------------------
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);
//  console.log(typeof (booleanIsLoggedIn));
// ---------------------------------- conversion of string ----------------------------------
let someNumber = 33;
let StringNumber = String(someNumber);
//  console.log(StringNumber);
//  console.log( typeof (StringNumber));
// --------------------------- arithemic Operations ---------------------------------------
// Note:in simple 2+2 is operation , contatination of string is operation

let value = 33;
let negValue = -value;
//  console.log(negValue);
//  console.log(2**3); // Note:this is use for power exponents
//  console.log(4**3); // Note:4 power 3 => 4*4*4
//  console.log(2**6); // Note:2 power 6 => 2*2*2*2*2*2
//  console.log(6/2); // Note: 6 divide by 2 = 3
//  console.log(5%2); //  Note: for remainder e.g 5divide by 2 remain der is 1
//--------------------------- string conversion and addtion---------------------------------
let str1 = "33";
let str2 = 22;
let str3 = str1 + str2;
// console.log(str3); //Note: 3322 it just write together
let str4 = 22;
let str5 = "33";
let str6 = str4 + str5;
let str7 = 11;
let str8 = str4 + str7 + str5;
// console.log(str8); //Note: this time its add 22+11 which 33 then combine with string which is 33 output is 3333
//  console.log(11+22 +"33"); //Note: 3333
//  console.log(11+"33" + 22); //Note:=> 113322 just combine not add
//  console.log("33" + 11+ 22); //Note:=>331122 just combine not add
//  console.log("33" + (11+ 22)); //Note:=>3333 add bracket (11+22) then combine with string
//  console.log((5*2)+ "4"+(5+6)+ (6-2)+ "5"); // Note:(5*2)=10, "4"= 4 , (5+6) = 11 , (6-2)= 4, "5" = 5 ,total output is 1041145 its solve bracket then combine
//  console.log((4-3)-(5+6)*(6/2)/(2));
/*Note:(4-3 = 1)-(5+6 = 11)*(6/2 = 3)/(2),   1-11 =10 , 10*3 = 30 , 30/2 = 15, DMAS rule followed: (6/2)/(2) => 1.5, 1.5 *11=> -(16.5) -1=> -15.5 final output => -15.5 */
//   console.log(+true);  //Note: it convert into booloean
//   console.log(true);    //Note: true output
//   console.log( +"");      //Note: 0
//   console.log("");    //Note: nothing print
//   -------------------------------------comparision of datatype---------------------------------------------------
// Note:datatype must be same, never compare different datatype
// console.log( 2 == 1);
// console.log( 2!=1);
// console.log("2" > 1);
//Note:typescript is use in strict rules
// console.log(null > 0); // false
// console.log(null >= 0); // true
// console.log(null == 0); // false
// --------------------------------use of undefined---------------------------------------------------------
// console.log(undefined > 0); //Note: false
// console.log(undefined >= 0); //Note: true
// console.log(undefined == 0); // Note:false
// ------------------------------equality and check data type also-----------------------------------------
//  console.log("2" ===2);
// -----------------------------there two type of datatype------------------------------------------------
// 1.premitive                                                                2. non-premitive
// Note:datatype which method the value store in memory,  name the value in memory is datatype
//Note: 7 type : String , number , boolean, null , undefined, symbol,bigint
// 1.  (Non Primitive) also known as Reference
// Note:important for js are : objects and events should master in it,
//Note: javascript is dynamic language it tracked itself e.g
const scor = 100; //Note: its a number js tracked itself
const scoreValue = 100.3; //Note: also number
const isLogedIn = false; // Note:boolean
const outsideTemp = null; //Note: null
let total; //Note: undefined bcz total just allocated memory but not defined about it
console.clear;
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(typeof(id));
// console.log(typeof(anotherId));
// console.log(anotherId);
// console.log(id ===anotherId);
// -------------------------------------------bigint value-----------------------------------------
const bigNumber = 44556666463276543n;
//------------------------------------------- array-------------------------------------------------
let Array = ["mahroo", "malik", " hira"];
let objMe = {
  name: "mahroo",
  program: "bscs",
  semester: "last",
  profession: "software-engineer",
  passion: "fullstack developer",
  mission: " completed all coding till december",
};
// ----------------------------------------function------------------------------------------------
let myFunction = function () {
  consloe.log("this is function here");
};
console.log(typeof myFunction);
