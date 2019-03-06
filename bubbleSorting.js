function bubbleSorting(arr) {
    console.log("Original array: ",arr);
    for(var j = arr.length; j>0; j--) {
        for(var i=0; i<j-1; i++) {
            // console.log(i);
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }

    console.log("Sorted array: ", arr);
    return arr;
}

// testing
arr1=[8,-3,2,0,9,12];
bubbleSorting(arr1);