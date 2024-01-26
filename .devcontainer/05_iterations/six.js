
console.log("filter()");

// forEach loop not return the any value

// const coding =["js", "cpp","ruby"]

// const values= coding.forEach((item) =>{
//     console.log(item);

//     return item;
// })

// console.log(values);  // undefined

// fiter() -> Apply yhe filter tech to the arr
// store the values  -> also return the store values

// const nums =[1,2,3,4,5,6,7,8,9,10]

// // apply filter & store into the seperate
// const values = nums.filter((item) =>( item >4 && item <=9 && item %2 ==0))
// console.log(values);

 const nums =[1,2,3,4,5,6,7,8,9,10]

// apply filter & store into the seperate
// const values = nums.filter((item) =>( item >4 ))
// console.log(values);  // [ 5, 6, 7, 8, 9, 10 ]

// with {} -> block scope  -> Normal function

// const values =nums.filter(function (item){
//     return item>4
// })

// console.log(values);  // [ 5, 6, 7, 8, 9, 10 ]

// arrow function with block scope

// const values =nums.filter((item) => {
//     return item>4
// })

// console.log(values);  //[ 5, 6, 7, 8, 9, 10 ]


// apply filter in forEach loop also
// create the empty arr to store the filter values
const newNums=[]
nums.forEach((num) =>{
    if(num > 4){
        newNums.push(num);
    }
})
console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]



// Apply the diff filter() -> technique

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // 1 -> find the genre = 'History

  let gen = books.filter((bk) => bk.genre ==='History')
//   console.log(gen);

// 2 -> books puiblish after 2000
 gen = books.filter((bk) =>{
    return bk.publish > 2000
 })
//  console.log(gen);


// if the 2 or more condition then using the logical operator

gen = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre !== 'Science'
})
console.log(gen);

