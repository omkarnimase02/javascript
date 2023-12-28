console.log("Dates and Times in js");

let myDate = new Date()  // define the object 
// console.log(myDate.toString());  // into the string ->Thu Dec 28 2023 04:50:31 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());   // -> Thu Dec 28 2023
// console.log(myDate.toISOString());   // -> 2023-12-28T04:56:23.809Z
// console.log(myDate.toJSON());    // -> 2023-12-28T04:56:23.809Z

// console.log(myDate.toLocaleString());   //-> 12/28/2023, 4:57:12 AM

// console.log(myDate.toLocaleDateString());   // ->> 12/28/2023
// console.log(myDate.toTimeString());      // -> 04:57:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleTimeString());   // -> 5:02:07 AM
// console.log(myDate.toUTCString());   // 0

// createed by own

let mycreatedDate = new Date(2023,1,23)
// console.log(mycreatedDate);
// console.log(mycreatedDate.toString());
// console.log(mycreatedDate.toDateString());

let newDate = new Date();
console.log(newDate);   // 2023-12-28T05:21:07.145Z


console.log(newDate.getDate()); //28
console.log(newDate.getDay());  //4
console.log(newDate.getFullYear());  // 2023
console.log(newDate.getHours());  //  5
console.log(newDate.getMilliseconds); //fu

console.log(newDate.getMinutes());   //   21
console.log(newDate.getMonth());   ///    11
console.log(newDate.getSeconds());  //   7
console.log(newDate.getTimezoneOffset());  // 0
console.log(newDate.getTime()); //  1703734234





