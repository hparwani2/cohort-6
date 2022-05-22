// // // // first-class-citizen
// // // // whatever thing that you can pass in afunction, 
// // // // store in a variable and return from a function.
// // //     // 1. primitives
// // //     // 2. Objects
// // //     // 3. function.
// // // // Higher Order Functions.
// // // // Functions which are accepting a function as a paramter or
// // // // returning a function.

// // // // function getCalculatedMarks(...input) {
// // // //     return function() {
// // // //             let sum = 0;
// // // //             for(let mark of input) {
// // // //                 sum+=mark;
// // // //             }
// // // //             return sum;
// // // //     }
// // // // }


// // // function multipleVariable(...input) {
// // //     console.log(input);
// // // }

// // // multipleVariable(2,3,4,5,6,7,8,9)





// // // // Higer order function.
// // // function a() {
// // //     return function() {
// // //         console.log('Hey i am inside');
// // //     }
// // // }

// // // let insideFunc = a();
// // // insideFunc();


// // // // Higher Order Functions.
// // // // function abc(bFun) {
// // // //     bFun();
// // // // }


// // // // abc(function() {
// // // //     console.log('Hello buddy')
// // // // })


// // // function modify(obj1, obj2) {
// // //     obj1.a = 3;
// // //     obj2 = {b: 9}
// // // }

// // // let ab = {
// // //     a: 2
// // // }

// // // let cd = {
// // //     b: 5
// // // }

// // // modify(ab, cd);

// // // console.log(ab, cd)

// // // let arr = [1,2,3,4,5,6,7,9,10];
// // // // whatever function we are passing inside filter function 
// // // // that should either return truthy or falsy.
// // // // let result = arr.filter(function(value, index) {
// // // //     console.log(value, index, wholeArr);
// // // //     return true;
// // // // })

// // // let students = [
// // //     {
// // //         name: 'sharukh',
// // //         marks: 70
// // //     },
// // //     {
// // //         name: 'Himanshu',
// // //         marks: 32
// // //     },
// // //     {
// // //         name: 'mansi',
// // //         marks: 99
// // //     },
// // //     {
// // //         name: 'karan',
// // //         marks: 72
// // //     }
// // // ]

// // // let gradesAttached = students.forEach(function(student) {

// // //     if(student.marks < 70)
// // //         student.grade = 'C';
// // //     else if(student.marks >= 70 && student.marks < 90)
// // //         student.grade = 'B';
// // //     else
// // //         student.grade = 'A';
// // // }
// // // )

// // // for(let student of students) {
// // //     console.log(student)
// // // }


// // // // let arr = [1,2,3,4,5,6,7,8,9];

// // // // let sum = arr.reduce(function(accum, value) {
// // // //     return accum + value;
// // // // }, 0);

// // // // console.log(sum);


// // // let arr = ['z', 'p', 'a', 'cd', 'cb'];
// // // arr.sort(function(a ,b) {
// // //     if(a < b) {
// // //         return -1;
// // //     } else {
// // //         return 1;
// // //     }
// // // })

// // // console.log(arr);




// // // function modify(input, value) {
// // //     input.push(value); // pass, by reference
// // // }

// // // let arr = ['pass']
// // // modify(arr, 'by reference')
// // // console.log(arr); // pass, by reference

































// // // // closure.


// // // function addNum(num) {
// // //     return function(val1, val2) {
// // //         return val1 * val2 + num;
// // //     }
// // // }

// // // let multiply = addNum(3);
// // // console.log(multiply(4, 5));




// // // function User(username, password) {
// // //     return function(checkUser, checkpass) {
// // //         if(username === checkUser) {
// // //             console.log('pass')
// // //         } else {
// // //             console.log('fail')
// // //         }
// // //     }
// // // }

// // // let login = User('abc', 'abc@123');
// // // login('ncjnas', 'bdjknkadc')

// // let arr = [1, 2, 24, 23, 3];

// // console.log(arr.sort());

// // let sum = (a, b) => a+b;

// // let arr = [3,6,1,2,9,10];
// // arr.sort((a, b) => a-b);


// // function SuperHero(realName, heroName, cities) {
// //     this.realName = realName;
// //     this.heroName = heroName;
// //     this.cities = cities;
// //     this.printHero = () => console.log(this.realName, this.heroName, this.cities);
// // }

// // let superHero1 = new SuperHero('Gangadhar', 'shktimann', ['mum', 'che']);
// // superHero1.printHero();

// // destructing of an array.
// let cities = ['mumbai', 'delhi', 'chennai', 'kolkata'];
// let [city1,,,city2] = cities;

// console.log(city1);
// console.log(city2);

// // destructing of an object

// let superHeros = [
//     {
//         realName: 'Tony',
//         heroName: 'Iron Man',
//         villian: {
//             name: 'Adhira',
//             power: 22
//         },
//         cities: ['new york', 'california']
//     },
//     {
//         realName: 'Gangadhar',
//         heroName: 'Shaktimann',
//         villian: {
//             name: 'Kaal',
//             power: 33
//         },
//         cities: ['mumbai', 'pune']
//     }
// ]

// let [, { 
//     villian : {
//         name: villianName
//     }
// }] = superHeros;
// console.log(villianName);
// // 1. incase of destructing array you only have to give variable name.
// // 2. incase of destructing object since we have key names Hence,
// // destructing will takes place with key names, and variable names
// // would be after :

// let m = 3
// let n = 2
// /*
// [
//     [1, 1]
//     [1, 1]
//     [1. 1]
// ]
// */

// // in 1st parameter you have to give
// // let matrix = Array(m).fill(Array(n).fill(1));

// // for(let inside of matrix) {
// //     console.log(inside)
// // }



let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]