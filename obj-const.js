// ------- constructor / singleton object ---------
const obj = new Object(); //Note: singleton object
// console.log(obj);
const nonObj = {}; //Note: non singleton object
// console.log(nonObj); // Note:both are same both are empty object =>{}
(obj.class = "BSCS"),
  (obj.email = "mahroo@3455"),
  (obj.lastLogginDay = "mon"),
  (obj.semester = 8);
// console.log(obj); // Note:all value stored in =>{const obj = new Object();}
//  ----------- another object ------------
const regularUser = {
  fullname: {
    fullNameOfUser: {
      firstName: " mah",
      lastName: "Roo",
    },
    email: "mahroomalik786@gmail.com",
  },
  class: "bscs",
  semester: 8,
};
// console.log( regularUser);
// console.log( regularUser.fullname.email);
// console.log( regularUser .fullname.fullNameOfUser.firstName);
const object1 = { firstName: " mah", lastName: "Roo" };
const object2 = {
  email: "mahroomalik786@gmail.com",
  class: "bscs",
  semester: 8,
};
const object3 = { object1, object2 };
// console.log(object3);
const object4 = Object.assign({}, object1, object2);
// console.log(object4);
const object5 = { ...object1, ...object2 };
// console.log(object5);
// console.log(obj);
// console.log(Object.keys(obj)); // object's  variable
// console.log(Object.entries(obj)); // object whhole
// console.log(Object.values(obj ));   // values of variable in object
// console.log(obj.hasOwnProperty('lastLogginDay'));
// console.log(obj.hasOwnProperty('LogginDay'));
// ---------------------- Destructuring of Object -----------------------------
// Note:let another Oject Of Course
const Course = {
  course1: "bscs",
  course2: "bs-it",
  course3: {
    itStudent: "itean",
    nonItStudent: " non- itean",
  },
  course4: "bs-software engineering",
};
/*Note:for output/ print/ access any value we take sometime over and over again value like: =>  course.course3.itStudent ,course.course3...
 we can a metode syntax is => const {write access value variable name : can replace name here also} = course ; 
 const {course3} = Course; */
// console.log(course3);
const { course3: cr3 } = Course;
// console.log(cr3);
// ------------------------------- APIs ---------------------------------------
/*Note: work to handover to other, value from backend in the format of XML , now in JSON format 
 not API give data in objects it may be arrays also like */
[{}, {}, {}, {}];

// another example
const jsonText1 = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
console.log(JSON.parse(jsonText1));
