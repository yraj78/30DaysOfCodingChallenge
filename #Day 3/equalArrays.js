//Checking if two arrays are equal or not

const equal=(array1,array2)=>{
  let j=0;
  for(element of array1){
    if(element!=array2[j]){
    return "Arrays are not equal";
    }
     j++;
  }
   return "Arrays are equal";
}

//Testcase:1
let A=[1,2,5,4,0];
let B=[1,2,5,4,0];

//Testcase:2
let C=[1,2,3,4,5];
let D=[11,22,33,44];

console.log(equal(A,B));
console.log(equal(C,D));
