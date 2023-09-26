// Map
// map syntax is same as object creation 
const map = new Map()
map.set('pk', 'Pakistan');
map.set('in', 'India');
map.set('Us', 'United state');
map.set('UK', 'England');
map.set('UAE', 'united Amarate ');
map.set('Af', 'Afganistan');
// console.log(map);
//example wuth for of loop:
for (const key of map) {
    // console.log(key);
};
// without array with key and value
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// };
//  // ---------------for of loop on object----------------------------
// object is not iterable in for of loop as above let's have a look follow:
 const myobj = {
'pk':'Pakistan',
'in':'India',
'Us':'United state',
'UK':'England',
'UAE': 'united Amarate ',
'Af':'Afganistan'
 };
//  console.log(myobj );
//   using for of loop 
  for (const [key, value] of myobj) {
    // console.log(key,':-', value);
  };

