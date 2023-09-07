// Find common elements in an array ✅
let a = [0,11,2,33,4,5];
let b = [5,4,33,2,11,0];

function  commonElements(a,b){
    return a.filter(element => b.includes(element)).sort((a,b) => a - b);;
}
console.log(commonElements(a,b));
// the commonElements function have two parameter -- i have to put two array in array in parameter 
