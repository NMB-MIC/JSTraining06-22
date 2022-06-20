//ตารางสูตรคูณ
let table = (input) => {
    if (input >= 1 && input <= 99) {
        for (let i = 1; i <= 12; i++) {
            console.log(input + "x" + i + "=" + input * i);
        }
    } else {
        console.log("Number is out of range");
    }
}
table(0)

