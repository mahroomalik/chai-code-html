// ============ Objects in javascript============
//Note: there is two ways to declared objects 1.literals  2. constructors
//Note: singleton if object is construct by constructor is singleton, not singleton in case of literal construction of object e.g Object.create
//     .......... object literals ........
// Note:syntax : const JsUser = {};
//Note: symbol declaration, syntax => const sym = Symbol("key");
//Note: symbol and its key is not use directly in objects
const mySymbol = Symbol("mykey1");
const obj = {
  //Note:object variable treated as string
  name: "mahroo-malik",
  anotherName: "sana", //Note: here is not print by console.log(obj.email); methods
  class: "bscs",
  [mySymbol]: "mykey1",
  semester: 8,
  email: "mahroomalik@gmail.com",
  isLoggedIn: false,
  lastLogginDay: ["monday", 10, "jan", 2023],
};
//    console.log(obj.email); // its ok to print but its cant be use in symbol
//    console.log(obj["class"]); //object variable treated as string
//    console.log(obj["isLoggedIn"]);
//    console.log(obj["lastLogginDay"]);
//    console.log(obj["semester"]);
//    console.log(obj["anotherName"]);
//    console.log(obj[mySymbol]);
//    console.log(typeof mySymbol); // to check type
//     //Note: to change object value and freez value
obj.email = "sanazafr@gmail.com"; // Note: to change value
//     console.log(obj["email"]);
Object.freeze(obj); //Note: to freez value
obj.email = "maham456@gmail.com"; // Note:to change value
// Note: can't be change in freeze object , unfreeze the oject to change
// ---- Add function in object ---
obj.greeting = function () {
  console.log("welcome to js class!");
};
console.log(obj.greeting());
obj.greeting1 = function () {
  console.log(`hopefully you learnt basic js with ${this.name}`);
};
console.log(obj.greeting1());
