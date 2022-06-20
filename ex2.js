let can = (fish, tomato) => {
    can_fish = parseInt(fish / 3)
    can_tomato = parseInt(tomato / 2)

    if (can_fish > can_tomato) {
        product_can = can_tomato
    } else {
        product_can = can_fish
    }
    return ({
        product_can,
        balance_fish: fish - (product_can * 3),
        balance_tomato: tomato - (product_can * 2),
    })
}
console.log(can(300,200));
console.log(can(600,200));
console.log(can(520,333));
console.log(can(700,500));
console.log(can(900,100));
console.log(can(100,500));