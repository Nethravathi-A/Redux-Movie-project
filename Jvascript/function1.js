//objects
//object creation
var person = {
    name: "bru",
};
var person1 = new Object();
person1.name="bru"
//assigning values to objects
person['DC'] = "batman";
person1.DC = "superman";
//What are primitive wrappers/built in wrappers?
var str = new String("");
var boolean = new Boolean();
// var boolean = new Boolean(1);
//whats a prototype?
var person = {
    name: "",
    age: null
};
var bru = Object.create(person);
bru.name = "Batman";
bru.age = 0;
bru.hobbies= [];
var anotherBru = Object.create(bru);
anotherBru.hobbies = ['roaming in the night', 'disappearing suddenly'];
//what is prototype chaining?
console.log(anotherBru);
//what are functions?
//function declaration
function a() {
    console.log("hello");
};
//function expression
var a = function() {
    console.log("hello");
};
//named function expression 
var a = function a() {
    console.log("hello");
};
console.dir(a);
//IIFE
var a = function() {
    console.log("hello");
}();
//or
(function(){
    console.log("hello")
})();
//IIOP
({init: function() {
    console.log("hello");
}}).init();
//callback fucntions
var superman = function(benormal) {
    console.log("save the world");
    benormal();
};
superman(function(){
    console.log("turn into a normal person");
});
//question
var obj = {
    a: function() {
        console.log(this);
        var b = function() {
            console.log(this);
        }
        b();
    }
}
obj.a();
var b = obj.a;
b();
11:48
//What are objects? - yes
//What are primitive wrappers/built in wrappers? -yes
//whats a prototype? - yes
//what is prototype chaining? - yes
//what are functions? - yes
//  -types of function (function declaration, function expression, named function expression, IIFE, IIOE) - yes 
//  -callback function - yes
//what is a scope chain? - yes