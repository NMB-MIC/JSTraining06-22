let used = (hour) => {
    let no_member = hour * 15
    let member = 100 + parseInt(no_member * 0.9)
    console.log('แบบไม่สมัคร', no_member);
    console.log('แบบสมาชิก', member);
    if (no_member > member) {
        console.log("ควรสมัครสมาชิก");
    } else {
        console.log("ไม่ควรสมัครสมาชิก");
    }
}
used(67)
