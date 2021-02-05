var a = prompt('Введите ваше имя')
var b = +prompt('Введите год рождения')
var c = +prompt('Введите нынешний год')

console.log(a + ', ваш возраст ' + (c - b));
alert(a + ', ваш возраст ' + (c - b));





var q = +prompt('введите количество примеров');

var max = +prompt('введите макс число');
var min = +prompt('введите мин число');

function ran(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


for (let i = 0; i < q; i++) {
    let num1 = ran(min,max);
    let num2 = ran(min,max);
    let test = Math.floor(Math.random() * 4);
    if (test == 0){
        let q = +prompt(num1 + ' + ' + num2 + ' = ');
        let answer = (num1 + num2) == q ? ' ваш ответ верный' : ' ваш ответ неверный.';
        alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' ваш ответ ' + q + answer);
    }
    else if (test == 1){
        let q = +prompt(num1 + ' - ' + num2 + ' = ');
        let answer = (num1 - num2) == q ? ' ваш ответ верный' : ' ваш ответ неверный.';
        alert(num1 + ' - ' + num2 + ' = ' + (num1 - num2) + ' ваш ответ ' + q + answer);
    }
    
    else if (test == 2){
        let q = +prompt(num1 + ' * ' + num2 + ' = ');
        let answer = (num1 * num2) == q ? ' ваш ответ верный' : ' ваш ответ неверный.';
        alert(num1 + ' * ' + num2 + ' = ' + (num1 * num2) + ' ваш ответ ' + q + answer);
    }
    
    else {
        let q = +prompt(num1 + ' / ' + num2 + ' = ');
        let answer = (num1 / num2) == q ? ' ваш ответ верный' : ' ваш ответ неверный.';
        alert(num1 + ' / ' + num2 + ' = ' + (num1 / num2) + ' ваш ответ ' + q + answer);
    }
}

let obj = {};
for (let i = 1; i <= 5; i++) {
  obj[i] = {};
  obj[i].name = prompt("Введите Имя");
  obj[i].age = +prompt("Введите возраст");
}

console.log(obj);




let asd = receipt();

console.log(asd);


for (const key in asd) {
    let infoone = info;
let priceone = price;
      let finish = "Вы заказали " + infoone + ' | Общая стоимость (с доставкой) ' + (priceone + 9000);
console.log(finish);
  

    }
    














