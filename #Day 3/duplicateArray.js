//finding dupicates in arrays

function dup(array1,array2){
    let newArray=[];
    for (element of array1){
        if(array2.includes(element) && !newArray.includes(element)){
            newArray.push(element);
        }
        
    }
    return newArray;
}
let A =[0,1,2,3,4,5];
let B =[5,4,3,2,1,0];
console.log(dup(A,B));
