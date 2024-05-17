function ourRandomRange(ourMin, ourMax){
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

// returns a whole number between 5 and 10(including 5 and 10)
console.log(ourRandomRange(5, 10));