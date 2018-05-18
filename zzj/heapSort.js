function HeapSort(arr){
    let i;
    for(i=Math.floor((arr.length-1)/2);i>0;i--){
        HeapAdjust(arr,i,arr.length-1);
    }
    for(i=arr.length-1;i>1;i--){
        swap(arr,1,i);
        HeapAdjust(arr,1,i-1)
    }
    return arr;
}

function HeapAdjust(arr,s,m){
    let temp = arr[s];
    for(let j=2*s;j<=m;j*=2) {
        if(j<m && arr[j]<arr[j+1]){
            ++j;
        }
        if(temp>=arr[j]){
            break;
        }
        arr[s] = arr[j];
        s=j;
    }
    arr[s]= temp;
}

function swap(arr,s,m){
    let temp = arr[s];
    arr[s]=arr[m];
    arr[m]= temp;
}

console.log(HeapSort([0,5,2,8,1,9,6,3,4,7]))

// [9,8,7,6,5,4,3,2,1]