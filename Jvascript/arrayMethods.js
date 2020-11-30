function arrayMethods() {
    var fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Apple'];
    var level = [100, 700, 500, 600];
    var originalArray = [0, 1, 2, 3, 4, 5];
  ​
    //sort and reverse
    // level.sort().reverse();
    // level.sort(function (a, b) {
    //   return b - a;
    // });
    // console.log('sort - ', level);
  ​
    //toString and join
    // console.log('toString -', fruits.join('*'));
  ​
    //pop and push
    // fruits.pop();
    // console.log(fruits);
  ​
    // fruits.push('kiwi');
    // console.log(fruits);
  ​
    //splice(index,number of elem) and slice(from,until) , split
    // let ref = originalArray.slice(1, 4);
    // let ref = originalArray.splice(2, 0, 'Hello', 'World');
    // console.log(originalArray, ref);
  ​
    //indexOf, includes
    // console.log(fruits.includes('Appdffle'));
  }
  // arrayMethods();
  ​
  // function arrayMethodsTwo() {
  //   let students = [
  //     { name: 'a', id: 5 },
  //     { name: 'b', id: 3 },
  //     { name: 'c', id: 2 },
  //     { name: 'd', id: 4 },
  //   ];
  ​
  //array.map(function(currentValue, index, arr), thisValue)
  //forEach and map chaining ,  filter(return)
  ​
  // let ref = students.map(loopDemo);
  ​
  // function loopDemo(student) {
  //   student.id = student.id * 2;
  //   console.log(student.name);
  //   return student;
  // }
  ​
  // let ref = students
  //   .map((student) => student.id)
  //   .filter((studentId) => studentId > 3);
  ​
  // // let refTwo = ref.filter((studentId) => studentId > 3);
  // console.log(students, ref);
  ​
  //findIndex , find
  // let searchElem = students.findIndex((student, index) => student.id > 4);
  // console.log(searchElem);
  // }
  ​
  // arrayMethodsTwo();
  ​
  function objectCopy() {
    const person = {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
      },
    };
  ​
    // let p1 = person;
    // p1.firstName = 'abc';
  ​
    // using  Object.assign() method
    // let p2 = Object.assign({}, person);
  ​
    // using spread ...
    // let p3 = {
    //   ...person,
    // };
  ​
    // p3.firstName = 'abc';
    // p3.address.street = 'hjg';
  ​
    // using JSON
    let p4 = JSON.parse(JSON.stringify(person));
    p4.firstName = 'abc';
    p4.address.street = 'hjg';
    console.log(person, p4);
  }
  objectCopy();