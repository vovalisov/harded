

let person = {};

let vova = {
   name: "Vova",
   age: 25,
   favoritecolor: "красный"
};
let personCopy = { ...person };

personCopy.name = "копия Вовы";
personCopy.age = 4;
personCopy.favoriteColor = "синий";

console.log("Исходный объект:", person);
console.log("Копия объекта:", personCopy);

console.log(vova.name);
console.log(vova.age);
console.log(vova.favoritecolor);


