//generate a random number from 0(inclusive) till 19
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);

//Math.random() will return a decimal in the range 0(inclusive) till 0.999999
//Math.random()*10 will return a decimal in the range 0(inclusive) till 9.999999
//Math.floor(9.87598) will return 9
//To get a whole number between 1(inclusive) till 10(inclusive) use:
//Math.floor(Math.random()*10) + 1

var numberBetween1And10 = Math.floor(Math.random()*10) + 1;
console.log(numberBetween1And10);

function generateNumberBetween1And10(){
  return Math.floor(Math.random()*10) + 1;
}

for(let i = 1; i <= 10; i++){
  console.log(generateNumberBetween1And10());
}