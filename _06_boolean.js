function ourTrueFalse(isItTrue){
  if(isItTrue){
    return "Yes, it's true";
  }
  return "No, it's false";
}

var isItTrue; //will be false
console.log(ourTrueFalse(true));