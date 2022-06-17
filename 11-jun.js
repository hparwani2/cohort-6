let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubbleSort(arr) {
    let n = arr.length;
    for(let i=0;i<k;i++) { // iteration.
        for(let j=1;j<=n-i-1;j++) {
            if(arr[j-1] > arr[j]) {
                swap(arr, j-1, j);
            }
        }
    }
}

let arr = [5,4,2,3,1, 6, 6];
insertionSort(arr);
console.log(arr);


function selectionSort(arr) {
    let n = arr.length
    for(let i=0;i<n;i++) {
        let minIndex = i;
        for(let j=i;j<n;j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
}

function insertionSort(arr) {
    let n = arr.length
    for(let i=1;i<n;i++) {
        let j=i-1;
        let person = arr[i];
        while(j>=0 && arr[j] > person) {
            //swap(arr, j, j+1);
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = person;
    }
}