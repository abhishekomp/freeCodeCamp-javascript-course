var a = 48;
console.log(a/8);

// var msg="I am a string";
// var msg="I am a \"double quoted\" string inside \"double quotes\"";
// console.log(msg);

var msg="I am a string";
var msg='I am a "double quoted" string inside "double quotes"';
console.log(msg);

var msg=`I am a "double quoted" string inside "double quotes". He's a good girl.`;
console.log(msg);

var myStr = 'Hello World';
console.log(myStr.length);

var myArray = [];
var ourArray = ["Hello", "World"];
console.log(ourArray);

//Array push method
var name_age_arr =  [["Abhishek", 40], ["Kirti", 38]];
console.log(name_age_arr);
name_age_arr.push(["Abhikriti", 12]);
console.log(name_age_arr);
var item_removed = name_age_arr.pop();
console.log(name_age_arr);
console.log(item_removed);
console.log("End of push demo");

//Array pop method
var name_age_arr =  [["Abhishek", 40], ["Kirti", 38]];
console.log(name_age_arr);

var item_removed = name_age_arr.pop();
console.log(name_age_arr);
console.log(item_removed);
console.log("End of pop demo");

//Array shift method
var name_arr =  ["Abhishek", "Kirti", "Abhikriti"];
console.log(name_arr);
var removedElement = name_arr.shift();
console.log(name_arr);
console.log(removedElement);
console.log("End of shift demo");

//Array unshift method
var name_arr =  ["Abhishek", "Kirti"];
console.log(name_arr);  //[ 'Abhishek', 'Kirti' ]
name_arr.unshift("Abhikriti");
console.log(name_arr);
console.log("End of unshift demo");


