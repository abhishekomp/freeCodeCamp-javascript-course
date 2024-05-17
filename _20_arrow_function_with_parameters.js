var myConcat = function(arr1, arr2){
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]

var myConcat_arrow_func = (arr1, arr2) => {return arr1.concat(arr2);}
var myConcat_arrow_func_trimmed = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat_arrow_func([1, 2], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(myConcat_arrow_func_trimmed([1, 2], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]