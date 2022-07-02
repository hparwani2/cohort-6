// let arr = [5, 2, 1, 0, 9, 6, 2];

// function comparator(a, b){
//     return b-a;
// }
// arr.sort(comparator);

// console.log(arr);


// function merge(arr1, arr2, result) {
//     let m = arr1.length;
//     let n = arr2.length;

//     let chintu = 0, mintu = 0;
//     while(chintu < m && mintu < n) {
//         if(arr1[chintu] <= arr2[mintu]) {
//             result.push(arr1[chintu]);
//             chintu++;
//         } else {
//             result.push(arr2[mintu]);
//             mintu++;
//         }
//     }

//     while(chintu < m) {
//         result.push(arr1[chintu]);
//         chintu++;
//     }

//     while(mintu < n) {
//         result.push(arr2[mintu]);
//         mintu++;
//     }
// }

let arr = [14, 33, 27, 10, 35, 19, 42, 44];
mergeSort(arr, 0, arr.length-1);
console.log(arr);

//console.log(result);
/*

l = 0
r = 6
m = 3
*/

function mergeSort(arr, left, right) {
    if(left===right) {
        return;
    }
    let mid = parseInt((left+right)/2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid+1, right);
    merge(arr, left, mid, right);
}

/*
    c
2 8 9 20

        m
5 6 7 8

2 5 6 7 8 8
*/
function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let first = new Array(n1);
    let second = new Array(n2);

    for(let i=0;i<n1;i++) {
        first[i] = arr[left + i];
    }

    for(let i=0;i<n2;i++) {
        second[i] = arr[mid+1+i];
    }
    let chintu = 0;
    let mintu = 0;
    let counter = left;
    while(chintu < n1 && mintu < n2) {
        if(first[chintu] <= second[mintu]) {
            arr[counter] = first[chintu];
            chintu++;
        } else {
            arr[counter] = second[mintu];
            mintu++;
        }
        counter++;
    }
    while(chintu < n1) {
        arr[counter] = first[chintu];
        chintu++;
        counter++;
    }

    while(mintu < n2) {
        arr[counter] = second[mintu];
        mintu++;
        counter++;
    }
}