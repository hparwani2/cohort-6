// assign
let obj1 = {
    a: 20
}

let obj2 = {
    a: 30
}

let obj = {};
Object.assign(obj, obj1, obj2);

//console.log(obj);


//iteration of arr of objects.

let students = [
    {
        name: 'Titas',
        marks: 90,
        courses: ['FE-6', 'BE-5']
    },
    {
        name: 'Vidya',
        marks: 99,
        courses: ['FE-8', 'BE-2']
    },
    {
        name: 'Shameer',
        marks: 97,
        courses: ['FE-2', 'BE-9']
    }
]

// of

// for(let student of students) {
//     console.log(student)
// }

// in

// for(let index in students) {
//     console.log(students[index])
// }

// reduce
let arr = [1,2,3,4,5,6,7,8,9];
arr.reduce(function(initializer, curr) {
    return initializer+curr;
});

// user authentication.

function User(userName, password) {
    this.userName = userName;
    this.password = password;
    this.login = function(userName, password) {
        if(this.userName === userName && this.password === password) {
            console.log('auth successful');
        } else {
            console.log('wrong credentials')
        }
    }
}

let user1 = new User('titas123', 'titas@987');

user1.login('titas123', 'titas@987')

// console.log(user1)
let arr1 = [1,2,3,4,5,6,7,8,9,10];

let k = 0;
let result = [];
for(let i=0;i<2;i++) {
    let insideArr = [];
    for(let j=0;j<5;j++) {
        insideArr.push(arr1[k]);
        k++;
    }
    result.push(insideArr);
}



let matrix = [
    [1, 2, 3, 3],
    [9, 8, 7, 6],
    [10, 10, 10, 11]
]

function rowWithMaxUnique(matrix) {
    let result = {}
    for(let i=0;i<matrix.length;i++) {
        let insideMatrix = matrix[i];
        let tempObj = {};
        // create tempObj for every row
        /*{
            9: 1
            8: 1
            7: 1
            6: 1
        }*/
        for(let value of insideMatrix) {
            if(tempObj[value]) {
                tempObj[value] = tempObj[value] +1;
            } else {
                tempObj[value] = 1;
            }
        }
        
        let count = 0;
        /*
            [
                [9,1],
                [8,1],
                [7,1],
                [6,1]
            ]
        */
        for(let [key,value] of Object.entries(tempObj)) {
            if(value === 1) {
                count++;
            }    
        }
        result[i] = count;
        
    }
    return result;
}


// splice
// spiralMatrix
