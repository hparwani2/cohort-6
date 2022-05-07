// minimum and maximum.
function min(initializer, curr) {
    return curr < initializer ? curr : initializer; 
}

function max(initializer, curr) {
    return curr > initializer ? curr : initializer; 
}
let arr = [2, 4, 62, 1, 0, 8, 9, -1]
// console.log(arr.reduce(min))
// console.log(arr.reduce(max))

// reverse

function reverse(arr) {
    let chintu = 0;
    let mintu = arr.length - 1;
    while(chintu < mintu) {
        swap(arr, chintu, mintu);
        chintu++;
        mintu--;
    }
}

function swap(arr, chintu, mintu) {
    let temp = arr[chintu];
    arr[chintu] = arr[mintu];
    arr[mintu] = temp;
}

// reverse(arr)
// console.log(arr)
function count(initializer, curr) {
    if(curr === 0) {
        initializer + 1;
    }
    return initializer;
}
function sortZeroOneCount(arr) {
    let countZero = arr.reduce(count);
    let result = [];
    for(let i=1;i<=countZero;i++) {
        result.push(0);
    }
    for(let i=1;i<=arr.length - countZero;i++) {
        result.push(1);
    }
    return result;
}
function sortZeroOne(arr) {
    let chintu =0;
    for(let mintu=0; mintu<arr.length; mintu++) {
        if(arr[mintu] === 0) {
            swap(arr, chintu, mintu)
            chintu++;
        }
    }
}

// let arr1 = [1, 1, 1, 1, 1]
// sortZeroOne(arr1)
// console.log(arr1)




function maxProfit(arr) {
    let maxProfit = 0;
    let priceTillNow = arr[0];
    for(let value of arr) {
        if(value > priceTillNow) {
            maxProfit+=value - priceTillNow;
        }
        priceTillNow = value;
    }
    return maxProfit;
}

console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]))