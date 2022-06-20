//1
// for (let i = 0; i <= 19; i++) {
//     console.log(i);
// }

//2 

let count = (num) => {
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            console.log(i);
        }
    } else {
        console.log("Invalid input");
    }

}
count(-3)
count(0)
count(1)
count(4) 
