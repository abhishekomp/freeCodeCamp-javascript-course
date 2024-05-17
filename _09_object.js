var ourDog = {
  "name": "Camper", //Quincy
  "legs": 4,
  "tails": 1,
  "isFriendly": true,
  "friends": ["everything!"],  //[] is empty array
  "favorite food": "Chicken drumsticks"
};

//Accessing property value. There are 2 ways for accessing property of an object.
var dogName = ourDog.name;
//If the property has space in it, then you must use brackets to access the property value
var favoriteFood = ourDog["favorite food"];
console.log(dogName);
console.log(favoriteFood);

//Updating property value
ourDog.name = "Quincy";
console.log(ourDog.name);

//Add new properties to an object
ourDog.bark = "wow-wow";
ourDog['color'] = "brown";
console.log("After adding bark and color properties:\n" + JSON.stringify(ourDog));
//console.log(JSON.stringify(ourDog));

//Delete properties from an object
delete ourDog.bark;
console.log("After deleting bark property:\n" + JSON.stringify(ourDog));

