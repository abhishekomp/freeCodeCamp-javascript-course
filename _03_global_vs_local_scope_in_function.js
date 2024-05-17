var outerWear = "T-Shirt";

function myOutfit(){
  // var outerWear = "Sweater";
  outerWear = "jeans"; //Remember if you skip var keyword then this variable gets a global scope and since there is already a variable in the global scope by the same name, that same variable will be re-assigned to a new value.
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);