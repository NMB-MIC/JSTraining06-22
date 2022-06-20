let Table = (planks, logs, big_table, small_table) => {
    //order
    let planks_s = small_table * 1
    let planks_L = big_table * 2
    let log_s = small_table * 4
    let log_L = big_table * 6

    let balance_log = logs - (log_s + log_L)
    let balance_planks = planks - (planks_s + planks_L)

    if (balance_log < 0 || balance_planks < 0) {
        console.log("result : No");
        if (balance_planks < 0) {
            console.log("ต้องการไม้แผ่นเพิ่ม", (planks_s + planks_L) - planks);
        } else {
            console.log("ต้องการไม้แผ่น : 0 ");
        } if (balance_log < 0) {
            console.log("ต้องการไม้ท่อนเพิ่ม", (log_s + log_L) - logs);
        } else {
            console.log("ต้องการไม้ท่อน : 0 ");
        }

    } else {
        console.log("result: Yes");
        console.log("balance planks : ", balance_planks);
        console.log("balance log : ", balance_log);
    }

}
Table(100, 200, 5, 0)
Table(30,100,10,20)