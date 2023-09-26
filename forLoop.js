// ---------------------------- for loop ----------------------------
/* note: basic syntax:
 for (let index = 0; index < array.length; index++) {
        const element = array[index]; 
 }; */
 // Expanation about for loop syntax :
/* 1.let index = 0;               // decralation for variable 
   2. index < array.length;        // condition for check that index length must be less than array.length; 
   3.index++                       // increase index in iteration         
   4.const element = array[index]; // = value of array with index  for printing 
   5. console.log(index);          //    for printing */
//1. Example of for-loop 
for (let i = 0; i <=10; i++) {
    const element = i;
    if (i==5) {
    //    console.log(" 5 is the mid number 🍂"); 
    }
    // else{
    //     console.log("you are not at mid point 🍃");
    // }
    // console.log(i);
};
//2.--------------------- example #2 iner outer  -----------------------
// for (let i = 0; i <10; i++) {
//     console.log(`outer loop value is:${i}`); 
//     for (let j = 0; j <10; j++) {
//         console.log(`inner loop value is :${j} and inner loop here value is: ${i} `);
//     }
// };
//-------------------------------------------------------------------
 /*for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop value ${j} and inner loop ${i}`);
//         //console.log(i + '*' + j + ' = ' + i*j );
//        }
        
//     }*/

//--------------------------tables-------------------
// for (let i = 0; i <10; i++) {
//     console.log(`outer loop value is:${i}`); 
//     for (let j = 0; j <10; j++) {
//        console.log(i + "*" + j + "=" + i*j ); 
//     }
// };
// ----------------table of 5 --------------------
// for (let i=5; i <=5; i++) {
//     console.log(`table of 5`); 
//     for (let j = 1; j <=10; j++) {
//        console.log(i + "*" + j + "=" + i*j ); 
//     }
// };
//---------------tabel of 6---------------------
// for (let i=6; i<=6; i++) {
//     console.log(`table of 6`); 
//     for (let j = 1; j <=10; j++) {
//        console.log(i + "*" + j + "=" + i*j ); 
//     }
// };
//-----------------------------------------------------------------
// explanation about syntax:
// let i=6 // statring value 
// i<=6; ending value till end 
// for (let j = 1; j <=10; j++) loop from 1 to 10
// console.log(i + "*" + j + "=" + i*j ); 6*1 = 6 (i*j = 6 ,12 , 18 etc)

//---------- for loop for arrays which loop use for syntax ------------
let arrayForLoop = ["flash", "bern" , " superMan", "spider man", "batman", "arrowman", " 🍂coding Girl 🍂 "]
for (let index = 6; index < arrayForLoop.length; index++) {
    const element = arrayForLoop[index];
    // console.log(element);
};
// -------------------Break & continous------------------------------ 
// break stop the value 
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("the number 5 is detected:");
        break 
    }
     console.log(" the va;ie of : " + index);    
};
// continue skip the value 
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("the number 5 is detected:");
    continue
    }
     console.log(" the va;ie of : " + index);    
};
// do-while loop
 

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// 