//[1, 5, 7, 8, 9, 14, 10]

// when last is pivot
function partitionEnd(arr, low, high) {

    let pivot = arr[high];
    let i = low;
    for(let j=low;j<high;j++) {
        if(arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, high, i);
    return i;
}

function partitionMiddle(arr, low, high) {
    let pivot = arr[parseInt((low+high)/2)];
    let start = low;
    let end = high;
    while(start < end) {
        while(arr[start] < pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }
        swap(arr, start, end);
    }
    return end;
}

let arr = [1, 10, 14,5,9, 7, 8];
//partitionFirst(arr, 0, arr.length-1);

function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function quickSort(arr, low, high) {

    if(low>=high)
        return;
    let partitionIndex = partitionMiddle(arr, low, high);
    quickSort(arr, low, partitionIndex-1);
    quickSort(arr, partitionIndex+1, high);
}



function quickSelect(arr, k, low, high) {
    let partitionIndex = partitionEnd(arr, low, high);

    if(partitionIndex === k-1) {
        return arr[partitionIndex];
    } else if(partitionIndex < k-1) {
        return quickSelect(arr, k, partitionIndex+1, high);
    } else {
        return quickSelect(arr, k, low, partitionIndex-1);
    }
}
console.log(quickSelect(arr, 2, 0, arr.length-1));

//