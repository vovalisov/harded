

/*
let person = {};




console.log("Сравнение с использованием ===:", sum === 10);

console.log("Сравнение с использованием ==:", sum == 10);





let car = {
   brand: "Toyota",
   model: "Camry",
   year: 2020
};
car.color = "blue";


console.log("машина:", car);
console.log("цвет:", car.color);


*/




const { deepStrictEqual } = require('assert');

let vova = {
   name: 'vova',
   age: 25,
   address: {
      city: 'kld',
      country: 'russia'
   }
};

// Функция для создания глубокой копии объекта
function deepCopy(obj) {
   let copy = Array.isArray(obj) ? [] : {};
   for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
         copy[key] = deepCopy(obj[key]);
      } else {
         copy[key] = obj[key];
      }
   }
   return copy;
}

// Создание глубокой копии объекта vova
let vovaCopy = deepCopy(vova);

// Изменение значения одного из свойств в новой копии
vovaCopy.name = "копия vova";

// Сравнение изменений в оригинальном и скопированном объектах
console.log('Оригинальный объект:', vova);
console.log('Скопированный объект с изменениями:', vovaCopy);
console.log('Изменения в оригинальном и скопированном объектах:');
deepStrictEqual(vova, vovaCopy);