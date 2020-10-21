var pens;
//creating the pens array
pens = new Array["red","blue","green","yellow"];

//getting the forth pen
var forthPen = pens[3];
//changing the forth pen
forthPen = "purple";

//array can hold various types of information, strings - integer - boolean
var mixed = new Array["here", 5, false]


//PROPERTIES
//array also have a length (how long the array is)
var length = pens.length;

//METHODS
//reversing an Array
pens.reverse();

//removes the first value of the Array
pens.shift();

//adding a value to the first position  of the Array
pen.unshift("black");

//remove at the end of Array
pen.pop();

//add to the end of the array
pen.push("pink");

//find the position (start from) and remove the n number
pens.splice(pos,n);


//Create a new copy of the array
var newPens = pens.splice();
newPens.push("White");
//newPens now has everything pen has but also white.

//finds the first element that matches the search
var result = pens.indexOf("orange",1) //("search match", position)
//gets back the place of where orange is

//returns items in a array
var arrayString = pens.join(", ") // seperated with a ,
console.log("Strings ");
