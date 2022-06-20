let a = [14,5,8,4,10,25,18,9]
//max 
let max = a[0];
let min = a[0];
for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i]
    }
    if (a[i] < min) {
        min = a[i]
    }

}
console.log(max);
console.log(min);