let number = prompt("Введите число:");
if (isNaN(number)) {
   alert("Вы ввели не число");
} else {
   number = parseInt(number);
   if (number % 2 === 0) {
      alert("Число " + number + " четное");
   } else {
      alert("Число " + number + " нечетное");
   }
}