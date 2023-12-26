console.log("Omkar")

// declare the variable by using CONST & LET

// Not prefer the VAR  coz the issue of the block scope & functional scope

// const -> If declare then further not chage
// let & var -> give the memory space in memory -> use to declare the variale they changes further declare 
// if javascript define the variacle without any keyword declare but this is not good
// if any variable is declare but not not assign then the value is not define

const accountId = 29   // not change
let accountMail ="omnimase@gmial.com"  // change
var accountPass ="12345"
accountCity ="Pune"  // without any keyword also variable can declare
let accountState;   // if not any value assign then by default -> undefined

// print the value use-> console.log()
// print the value in the table format use -> print [index , value pair] -> console.table([a,x,b])

console.log(accountId);
console.table([accountId,accountMail,accountPass,accountCity,accountState])

// if the value changes 
// accountId =08   // this is declare in the const that why not change
accountMail="om08@gmail.com"  // all other change acc to the declare
accountPass ='9545'
accountCity ="Nagar"
accountState="mh"


console.table([accountId,accountMail,accountPass,accountCity,accountState])