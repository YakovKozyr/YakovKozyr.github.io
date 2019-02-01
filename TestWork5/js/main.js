// FIRST TASK
document.write("<h1>Задача №1</h1>" + "<br>");

var browser = prompt('Ваш браузер?');

if (browser == 'IE') {
    alert('О, да у вас IE!');
} else if (browser == 'Chrome' ||
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}


// SECOND TASK
document.write("<h1>Задача №2</h1>" + "<br>");

var a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}


// THIRD TASK

document.write("<h1>Задача №3</h1>" + "<br>");

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if (minutes < 10) {
    minutes = "0" + minutes;
}

if (seconds < 10) {
    seconds = "0" + seconds;
}

document.write("Текущее время: " + hour + ":" + minutes + ":" + seconds + "<br>" + "<br>")

// FOURTH TASK
document.write("<h1>Задача №4</h1>" + "<br>");

var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var today = new Date();
var someDay = today.getTime();

function now_date(N) {
    var day_after_N = new Date(1000 * 60 * 60 * 24 * N);
    var milliN = day_after_N.getTime();

    var someDayPlusN = new Date(someDay + milliN);

    document.write("Через " + N + " дней будет дата: <p>" + "<br>");
    document.write("Год: " + someDayPlusN.getFullYear() + "<br>" + "<br>");
    document.write("Месяц: " + months[someDayPlusN.getMonth()] + "<br>" + "<br>");
    document.write("День недели: " + days[someDayPlusN.getDay()] + "<br>" + "<br>");
    document.write("Число: " + someDayPlusN.getDate() + "<br>" + "<br>");
}

var user = prompt("Введите число для вычисления даты");
var n = Math.round(user);

if (n > 1 && n < 1000) {
    now_date(n);
} else {
    document.write("Вы указали не число или введенное число не попадает в диапазон цифр от 1 до 1000" + "<br>" + "<br>")
}

// FIFTH TASK
document.write("<h1>Задача №5</h1>" + "<br>");

var forTesting = "8 пингвинов и 9 карасей";

var forTesting = "8 пингвинов и 9 карасей";

function firstPosition() {
    var regular = /\d/;

    var result = forTesting.search(regular);

    if (result == 0) {
        document.write("Строка начинается с цифры" + "<br>" + "<br>");
    } else {
        document.write("Строка не начинается с цифры" + "<br>" + "<br>");
    }
}

firstPosition(forTesting);

// SIXTH TASK
document.write("<h1>Задача №6</h1>" + "<br>");

var card = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером: 1103-8899-0811-1722";

var regular_all = /[0-9-]{19}/g;
var regular_select = /[0-3]{4}[0-9-]{15}/g;

var result_all = card.match(regular_all);
var result_select = card.match(regular_select);

document.write(result_all + " - Найденые номера" + "<br>" + "<br>")
document.write(result_select + " - Номера, где первые четыре цифры от 0 до 3" + "<br>" + "<br>");

// SEVENTH TASK
document.write("<h1>Задача №7</h1>" + "<br>");
var tel = "8/927/31/10/765";
var sign = "-";

function dash(tel, sign) {
    var regular = /\//g;

    var result = tel.replace(regular, sign);

    document.write(result + "<br>" + "<br>");
}

dash(tel, sign);


// EIGHTH TASK
document.write("<h1>Задача №8</h1>" + "<br>");

function line(someDate) {

    if (someDate.length > 10) {
        var result = "В этом числе символов больше 10";
    } else
    if (someDate.length < 10) {
        var result = "В этом числе символов меньше 10";
    } else {
        var result = "В этом числе 10 символов";
    }
    return (result + "<br>" + "<br>");
}

var someNumber = prompt("Введите любое слово...");

var end = line(someNumber);

document.write(end);

// NINTH TASK
document.write("<h1>Задача №9</h1>" + "<br>");

for (var i = 1; i < 8; i++) {
    document.write("Квадрат " + i + " = " + i * i + "<br>" + "<br>");
}
var firstNum = prompt("Первое число");
var secondNum = prompt("Второе число");

document.write("Итого ", Number(firstNum) + Number(secondNum) + "<br>" + "<br>");



// TENTH TASK
document.write("<h1>Задача №10</h1>" + "<br>");

var i = 0;

while (i < 3) {
    alert("номер " + i + " !");
    i++;
}