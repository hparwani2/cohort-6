function kClosestPoint(points, k) {

    let objArr = [];
    for(let i=0;i<points.length;i++) {
        let distance = points[i][0]**2 + points[i][1] ** 2;
        objArr.push({
            dist: distance,
            cordinates: points[i]
        });
    }
    objArr.sort((a, b) => a.dist - b.dist);
    return objArr.slice(0, k).map((a) => a.cordinates);
}

//console.log(kClosestPoint([[1,2],[2,3],[3,4]], 2));

function waveForm(input) {
    for(let i=0;i<input.length-1;i++) {
        if((i%2 === 0 && input[i] < input[i+1]) || 
            (i%2 !==0 && input[i] > input[i+1])) {
            swap(input, i, i+1);
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [9, 8, 7, 6, 5, 21, 2, 4];
waveForm(arr);
//console.log(arr);


function meetingsInARoom(meetings) {
    meetings.sort((a,b) => a[1] - b[1]);

    let counter = 1;
    let meetingEnded = meetings[0][1];

    for(let i=1;i<meetings.length;i++) {
        if(meetings[i][0] >= meetingEnded) {
            counter++;
            meetingEnded = meetings[i][1];
        }
    }
    return counter;
}

// console.log(meetingsInARoom([
//     [1,2],
//     [3,4],
//     [0,6],
//     [6,7],
//     [8,9],
//     [4,9]
// ]));

function maxChunks(input) {

    let max = Number.MIN_SAFE_INTEGER;
    let counter = 0;
    for(let i=0;i<input.length;i++) {
        max = Math.max(max, input[i]);
        if(max === i) {
            counter++;
        }
    }
    return counter;

} 

//console.log(maxChunks([1,0,4,3,2]));


function studentAndSeat(stu, seat) {
    stu.sort((a,b) => a-b);
    seat.sort((a,b) => a-b);
    let result = 0;
    for(let i=0;i<stu.length;i++) {
        result+=Math.abs(stu[i] - seat[i]);
    }
    return result;
}

console.log(studentAndSeat([8, 2, 4], [9, 22, 4]));

// [1]
// [2]
/*
meetings = [
    [1,2],
    [3,4],
    [0,6],
    [6,7],
    [8,9],
    [4,9]
]
*/