function combineArrays(...arrays) {
  // Write your code here
  return [].concat(...arrays);
}
//self
function filterNumbers(min, max, ...numbers) {
  // Write your code here
  return numbers.filter((num) => num > min && num < max);
}

console.log(combineArrays([1, 2], [3, 4], [5, 6]));
console.log(filterNumbers(3, 7, 1, 4, 8, 6, 2, 5));
