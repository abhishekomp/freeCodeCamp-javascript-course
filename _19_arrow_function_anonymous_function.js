var magic = function() {
  return new Date();
}

var magic = () => {
  return new Date();
}

const CURR_DATE = () => new Date();
console.log(CURR_DATE); //[Function: CURR_DATE]