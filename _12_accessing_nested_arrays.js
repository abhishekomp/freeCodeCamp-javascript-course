//Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

//accessing the 2nd tree item.
var mySecondTree = myPlants[1].list[1];
console.log(mySecondTree);