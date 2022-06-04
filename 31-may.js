function printStar(n) {
    if(n === 0)
        return;
    printStar(n-1);
    let star = appendStar(n);
    console.log(star);
}

function appendStar(n) {
    if(n === 0)
        return '';
    
    return '* ' + appendStar(n-1);
}

//printStar(5);

function factorial(n) {
    if(n === 0)
        return 1;
    return n*factorial(n-1);
}


function isSorted(arr, i) {

    if(i === arr.length - 1)
        return true;
    let check = arr[i] <= arr[i+1];
    return check && isSorted(arr, i+1);
}

// 1, 2, 4, 3

function friendPair(n) {
    if(n === 0 || n === 1 || n === 2)
        return n;

    return friendPair(n-1)   + (n-1) * friendPair(n-2);
}

console.log(friendPair(4));

function isPalindrome(str, i, j) {

    if(i >= j) {
        return true;
    }
    return str[i] === str[j] && isPalindrome(str, ++i, --j);
}
let input = 'abca'
console.log(isPalindrome(input, 0, input.length-1));