function stringReverse(str) {
   var stringSplit = str.split("");
   var reverseArr = stringSplit.reverse();
   var joinArr = reverseArr.join("");
   return joinArr;
}
console.log(stringReverse("Yash"));
