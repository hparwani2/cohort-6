// let smartphone = {
//     camera: '64px',
//     storage: '128Gb',
//     makeACall: function(name) {
//         return `calling ${name}`
//     }
// }

// // console.log(smartphone.makeACall('8180909812'))

// // Iteration.
// let arr1 = [2,10,20];
// for(let i=0;i<arr1.length;i++) {
//     console.log(arr1[i]);
// }

// // of keyword

// for(let value of arr1) {
//     console.log(value);
// }

// // in keyword

// for(let index in arr1) {
//     console.log(arr1[index]);
// }

// let obj = {
//     a: 2,
//     b: 3
// }

// let obj1 = {
//     a: 9,
//     b: 10
// }

// modify(obj, obj1);

// console.log(obj); // {a: 16, b:3}
// console.log(obj1);// {a: 9, b:10}

// function modify(a1, b1) {
//     a1.a = 16
//     b1 = { str: 'Hello' }
// }


// constructor
// function Smartphone(camera, storage) {
//     this.camera = camera;
//     this.storage = storage;
// }

// let smartphone1 = new Smartphone('64px', '64GB');
// let smartphone2 = new Smartphone('32px', '128GB');

// console.log(smartphone1);

let smartphone = {
    camera: '64px',
    storage: '128Gb',
    makeACall: function(name) {
        return `calling ${name}`
    }
}

// of ---> values
// in ---> index and keys.

// iteration of objects.
// for(let key in smartphone) {
//     console.log(`${key} : ${smartphone[key]}`);
// }


// object.entries. ---> 2d array of key value pair
// object.keys ---> array of keys
// object.values ---> array of values

// let values = Object.values(smartphone);
// for(let value of values) {
//     console.log(value);
// }

// auth
function User(username, password) {
    this.username = username;
    this.password = password;
    this.authenticate = function(username, password) {
        if(this.username === username && this.password === password) {
            console.log('Authentication sucessful')
        } else {
            console.log('Auth Fail');
        }
     }
}

let user1 = new User('divyansh', 'div123')

user1.authenticate('divyansh', 'div123');