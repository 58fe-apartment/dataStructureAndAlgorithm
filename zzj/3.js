function decimalToBinary (num) {
    let binary = [];
    do {
        binary.unshift(num%2);
        num=Math.floor(num/2);
    } while (num>=1);
    return binary.join('');
}
console.log(decimalToBinary(123))
