/* Note1: Immediately Invoke Function Expression (IIFE) a function execute immediately  
for to avoid pollution from global variable , we create a seperate scope and use IIFE e.g */
// 1.function without IIFE
/* function IIFE() {
console.log("Immediately Invoke Function Expression (IIFE)");
}
 IIFE(); */
/* Note2: after use of IIFE: syntax it rap the function in prenthesis => ( )
 e.g (function code write here); and no need to write function name for call */
// 2. function with named IIFE
(function IIFE() {
  console.log("Immediately Invoke Function Expression (IIFE)");
})(); /*Note3: no need to write function name for call which is IIFE(); => () but all function code rap with () */
// note:  ; closer ; is must be used in this IIFE expression
// 3.function with IIFE in Arrow function un-named IIFE
(() => {
  console.log("here arrow function with IIFE");
})();
// 4..function with IIFE using perameters
((name) => {
  console.log("here arrow function with IIFE....." + name);
})("MAH-ROO");
// note: function with name is name iffy otherwise Un-named iffy , when two iffy (IIFE) one after other then must be seperate with ; end sign
