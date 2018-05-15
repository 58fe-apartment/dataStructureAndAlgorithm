let time = 0;
function insertSort (arr){
    for(let i=2;i<arr.length;i++){
        if(arr[i]<arr[i-1]) {
            arr[0]=arr[i];
            time++;
            for(j=i-1;arr[j]>arr[0];j--) {
                arr[j+1]=arr[j];
                time++;
            }
            arr[j+1]=arr[0];
            time++;
        }
    }
    return arr;
}

console.log(
    insertSort([0,9,8,7,6,5,4,3,2,1])
)
console.log(time)