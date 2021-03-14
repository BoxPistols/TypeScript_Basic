"use strict";
// const app: SVGForeignObjectElement | null = document.querySelector('#app > h1')
var person = {
    name: 'Boss',
    age: 21
};
var personView = (person.age - 18 + "\u3000 " + person.name);
// app.innerHTML = personView
console.log(personView);
