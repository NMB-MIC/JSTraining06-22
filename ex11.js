//ATM 


//กดเงินได้แล้วแชร์ให้หน่อยค่ะ
let ATM = (output) => {
    if (output <= 20000) {
        bank_1000 = parseInt(output / 1000)
        after1000 = output - (bank_1000 * 1000)
        bank_500 = parseInt(after1000 / 500)
        after500 = after1000 - (bank_500 * 500)
        bank_100 = parseInt(after500 / 100)
        if (after500 % 100 == 0) {
            getMoney = {
                bang1000: bank_1000,
                bang500: bank_500,
                bang100: bank_100
            }
            console.log("ได้รับเงิน ", getMoney);
        } else {
            console.log("input Error");
        }
    } else {
        console.log("ห้ามกดเกิน 20000 บ");
    }

}
ATM(20000) 