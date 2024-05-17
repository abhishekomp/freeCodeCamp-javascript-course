var ourDog = {
  "name": "Camper", //Quincy
  "legs": 4,
  "tails": 1,
  "isFriendly": true,
  "friends": ["everything!"],  //[] is empty array
  "favorite food": "Chicken drumsticks"
};

function checkObj(checkProp){
  if(ourDog.hasOwnProperty(checkProp)){
    return ourDog[checkProp];
  } else {
    return "Not found";
  }
}

console.log(checkObj("favorite food"));
console.log(checkObj("favourite food"));