let arr = [2, 3, 4, 65, 6, 7];
let nArr = arr.map((elem) => elem);
console.log(nArr); //! Array(6) [ 2, 3, 4, 65, 6, 7 ]

//! Find the length of each element in a new array
let fruits = ["Apple", "Orange", "Banana", "grapes"];
let lArr = fruits.map((elem) => {
  return elem.length;
});
console.log(lArr); //! Array(4) [ 5, 6, 6, 6 ]

//! Find the square root of every element and store it in a new array.
let num = [16, 45, 11, 6, 9, 12];
let sqArr = num.map((elem) => {
  return Math.sqrt(elem);
});
console.log(sqArr); //! Array(6) [ 4, 6.708203932499369, 3.3166247903554, 2.449489742783178, 3, 3.4641016151377544 ]

//! Print the name of an array of an object
let arrObj = [
  { pCode: 1001, pName: "Kamal" },
  { pCode: 1002, pName: "Aquib" },
  { pCode: 1003, pName: "Ahemd" },
  { pCode: 1004, pName: "Alim" },
];
let nameArr = arrObj.map((elem) => {
  return elem.pName;
});
console.log(nameArr); //! Array(4) [ "Kamal", "Aquib", "Ahemd", "Alim" ]
