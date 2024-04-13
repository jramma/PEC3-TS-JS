function printArray(array) {
    //code to print the array on console
    console.log(array.join(','));
}
var array = [2, 3, 4];
console.log(array[0]); //2
printArray(array.slice(1)); // 3,4
array.push(5);
printArray(array.slice(1)); // 3,4,5
console.log(array.pop()); //5
printArray(array.slice(1)); // 3,4
array.unshift(1);
printArray(array.slice(1)); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
var everyisgreater = array.every(function (num) { return num > 3; });
console.log(everyisgreater); //false
/** check if every number is less than 10 */
var everyisless = array.every(function (num) { return num < 10; });
console.log(everyisless); //true
console.log(array.sort(function (a, b) { return a - b; })); //1,3,4,8
console.log(array.sort(function (a, b) { return b - a; })); //8,4,3,1
