function convertToBits(n) {
    let result = ""; 
    while(n) {
        let rem = n % 2;
        result= rem + result;
        n = parseInt(n/2);
    }
    return result;
}

function isEven(n = 4) {
    if(n&1) {
        return false;
    }
    return true;
}

function hcf(a, b) {
    let hcf;
    for(let i=1; i<= a && i<=b;i++) {
        if(a%i === 0 && b%i===0) {
            hcf = i
        }
    }
    return hcf;
}

function lcm(a, b) {
    return (a*b)/hcf(a, b);
}

function findParams(A) {

    for(let i=0;i<A;i++) {
        for(let j=0;j<A;j++) {
            if((i ** 2 + j ** 2) === A) {
                console.log(i, j);
                return;
            }
        }
    }
}


function sumOfDigits(num) {
    let result = 0;
    let innerExist = false
    while(parseInt(num/100) != 0) {
        innerExist = true;
        num = parseInt(num/10);
        let rem = num % 10;
        result = result + rem; 
    }
    return !innerExist ? -1 : result;
}

// console.log(sumOfDigits(42))


function addWithBit(a, b) {
    while(b != 0) {
        let carry = a&b;
        a = a^b;
        b = carry << 1;
    }
    return a;
}

// console.log(addWithBit(100, 114))
// a = 101, b=011, carry = 001
// a = 110, b=010, carry = 010
// a = 100, b = 100, carry = 100
// a = 000, b = 1000, carry = 000
// a = 1000, b = 0, 





function fibonacci(n) {
    let first = 0;
    let second = 1;
    if(n === 1)
        return first;
    if(n === 2)
        return second;
    n = n-2;
    console.log(first)
    co
    let nextNo;
    while(n--) {
        nextNo = first + second;
        first = second;
        second = nextNo;
        console.log(nextNo)
    }
}

// console.log(fibonacci(3))

// return - returning a value from function.

function pyramid(n) {

    for(let i=1;i<=n;i++) {
      let pattern = '';
      for(let j=1;j<=n-i;j++) {
        pattern+=' '
      }
      
      for(let j=1;j<=i;j++) {
          pattern+=`${i} `
      }
      console.log(pattern)
    }
}

let input = 'abc';
let result = '';
for(let i=input.length-1;i>=0;i--) {
    result=result + input[i];
}
console.log(result)

// 2. 60 as a factor. - code is on students end.