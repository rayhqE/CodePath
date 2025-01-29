function sumofArray(arr){

    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum= sum+ arr[i];
    } 
    return sum;




} 
console.log(sumofArray([1,2,3]));