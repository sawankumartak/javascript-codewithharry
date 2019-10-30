//Array And Object Tutorials

// let arr1 = [10,20,30];
// // console.log(arr);
// // console.log(arr.length);
// // console.log(arr.splice(0,1));
// // console.log(arr.reverse();
// console.log(arr.push(52));
// console.log(arr);


//Objects
let library = {
  bookname : "Javascript",
  publishDate :  "24-1-1995"
};
// console.log(library.bookname);
for (const key in library) {
   console.log(`The ${key} is ${library[key]}`);
}

let arraydemo = [0,20,54,85,78];

arraydemo.forEach(element => {
  console.log(element);
});