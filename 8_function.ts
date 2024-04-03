const side = 8;
const hight = 4;
let area = 0.5 * side * hight;

function areaTriangle(side:1, height:1) {
  let area = 0.5 * side * hight;
  console.log(`area = ${area}`)
}

areaTriangle(1, 1);

const areaTriangle2 = function(side:number, height:number) {
  let area = 0.5 * side * hight;
  console.log(`area = ${area}`)
}

areaTriangle2(4, 5);


const areaTriangle3 = (side:number, height:number) => {
  let area = 0.5 * side * hight;
  console.log(`area = ${area}`)
}

areaTriangle3(4, 5);

const foo = {
  name: 'bob',
  area: areaTriangle3,
}

foo.area(3, 4)

const products = [
  {id:1, name: 'food',price: 100 },
  {id:2, name: 'food',price: 100 },
  {id:3, name: 'food',price: 100 },
  {id:4, name: 'food',price: 100 },
  {id:5, name: 'food',price: 100 },
]

for (let i = 0; i <= 4; i++){
  console.log(products[i])
}

products.map((item) => console.log(item))

products.push({ id: 5, name: 'gun', price: 100000 })

// adding item with spread operator

const newProducts = [...products ,{ id: 5, name: 'gun', price: 100000 }]
newProducts.map(item => console.log(item))

const newProducts2 = products.filter((item) => (item.id !== 73))
newProducts2.map(item => console.log(item))