/Comparing Two strings
// Function that converts the arrays to strings
// and then compares the strings
function isEqual(a, b) {
    return a.join() == b.join();
}
 
let a = [1, 6, 3, 5];
let b = [1, 2, 3, 5];
 
console.log(isEqual(a, b));
