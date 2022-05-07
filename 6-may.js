// // function removeDuplicates(values) {
// //     let obj = {};
// //     for(let value of values) {
// //         obj[value] = true;
// //     }

// //     return Object.keys(obj);
// // }



// // console.log(removeDuplicates([1, 2, 2, 5, 9, 9, 9, 5]))

// function run(passedSum) {
//     return passedSum(2, 3);
// }

// let sum = function(a, b) {
//     return a+b
// }

// run(sum);


// // Object.freeze
// /*
//     1. cannot modify the values.
//     2. cannot add or delete properties.
// */
// // const student = {
// //     name: 'Chiranjit',
// //     course: 'relevel'
// // }
// // console.log(student)
// // Object.freeze(student)
// // student.marks = 80
// // student.name = 'Biswajit'
// // console.log(student)


// // Object.seal
// /*
//     1. cannot add or remove props.
//     2. can modify the values of existing props.
// */

// // const student1 = {
// //     name: 'Chiranjit',
// //     course: 'relevel'
// // }
// // console.log(student1)
// // Object.seal(student1)
// // student1.marks = 80
// // console.log(student1)


// // filteration
// // function evenElements(arr) {
// //     let result = [];
// //     for(let value of arr) {
// //         if(value%2 === 0) {
// //             result.push(value)
// //         }
// //     }
// //     return result;
// // }

// // function divisibleBy3(arr) {
// //     let result = [];
// //     for(let value of arr) {
// //         if(value%3 === 0) {
// //             result.push(value)
// //         }
// //     }
// //     return result;
// // }

// // let array = [1,2,4,8,3,9,16]
// // let isEven =  function(value) {
// //     return false
// // }
// // console.log(array.filter(isEven))
// // let isDivisibleBy3 =  function(value) {
// //     return value%3===0
// // }
// // filter(array, isDivisibleBy3)


// // map function

// let arr = [1,2,3,4,5,6]

// let square =  function(value) {
//     return value*value
// }

// //console.log(arr.map(square))


// // sort
// // let unsortedArray = [2, 1, 0, 6, 9, 5]
// // let compare = function(a, b) {
// //     return b - a;
// // }

// // console.log(unsortedArray.sort(compare))

// // negative -> first parameter will be placed first
// // positive -> second paramter will be placed first


// let students = [
//     {
//         name: 'Sadik',
//         marks: 99
//     },
//     {
//         name: 'Kushagra',
//         marks: 60
//     },
//     {
//         name: 'Sai',
//         marks: 50
//     },
//     {
//         name: 'jaylakshmi',
//         marks: 90
//     }
// ]

// let greaterThan75 = function(student) {
//     return student.marks >= 75;
// }

// // forEach
// students.forEach(print)

// function print(student) {
//     console.log(student)
// }

// // reverse
// console.log(arr.reverse());

// // reduce

// let nonReduced = [1,2,3,4,5,6];

// let reduceSum = function(initializer, curr) {
//     return initializer - curr;
// }

// //
// // function customReduce(arr, initializer) {
// //     for(let value of arr) {
// //         initializer = initializer + value;
// //     }
// //     return initializer;
// // }
// //console.log(nonReduced.reduce(reduceSum));

// // split
// let str = 'Hello World';
// console.log(str.split(' '))

// //slice
// let unSliced = [1,2,3,4,5,6,7,8,9,10];
// console.log(unSliced.slice(1, 7))


// destructuring.

let superHeros  = [
    {
        realName: 'ganghadhar',
        heroName: 'shaktimann',
        cities: ['mumbai', 'delhi', 'pune', 'chennai'],
        villian: {
            name: 'jaikal'
        }
    },
    {
        realName: 'Tony Stark',
        heroName: 'IronMan',
        cities: ['New York', 'Mirzapur', 'Wassepur'],
        villian: {
            name: 'kaleen Bhaiya'
        }
    },
    {
        realName: 'Steven Strange',
        heroName: 'Dr. Strange',
        cities: ['Universe'],
        villian: {
            name: 'doormamu'
        }
    }
]

let [superHero1] = superHeros;


let heroName;
({heroName} = superHero1)

// console.log(heroName)


let obj1 = {
    name: 'Sadik',
    age: 22,
    marks: 98
}

let obj2 = {
    age: 22,
    name: 'Sadik',
    marks: 98
}

console.log(checkEqual(obj1, obj2))
function checkEqual(a, b) {

    for(let key in a) {
        if(a[key] !== b[key]) {
            return false;
        }
    }
    for(let key in b) {
        if(a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}


