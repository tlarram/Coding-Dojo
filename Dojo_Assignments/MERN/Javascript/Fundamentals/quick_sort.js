const arr= [3,2,1,10,8,4,9,5,6,7]

function quicksort(arr, i=0, j=arr.length-1){
    if (i>=j) return;
    const pivot= arr[Math.floor((i+j) /2)];
    const index=partition(arr, i,j, pivot)
    quicksort(arr, i, index);
    quicksort(arr, index+1, j);
    return arr;
}

function partition(arr, i,j, pivot){
    while (i < j) {
    while (arr[i] < pivot) {
        i++;
    }
    while (arr[j] > pivot) {
        j--;
    }
    if (i < j) {
        [arr[i],arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    if (i===j) {
        break
    }
}
return j
}


console.log(quicksort(arr))