// ```````````````````````````````````````````````Arrays `````````````````````````````````````````````````````````
const myarr = [12, 56, "mahroo", " malik"];
//   console.log(myarr );
//Note: documentation link:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Note:js array are resizeable
//  console.log(myarr[2]);
//Note:JavaScript array-copy operations create shallow copies , shallow copies => change done also in original arrays like heap............................... deep copy => change done not in original arrays like stack only copy
const arr = new Array("name : mahroo", " course :bscs", 12);
//  console.log(arr);
//-----------------------------------------  Arrays methods :-----------------------------------------------------
//1) +++push()++++ is use to add value
const arrPush = new Array(11, 12, 13, 14);
arrPush.push(15);
arrPush.push(16);
//  console.log(arrPush);
// 2) +++pop()++++ is use to remove last value
const arrPop = new Array(11, 12, 13, 14);
arrPop.pop();
//  console.log(arrPop);
// 3) +++unshift()++++ is use to add value in first index
const arrUnShift = new Array(11, 12, 13, 14);
arrUnShift.unshift(10);
//   console.log(arrUnShift);
// 4) +++shift()++++ is use to remove value in first index
const arrShift = new Array(11, 12, 13, 14);
arrShift.shift(); // not arrgument pass
//   console.log(arrShift);
// 5) +++includes()++++ is use to check value either has or not has value
const arrIncludes = new Array(11, 12, 13, 14); // only use in console
//   console.log(arrIncludes.includes(10));
// 6) +++indexOf()++++ is use to check index , on which index valuev placed =>   if value is not exist then output is -1
const arrIndexOf = new Array(11, 12, 13, 14); // only use in console
//   console.log(arrIndexOf.indexOf(13)); // place index is 2
// 7) +++Join()++++  is use to convert array into string also change its datatype
const arrjoin = new Array(11, 12, 13, 14);
let arrjoin1 = arrjoin.join();
//   console.log(arrjoin1);
//   console.log(typeof (arrjoin1));
// 7) +++slice() , splice++++ return a copy of a section of an array. for both start to end
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  console.log("A ", myArr);
const mynew = myArr.slice(1, 7);
// console.log(mynew);

// console.log("B", myArr); //Note: after slice operation  stay origion array as it is
const mynew1 = myArr.splice(0, 4);
/*Note:Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. after splice but include the last b/w index */
// console.log(mynew1);
// console.log("C", myArr);
// console.log(typeof (mynew1));

const Marvel_heros = [" thor", " arrowman", "iron man ", " spider Man"];
const dc_heros = ["superman ", "batman", "flash"];
let merg = Marvel_heros.push(dc_heros);
//  console.log( Marvel_heros);
//Note: when we merge two arrays whole result consider other arrays as single index
//  console.log( Marvel_heros[4]); // 4 index include all [ "superman ", "batman", "flash"];
//  console.log( Marvel_heros[4][1]); // batman
// ------------------------------------------------concat-------------------------------- it merge two arrays
const Marvel_heros1 = [" thor", " arrowman", "iron man ", " spider Man"];
const dc_heros1 = ["superman ", "batman", "flash"];
let merge = Marvel_heros1.concat(dc_heros1);
//  console.log(merge);
// ------------------------------------------ Spread methods-------------------------------------------------
/*Note: spread mean a glass turn into pieces like use to write with ... (3 dots in arrays , seperate with commas) it seperate all value of indexes from each array */
const flash = [
  " Barry Allen",
  "Iris",
  " Dr.",
  "Detective Eddie",
  "Cisco Ramon",
];
const theMartian = ["Dr. Mark Watney ", "potatoes", "H2O", "Mars"];
let spread = [...flash, ...theMartian];
//  console.log(spread);
// --------------------------------------------flat Array-----------------------------------------------------
let complexArrays = [
  1,
  2,
  3,
  [
    4,
    5,
    [6, 7, 8, 9, 10, 11],
    ["good time will come , don't be sad ... life still remaining"],
    12,
    13,
  ],
  14,
];
//  console.log(complexArrays);
const flatarr = complexArrays.flat(Infinity);
//  console.log(flatarr);
/*Note: sometime arrays from different compilers django , mogodb , c++ etc then we use to check first isArray if no ==> false,  then convert into Array (Array.from() methods) , first check we use */
//  console.log(Array.isArray("Mahroo-Malik"));
//  console.log(Array.from("Mahroo-Malik"));
//  console.log(Array.from({name :"Mahroo-Malik"})); //Note: empty its not work in object here
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
console.log(Array.of(score1, score2, score3, score4, score5));
