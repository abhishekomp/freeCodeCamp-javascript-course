const sum = (function() {
  return function sum(x, y, z){
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
})();

const sum_rest = (function() {
  return function sum(...args){
    //const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
})();

console.log(sum(1, 2, 3));
console.log(sum_rest(1, 2, 3));
console.log(sum_rest(1, 2, 3, 4));