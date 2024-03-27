//
import readlineSync from "readline-sync"
const input = 10 // input

const condition = 1



if (input % 2 == 0) {
  // do something 
  console.log("Even")

} else {
  console.log("Odd")
}

///////////
const weight_user = Number(readlineSync.question('Your weight(kg):'))
const height_user = Number(readlineSync.question('Your height(m):'))

const bmi_user = weight_user / (height_user * height_user)
console.log("w"+weight_user)
console.log("h"+height_user)
console.log("your bmi "+bmi_user)
if (bmi_user < 17) {
  console.log("Thin")
}
else if (bmi_user <= 17 || bmi_user <25) {
  console.log("Normal")
}
else if (bmi_user >25) {
  console.log("Over weight")
}