let students = [
    {
        "name": "Kushagra",
        "marks": 92
    },
    {
        "name": "Shameer",
        "marks": 93
    },
    {
        "name": "Biswabushan",
        "marks": 90
    }
]

// let maxMarks = Number.MIN_SAFE_INTEGER;
// let index = -1;
// for(let i=0;i<students.length;i++) {
//     let student = students[i];
//     if(maxMarks < student.marks) {
//         maxMarks = student.marks;
//         index = i;
//     }
// }
// console.log(students[index]);
let array = [1,2,3,4,5,6,7,8,9,10,11]
console.log(Math.max(...array));

console.log([1,2,3,4,5])























// call stack

function a(n) {
    if(n === 0) {
        return;
    }
    console.log('a started', n);
    a(n-1); // calling function from itself.
    console.log('a ended', n)
}

// print no's from 1..10

function printTillN(n) {
    if(n === 1) {
        return;
    }
    console.log(n); // pre-recursive.
    printTillN(n-1);
    //console.log(n); // post-recursive.
}

//printTillN(10);


function factorial(n) {
    if(n === 1) {
        return 1;
    }

    return n*factorial(n-1);
}

//console.log(factorial(3))

function fabonacci(n) {
    if( n === 0 || n === 1) {
        return n;
    }
    return fabonacci(n-2) + fabonacci(n-1);
}
//console.log(fabonacci(7))

// closure.
// counter.

function Counter() {
    let x = 0;
    this.increment = function() {
        x++;
    }
    this.print = function() {
        console.log(x);
    }
}

let counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.print(); // 3

let counter2 = new Counter();
counter2.increment();
counter2.print(); // 1