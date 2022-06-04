function tillingProblem(n) {
    if(n===1 || n===2 || n===0) {
        return n;
    }
    return tillingProblem(n-1) + tillingProblem(n-2);
}

//console.log(tillingProblem(3))


// function calculateGrades(score) {
//     if(score > 70) {
//         return 'A';
//     } 
//     return 'B'
// }

//calculateGrades(72)

function countMaze(m, n) {
    if(n < 1 || m < 1)
        return 0;
    if(n==1 && m==1) {
        return 1;
    }
    return countMaze(m-1, n) + countMaze(m, n-1);
}

//console.log(countMaze(4, 3))

function printSubsequence(arr, i, curr) {
    
    if(arr.length === i) {
        console.log(curr);
    }

    printSubsequence(arr, i+1, curr); // excluding
    curr.push(arr[i]);  // including
    printSubsequence(arr, i+1, curr); // including
    curr.pop();

}


function generateParenthesis(n, open, close, str) {

    if(open + close === 2*n) {
        console.log(str);
        return;
    }

    if(open < n) {
        generateParenthesis(n, open+1, close, str + '(');
    }

    if(close < open) {
        generateParenthesis(n, open, close+1, str+')');
    }
}

//generateParenthesis(3, 0, 0, '');


function permutations(str, l, r) {
    if(l === r) {
        console.log(str);
        return;
    }
    for(let i=l;i<=r;i++) {
        permutations(swap(str, i, l), l+1, r);
    }
}

permutations('ABC', 0, 2);

function swap(str, i, j) {
    str = str.split('')
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    return str.join('');
}