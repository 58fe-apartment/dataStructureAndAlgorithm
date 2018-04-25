function getMax(arr) {
    let maxValue = -Infinity;
    for(let i=1;i<=arr.length;i++) {
        for(let j=0;j<=arr.length-i;j++) {
            let temSum = 0;
            for(let z = j;z<j+i;z++){
                temSum+=arr[z];
            }
            console.log('temsum:'+temSum,'i:'+i,'j:'+j);
            if(temSum>maxValue){
                maxValue = temSum;
            }
        }
    }
    return maxValue;
}

console.log(getMax([-2, 11, -4, 13, -5, 2, -5, -3, 12, -9]))
console.log(getMax([0, -3, 6, 8, -20, 21, 8, -9, 10, -1, 3, 6, 5]))