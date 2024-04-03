// [] array  {} object 
const person = {
  name: 'Alif',
  surname: 'krohlek',
  age: 20,

}
console.log(person)
console.log(person.name)

type PersonType = {
  name: string;
  surname: string;
  age: number;

}

let person2;

person2 = {
  name: 'Alice',
  surname: 'perlio',
  age: 200,

}

//person = person2 //can not 
// person2 = person //can 
person.name = 'jonh'
console.log(person)

const allperson  = [person , person2]
console.log(allperson)


//print loop person
console.log('all:', allperson)

console.log(allperson[1].surname)

for (let i = 0; i <= 1; i++){
  console.log(allperson[i].name)
  console.log(allperson[i].surname)
  console.log(allperson[i].age)
}

type T = 'de' | 'dbiz' | 'comp';
type StudentType = Record<T, {
  name: String,
  age?: number
}>

const student = {
  de: {
    name: 'win',
    age: 22,
  },
  dbiz: {
    name: 'potae',
    age: '21',
  },
  comp: {
    name: 'tans',
    age: '20',
  }

}
student.de = {
  name: "rfr",
  age: 45,
}

console.log('student:',student.de.name)
 
