


function checkNumber(number) {
   if (isNaN(number)) {
      return "Вы ввели не число";
   } else if (number > 18) {
      return "Можно получить водительское удостоверение";
   } else if (number < 18) {
      return "Нельзя получить водительское удостоверение";
   } else {
      return "тоже можно";
   }
}

var userInput = prompt("Введите число:");


var number = parseFloat(userInput);

var result = checkNumber(number);
alert(result);