// function fn_1(x) {
//     return x + 1
// }
// console.log(fn_1(5));

// let result = (y) => {
//     return y + 1
// }
// console.log(result(5));

// let fn_a = (a, b) => {
//     return a + b
// }
// console.log(fn_a(10,20));

//ex1
let fn_area = (w, h) => {
    let area = w * h
    return area
}
console.log(fn_area(10, 20));
//2
let area2 = (r) => {
    let cir = 2 * Math.PI * r
    let area = Math.PI * r * r
    return area2 = {
        เส้นรอบวง: cir,
        พท: area
    }
}
console.log(area2(7));
//3
let temp = (f) => {
    let tempC = (f-32)*5/9 
    return tempC 
}
console.log(temp(50) + " C");

//4
let findBMI = (weight, height) => {
    let BMI = weight / (height*height) 
    return BMI
 
}
console.log(findBMI(60,1.70));

