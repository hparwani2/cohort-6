function lexographicalPrinting(i, n) {
    if(i < n) {
        console.log(i);

        lexographicalPrinting(i*10, n);
        if(i%10 !== 9) {
            lexographicalPrinting(i+1, n);
        }
    }
}
//lexographicalPrinting(1, 25);

function stepsToReach0(n) {
    let i = 1;
    let count = 0;
    while(i < n) {
        if(i&n) {
            count++;
        }
        i = i<<1;
    }
    return count;
}
//console.log(stepsToReach0(25));



function combinationalSum(arr, i, curr, sum, currSum) {

    if(i === arr.length) {
        if(currSum === sum) 
            console.log(curr);
        return;
    }

    // exclude
    combinationalSum(arr, i+1, curr, sum, currSum);
    curr.push(arr[i]);
    combinationalSum(arr, i+1, curr, sum, currSum+arr[i]);
    curr.pop();
}

//combinationalSum([3, 1, 4, 7], 0, [], 7, 0);


function nTo1(n) {

    if(n <= 1)
        return n;
    let oBy2 = Number.MAX_SAFE_INTEGER;
    if(n % 2 === 0) {
        oBy2 = nTo1(n/2);
    }

    let oBy3 = Number.MAX_SAFE_INTEGER;
    if(n % 3 === 0) {
        oBy3 = nTo1(n/3);
    }

    return Math.min(nTo1(n-1), oBy2, oBy3) + 1;
}

console.log(nTo1(5) - 1);