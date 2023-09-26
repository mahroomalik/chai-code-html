// console.log("M");
// console.log("A");
// console.log("H");
// console.log("R");
// console.log("O");
// console.log("O");
// console.log("..........");
// console.log("M");
// console.log("A");
// console.log("H");
// console.log("R");
// console.log("O");
// console.log("O"); // Note:if you do this many times then we use function for this
function myFunction() {
  // console.log("here write the scope of the function...");
  //console.log("M");
  // console.log("A");
  // console.log("H");
  // console.log("R");
  // console.log("O");
  // console.log("O");
}
/* Note: how to call the function ...reference which is myFunction .... execution whicj is myFunction
 call the function is => myFunction();*/
/* Note: perameter is which is give in function prenthesis  myFunction( number1, number2) here number1, number2 are parameter
 arguments are given in function call prenthesis e.g myFunction(2 , 4);*/
// 1. function
function addTwoNumber(num1, num2) {
  //     console.log( num1+ num2);
}
// 2. function
addTwoNumber(10, 20);

let result1 = addTwoNumber(10, 30);
//  console.log(result1);
// console.log(typeof (result1));
// 3. function
function addTwoNumber(num1, num2) {
  let result2 = num1 + num2;
  return result2; // Note: after result nothing can't print
  // console.log( num1+ num2);
  // 4. function
  let result3 = num1 + num2;
  return result3; // Note: instead of this we use :
  return num1 + num2;
}
// 4. function
const result4 = addTwoNumber(20, 30);
//  console.log(result4);
// 5. function
function loginUserMessage(username) {
  if (username === undefined) {
    console.log("plz enter your good name ");
    return; // Note : if next are not want to print
  }
  return `${username}  you are loggedIn Now`;
}
// console.log(loginUserMessage(" Mahroo"));
//   console.log(loginUserMessage( ));
/* when no value is passed the undefined  you are loggedIn Now
 function with loop is */

//  6. function for default value
function loginUserMessage(username = "malik") {
  //Note: default value = username = "malik"
  if (username === undefined) {
    console.log("plz enter your good name ");
    return;
    // Note: if next are not want to print
  }
  return `${username}  you are loggedIn Now`;
}
// console.log(loginUserMessage());
//Note: defalult value is use when argument is empty

// Note:rest method or spread method are equivalent but depend on condition where use
function calculatedCartValue(...num) {
  //Note  rest () is use here
  return num;
}
//  console.log(calculatedCartValue(200, 300, 600, 1000));
//Note: if some value are declared as user buy if 2 quantities then
function calculatedCartValue(val1, val2, ...num) {
  // Note  rest () is use here
  return num;
  //Note: val1 = 200 , val2 = 300 rest value will be count in rest value which is 600 , 1000
}
//  console.log(calculatedCartValue(200, 300, 600, 1000));

// 7. function for how to extract object value in function
// let object is
const objInFunction = {
  name: "maha ",
  userId: 5,
  isUserLoggedIn: true,
  isUserBuyItems: "yes",
  price: 1000,
};
function objHandleInFunction(anyobject) {
  console.log(
    `user name is ${anyobject.name} , user Id is ${anyobject.userId}, Price of item is ${anyobject.price}`
  );
}
// console.log(objHandleInFunction(objInFunction));

// 8. function for direct pass object in function
function directobjPass(anyobject) {
  console.log(
    `user name is ${anyobject.name} , user Id is ${anyobject.userId}, Price of item is ${anyobject.price}`
  );
}
directobjPass({
  name: "sana",
  userId: 6,
  price: 2450,
});
console.clear();
// 9. function for how to used array in function
// let array
const functionArray = ["name: mahaa", " id = >", 7, "price => ", 1000];
//Note use in function =>
function functionWithArray(getArray) {
  return getArray[0];
}
// console.log(functionWithArray(functionArray));

//  Note: direct array pass =>
console.log(
  functionWithArray(["name: Mah jabeen ", " id = >", 7, "price => ", 1000])
);
