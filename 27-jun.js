function tilingProblem(n) {
   if(n === 1 || n === 2)
        return n;
   return tilingProblem(n-1) + tilingProblem(n-2);
}

//console.log(tilingProblem(5));

function subsequences(arr, index, curr) {

    if(index === arr.length) {
        console.log(curr);
        return;
    }
    //exclusion
    subsequences(arr, index+1, curr);
    //inclusion
    curr.push(arr[index]);
    subsequences(arr, index+1, curr);
    //poping
    curr.pop();
}





function balancedParanthesis(n, open, close, str) {

    if(open + close === 2*n){
        console.log(str);
        return;
    }

    if(open < n) {
        balancedParanthesis(n, open+1, close, str+'(');
    }

    if(open > close) {
        balancedParanthesis(n, open, close+1, str+')');
    }

}

//balancedParanthesis(3, 0, 0, '');


function minkiWedsChintu(matrix, row, col) {

    // out of range.
    if(row === -1 || col === -1)
        return 0; 
    if(matrix[row][col] === -1)
        return 0;
    // minki reached to chintu
    if(row === 0 && col === 0) {
        return 1;
    }

    return minkiWedsChintu(matrix, row-1, col) 
    + minkiWedsChintu(matrix, row, col-1);
}

// let ways = minkiWedsChintu([
//     [0, 0, -1],
//     [0, 0, 0],
//     [-1, 0, 0]
// ], 2, 2);

// console.log(ways);


function permutations(str, l, r) {
    if(l === r) {
        console.log(str);
    }
    for(let i=l; i<=r; i++) {
        permutations(swap(str, l, i), l+1, r);
    }
}

function swap(str, l, i) {
    let arr = str.split('');
    let temp = arr[l];
    arr[l] = arr[i];
    arr[i] = temp;
    return arr.join('');
}

permutations('ABC', 0, 2);