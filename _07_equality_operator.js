function testEqual(val){
  if(val == "10"){
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual("10"));

/* V.IMP
double equality operator(==) performs type conversion before comparing.
triple equality operator(===) does not perform type conversion before comparing. */