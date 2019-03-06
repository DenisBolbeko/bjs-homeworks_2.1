 "use strict" // Строгий режим.
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
// Контроль корректность введенных данных.    
     if (percent > 0) {  
       percent = +percent;
     } else if (percent != 0 || percent == 0) {
         return (`“Параметр "Процентная ставка" содержит неправильное значение ${percent}”.`);
     }

     if (contribution >= 0) {  
       contribution = +contribution;
     } else if (contribution !=  0) {
         return (`“Параметр "Начальный взнос" содержит неправильное значение ${contribution}”.`); 
     }
  
     if (amount >= 0) {  
       amount = +amount;
     } else if (amount !=  0) {
         return (`“Параметр "Общая стоимость" содержит неправильное значение ${amount}”.`); 
     }
   // Расчет количества месяцев, на которые оформляется ипотека. 
   let currentDate  = new Date();  // Дата с какого числа берется ипотеки 
   date = new Date(window.date.value); //Дата до какого числа берется ипотека
   let payPeriod = date.getFullYear() - currentDate.getFullYear();
   date = payPeriod * 12; // Количество месяцев, на которые оформляется ипотека.
   let returnAmount = amount - contribution  // Сумма, которую необходимо вернуть банку. 
   percent = percent / 1200; // Процентная ставка
   let monthlyPay = amount*(percent+percent/(((1+percent)**date)-1)); // Ежемесячная оплата
   let  totalAmount = monthlyPay * date;  //  общая сумма, которую придется заплатить клиенту.
   console.log(totalAmount.toFixed(2));
   return totalAmount.toFixed(2); //  Возврат результата в функцию
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  let greeting = '';
  let onlyRusString = /[^а-яА-ЯёЁ\-\s]/; //  Переменная для ввода только кириллицы
  // Проверка введенных данных
  if (onlyRusString.test(name) || name === "" || name === String(undefined) || name === String(null)) {
    greeting = `Привет, мир! Меня зовут Аноним.`;
    console.log(greeting);
    return greeting;
  } else  {
      greeting = `Привет, мир! Меня зовут ${name}.`;
      console.log(greeting);
      return greeting 
} 
   
}

