
const processNumbers = (arr) =>{
    let newArr = arr.map((val)=>{
        return val*2;

    })
    let filteredArr= newArr.filter((val)=>{
        return val >= 10;
    })
    let sum = filteredArr.reduce((prev,curr)=>{
        return prev+curr;
    })
    return sum;
}
console.log(processNumbers([2,5,8,1,9]));