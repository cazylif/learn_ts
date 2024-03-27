//

const weights = [50, 60, 49, 70]

console.log(weights)
console.log(weights[2])

weights[0] = 20
console.log(weights)

weights.push(100)
console.log(weights)

/////// Marge /////
const arr1 = [1,2,3]
const arr2  = [4,5,6]
const arr3 = []
// Space operator
const arr4 = [...arr1,...arr2]
console.log("arr4:"+arr4)

for (let i = 0; i < arr1.length; i++){
  arr3.push(arr1[i])

}
console.log("arr3:" + arr3)


/////// map //////
// const arr5 = []
// for (let i = 0; i < arr5.length; i++){
//   arr5.push(arr1[i] * arr1[i])

// }
// console.log(arr5)

const arr5 = arr1.map((item) => item * item )

console.log(arr5)
