// const app: SVGForeignObjectElement | null = document.querySelector('#app > h1')

const person:{
  name: string;
  age: number;
} = {
  name: 'Boss',
  age: 21
}

const personView = (`${person.age - 18}　 ${person.name}`)
// app.innerHTML = personView
console.log(personView)\