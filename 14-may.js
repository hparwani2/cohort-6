let matrix = [
    [2, 14, 20, 16],
    [7, 18, 20, 2],
    [9, 7, 18, 24],
    [9, 26, 27, 28]
]

//console.log(diagonalMatrix(matrix, matrix.length, matrix[0].length));
function diagonalMatrix(matrix, m, n) {
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(i!==j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}
/*
 00, 01, 02, 03
 10, 11, 12, 13
 20, 21, 22, 23
*/

//console.log(columnWiseSum(matrix, matrix.length, matrix[0].length));
function columnWiseSum(matrix, m, n) {
    let result = [];
    for(let j=0;j<n;j++) {
        let sum = 0;
        for(let i=0;i<m;i++) {
            sum+=matrix[i][j];
        }
        result.push(sum);
    }
    return result;
}


//console.log(searchElement(matrix, matrix.length, matrix[0].length, 10))

function searchElement(matrix, m, n, element) {
    let i=0;
    let j=n-1;
    while(j >= 0 && i < m) {
        if(matrix[i][j] === element) {
            return [i,j];
        } else if(matrix[i][j] < element) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}

/*
[
 [00, 01, 02, 03]
 [10, 11, 12, 13]
 [20, 21, 22, 23]
]
*/

/*
[
 [-1, -9, -8, -22]
 [10, 11, 12, 13]
 [20, 21, 22, 23]
]
*/
function maxInARow(matrix, m, n) {
    let result = [];
    for(let insideMatrix of matrix) {
        let max = Number.MIN_SAFE_INTEGER;
        for(let value of insideMatrix) {
            max = value > max ? value : max;
        }
        result.push(max);
    }
}

//uniqueElement(matrix);
function uniqueElement(matrix) {
    let obj = {};
    for(let insideMatrix of matrix) {
        for(let value of insideMatrix) {
            if(obj[value]) {
                obj[value] = obj[value] + 1;
            } else {
                obj[value] = 1;
            }
        }
    }
    /*
    */
    for(let [key, value] of Object.entries(obj)) {
        if(value === 1) {
            console.log(key);
        }
    }
}

let result = multiplyMatrix(
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    2,
    3,
    3,
    3
)

result.forEach((inside) => console.log(inside))
function multiplyMatrix(matrix1, matrix2, r1, c1, r2, c2) {
    let result = Array.from(Array(r1), function() {
        return new Array(c2);
    });
    for(let i=0;i<r1;i++) {
        for(let j=0;j<c2;j++) {
            let sum = 0;
            for(let k=0;k<r2;k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}