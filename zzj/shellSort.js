let time =0;
function shellSort(arr) {
    let increment = arr.length;
    time++;
    do{
        increment = Math.floor(increment/3)+1;
        time++;
        for(let i=increment+1;i<arr.length;i++){
            if(arr[i]<arr[i-increment]) {
                arr[0]=arr[i];
                time++;
                for(j=i-increment;j>0 && arr[0]<arr[j];j-=increment){
                    arr[j+increment]=arr[j];
                    time++;
                }
                arr[j+increment] = arr[0];
                time++;
            }
        }
    }while(increment>1)
    return arr
}
console.log(
    shellSort([0,9,8,7,6,5,4,3,2,1])
)
console.log(time)