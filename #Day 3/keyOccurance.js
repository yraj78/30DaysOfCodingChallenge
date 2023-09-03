//Occurance of key=1 in an array

const x=(arr,k)=>{
    return arr.includes(k)?
      "key=1 is present in array" : "not present in array";
}
 let A=[0,1,2,3,4,5];
 let B=[5,4,3,2,1,0];
console.log(x(A,1));
console.log(x(B,1));
