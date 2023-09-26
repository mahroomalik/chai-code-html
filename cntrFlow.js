// control flow also called logic control/flow
//Note:not all code run a part of code execute as in part which neended as if you login , logout , for diffrent purpuse different peice of code run not all => 
// ------------------------- True Condition -------------------------------------
//Note: in this condition (true ) => scope=> {} must be run
if (true) {         
    // console.log();
};
// 1.loop Example for true:
const UserIsLoogedIn = true;
if (UserIsLoogedIn) {
    // console.log(`"Status is Active.... 😶"`);
}
// -------------------------- False Condition -----------------------------------
//note:in this condition (false) => scope must be  not be run
if (false) { 
    // console.log();
};
//2. loop Example for false:
const UserIsLoogedInNow = false;
if (UserIsLoogedInNow) {
    // console.log(`important! this statement is not print bcz false`);
};
// ----------------------------Comparision Condition ---------------------------
//Note:in this condition (comparision ) => scope will run if statement comparison fullfill condition exactly 
let name ="mahroo";
if (name == "mahroo") { 
    // console.log(`conddition fulfill the name is : ${name}`);
};
// note: comparision operators are: > , < , => , =< , == ,!= 
// important Note! = is use to assign value but == for comparision , === is use to comparision and datatype also
//3. Example of == comparision
if (2 =="2") {
    // console.log("datatype is not same : but it print because it consider it=> true");
};
//4. Example of === comparision
if (2 ==="2") {
    // console.log("datatype is not same :its not print because it consider it=>false");
};
//5. Example of ! = comparision // note != is used for not equal to 
if (3 != 2) {
    // console.log(" 3 is not equal to 2 ,its print because it consider it=>true");
};
// ---------------------------If / Else Statement ----------------------------------
/* basic syntax =>
if (condition) {
    
} else {
    
} ;*/
//6.  Example of if / else statement 
const TodayTemperature = 37;
if (TodayTemperature > 40) {
    // console.log("very hot day....");
} else {
    // console.log("its cool day.... ");
};
//7 . Example of if / else statement in global & block scope 
  //  a.  example of if / else statement in block scope 
  const weatherTemp = 40;
  if ( weatherTemp == 40) {
    const humidty = "dryness..."
    // console.log(`summer season is and ${humidty} ....`);
  }else{
    // console.log(" winter season is ....");
};
// console.log(`summer season is and ${humidty} ....`); // Note: this statement is not run outside because this is block scope 

   //  a.  example of if / else statement in global scope 
  var weatherTemp1 = 30;
  if ( weatherTemp1 == 30) {
    var air = 90;
    // console.log(`the temperature is high and air ${air}% dry`);
  }else{
    // console.log("winter season is ....");
  }; 
//   console.log(`the temperature is high and air ${air}% dry`);// Note: this statement is run outside because this is global scope with => var
// ------------------------short method --------------------------------------
let balance = 100;

// if ( balance > 50) console.log("this is short syntax for if condition...."); 
//--------------------------Nested if/else condition ---------------------------
const accountBalance = 100;
if (accountBalance < 1000) {
    console.log("your account balance is not sufficient");
}else if (accountBalance == 1000) {
    console.log("your account balance is 1000");
}else if (accountBalance == 2000) {
    console.log("your account balance is 2000");
}else if(accountBalance == 3000) {
    console.log("your account balance is 3000");
}else if(accountBalance == 4000) {
    console.log("your account balance is 4000");
}else if(accountBalance == 5000) {
    console.log("your account balance is 5000");
}else {
    console.log(`your account balance is ${accountBalance}`);
};   
// --------------------AND , OR Operation--------------------------
const UserHasDebitCard = true ;
const UserIsInsider = true;
const loggedInUser = true;
const UserHasGoogleAc = true;
const cashIsNotAllowed = false;
const UserEmailAc = true;
if (UserHasDebitCard && UserIsInsider) {
    console.log("User can Buy things on Discount");
};
if (UserHasGoogleAc || UserEmailAc ) {
    console.log("user can enter in the mall ");
} else {
     console.log("user not Allowed");
};
if (UserHasDebitCard && cashIsNotAllowed ) {
    console.log("Sorry we accept Debit Card only");
};
if (UserEmailAc && cashIsNotAllowed) {
    console.log("we offer 10% discount ");
} else if (UserEmailAc || cashIsNotAllowed) {
    console.log("we offer 20% for first time ");
}
else {
    console.log("we offer  5% discount on 1000rs billing ");
};