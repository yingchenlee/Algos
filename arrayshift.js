function shiftleft(arr, num) {
    var i = 0;
    for(var i =0;i<num;i++) {
        arr.push(arr.shift());
    }
    return arr;
}

function shiftleftII(arr, num) {
    for(var i = 0;i<num;i++) {
        var temp = arr[0];
        for(var j=0;j<arr.length-1;j++) {
            
            arr[j]=arr[j+1];
        }
        arr[arr.length-1] = temp;
    }
    return arr;
}
console.log(shiftleftII([1,2,3,4,5], 4));
console.log(shiftleft([1,2,3,4,5], 3));