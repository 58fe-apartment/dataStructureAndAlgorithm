let time=0;
function selectSort(arr){
    for(let i=0;i<arr.length;i++){
        min=i;
        time++;
        for (let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j;
                time++;
            }
        }
        if(i!=min){
            let swap = arr[min];
            arr[min]=arr[i];
            arr[i]=swap;
            time++;
        }
    }
    return arr;
}
console.log(selectSort([9,8,7,6,5,4,3,2,1]))
console.log(time)