/what is a closure? - yes
    // - simple - yes
    // - complex - yes
// explain let,const with examples? - yes
// closures with set timeout - yes
//what is a function constructor? - yes
//explain function constructor with prototype? - yes
//classes in es6 - yes
//static method - yes
var a = function() {
    var b = 20;
    function c() {
        var d = 20;
        function e() {
            var f = 30;
            console.log(b, d, f);
        }
        e();
        console.log(b, d);
    }
    c()
    console.log(b);
};
a();
11:05
// closure
var a = function () {
  var b = 10;
  function c() {
    console.log(b);
  }
  console.dir(c);
  c();
};
a();
var a = function (one) {
  return function (two) {
    console.log(one + two);
  };
};
//a(1)(2);
var b = a(1);
b(2);
console.dir(a(1));
//closure with setTimeOut
function closureExample() {
  var i = 0;
  for (i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("counter value is " + i);
    }, 1000);
  }
}
// call the example function
closureExample();
function asyncOperation(counter) {
  setTimeout(function () {
    console.log("counter value is " + counter);
  }, 1000);
}
function otherClosureExample() {
  var i = 0;
  for (i = 0; i < 3; i++) {
    asyncOperation(i);
  }
}
otherClosureExample();
//another example
for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
for (let i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//function constructor
var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
var Bru = new Person("Bru", 0);
//function constructor with prototype
Person.prototype.getName = function () {
  console.log(this.name);
};
//example
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  return {
    greet: "askjdaksnd",
  };
};
var bru = new Person("abc", 0);
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  return true;
};
var bru = new Person("abc", 0);
//classes in es6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static greet() {
    console.log("hello");
  }
  getName() {
    console.log(this.name);
  }
}
const b = new Bru("bru", 0);