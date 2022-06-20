//while 

// let i = 0 ;
// while (i<10) {
//     console.log(i); 
//     i++ ;
// }

// for (let i =0 ; i < 10; i++) {
//     console.log(i); 
// }

let a = [2, 11, 4, 8, 9, 20]
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
