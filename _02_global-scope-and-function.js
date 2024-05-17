//Declare your variable here
var myGlobal = 10;

function func_1(){
  //Assign 5 to oopsGlobal here
  // var oopsGlobal = 5; //this variable is local to this function. It is unknown outside of this function.
  oopsGlobal = 5; //this variable is global and is known even outside of this function block
}

//Only change code above this line
function func_2(){
  var output = "";
   //at this point for var output(without =””), if you log this variable then it will output as undefined because no value has been assigned to it ever. Its value is undefined. Not typeOf.
  //  var output;
  if(typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
func_1();
func_2();