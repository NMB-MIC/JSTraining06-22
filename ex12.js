//ตำแหน่งที่สนใจ

// let a = [7,9,2,9,7,10,2,9,3,9] 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// ใครได้คำตอบแล้วแชร์หน่อยค่ะ

let a = [7,9,2,9,7,10,2,9,3,9]
let target = 1
let num_list =[]
for (let i = 0; i < a.length; i++) {
    if (a[i] == target) {
        num_list.push(i+1)
       //console.log(i+1);
    }    
} 
  if (num_list.length !== 0) {
    console.log("number : " + num_list);
  } else {
    console.log("0");
  }
