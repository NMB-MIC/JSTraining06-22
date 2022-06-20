let n = 5;
if (n == 5) {
    console.log("n เท่ากับ 5");
}

let age = 15;
let gender = 'female';
// if (age < 20) {
//     console.log("you are young");
// }

// if ((age < 20) && (gender == 'female')) {
//     console.log('You are a young');
// }

if ((gender == 'female') || (age > 20)) {
    console.log('young woman');
} else {
    console.log('not young woman');
}


var score = 49
if (score >= 80) {
    console.log("คุณได้เกรด A");
} else if (score >= 70) {
    console.log("คุณได้เกรด B");
} else if (score >= 60) {
    console.log("คุณได้เกรด C");
} else if (score >= 50) {
    console.log("คุณได้เกรด D");
} else if (score < 50)
    console.log("คุณได้เกรด F");

var pass
if (score >= 50) {
    pass = true
} else {
    pass = false
}
console.log("pass", pass);
