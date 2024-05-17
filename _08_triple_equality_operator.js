function testStrict(val){
  if(val === "10"){
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict("10"));

/* V.IMP
double equality operator(==) performs type conversion before comparing.
triple equality operator(===) does not perform type conversion before comparing. */

/*
3 === 3   =>true
3 === '3' =>false

3 == 3   =>true
3 == '3' =>true (converts the string to number and then perform the comparison)
*/