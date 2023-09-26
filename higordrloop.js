// high order loop in js 
// high level loop are those which is nested array and nest array object loop 
// ["", " ", "",""]  => array
// object in Array:
// [{},{},{}] problem is to take piece of value from this nested array
//---------------for of loop ------------------------
// iterators are string  , arrays
// iterator are same as i , as variable
let myArray = ['flash', "batman", "superman"]
for (const arr of myArray ) {
    // console.log( arr);
};
// for of loop also use for single word of string 
let greeting = "welcome!";
for (const greet of greeting) {
    console.log(greet);
};  