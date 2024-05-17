// Square only positive integers
const squareList = arr => {
  // Only change code below this line
  const square = arr.filter(num => Number.isInteger(num) && num >= 1)
        .map(num => num * num)
  return square;
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers)