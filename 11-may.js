
// let blankMatrix = Array.from(Array(4), function() {
//     return new Array(5)
// })


let matrix = [
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9]  //2 
]

// m ---> no. of rows.
// n ---> no. of colums
// bombExplode(matrix, matrix.length, matrix[0].length);
function bombExplode(matrix, m, n) {
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(matrix[i][j] === -1) {

                if(j > 0 && matrix[i][j-1] !== -1) {
                    matrix[i][j-1]+=1;
                }

                if(j < n-1 && matrix[i][j+1] !== -1) {
                    matrix[i][j+1]+=1;
                }

                if(i > 0 && matrix[i-1][j] !== -1) {
                    matrix[i-1][j]+=1;
                }

                if(i < m-1 && matrix[i+1][j] !== -1) {
                    matrix[i+1][j]+=1;
                }
            }
        }
    }
}


// transpose(matrix, 3)
// matrix.forEach((inside) => console.log(inside));
function transpose(matrix, n) {
    for(let i=0;i<n;i++) {
        for(let j=i;j<n;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}


// waveForm(matrix, 3, 3)
function waveForm(matrix, n, m) {
    let forward = true;
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            forward ? console.log(matrix[i][j]) : console.log(matrix[i][m-j-1]);
        }
        forward = !forward;
    }
}
rotate90(matrix, 3);
matrix.forEach((inside) => console.log(inside));
function rotate90(matrix, n) {
    for(let i=0;i<n/2;i++) {
        for(let j=i;j<n-i-1;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-j-1][i];
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            matrix[j][n-i-1] = temp;
        }

    }
}