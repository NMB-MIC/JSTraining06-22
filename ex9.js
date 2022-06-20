let number = (x, y) => {
    if (x <= y) {
        for (let i = x; i <= y; i++) {
            console.log(i);
        }
    } else if (y < x) {
        for (let i = x; i >= y; i--) {
            console.log(i);
        }
    }
}

number(2, 5)
number(-3, 8)
