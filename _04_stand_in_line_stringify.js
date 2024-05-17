//This function takes a new item and adds to the end of the array and returns the first item. This is mimicing a Queue data structure.
function nextInLine(arr, item){
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));