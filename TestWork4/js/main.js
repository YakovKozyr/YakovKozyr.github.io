// FIRST TASK

var allDays = "365";
var planetName = "Земля";
var amountOfPeople = "7 млрд.";
var mainStarName = "Солнца";
var result = "Мы живем на планете " + planetName + ", она делает один оборот вокруг " + mainStarName + " за " + allDays + " дней. " + "Население нашей планеты состовляет примерно " + amountOfPeople + " человек."
document.write("Задача №1" + "<br><br>");
document.write(result + "<br><br>");


// SECOND TASK

var a = 5;
var b, c;
b = a * 5;
b = (c = (b / 2));

document.write("Задача №2" + "<br><br>");
document.write("Первым вычисляется значение &laquo;b = a * 5&raquo; в результате &laquo;b = 25&raquo;. <br>");
document.write("Дальше в выражении &laquo;b = (c = (b/2))&raquo; будет вычисляться значения &laquo;с = b/2&raquo;.<br>");
document.write("Знак деления имеет приоритет выше, чем у знака равенства, поэтому в результате будет &laquo;c = " + c + "&raquo;.<br>");
document.write("В результате вычисления значения переменной &laquo;с&raquo; произойдет переприсвоение значения переменной &laquo;b&raquo; которая будет равна &laquo;b = " + b + "&raquo;." + "<br><br>");


// THIRD TASK

var amount = " mln.";
var city = ["Украина - ", "Россия - ", "Польша - ", "Франция - ", "Германия - "];
var count = ["33.135.322" + amount, "100.220.100" + amount, "20.200.356" + amount, "27.020.307" + amount, "22.879.221" + amount];
document.write("Задача №3" + "<br><br>");
document.write(city[0] + count[0] + "<br>" + city[1] + count[1] + "<br>" + city[2] + count[2] + "<br>" + city[3] + count[3] + "<br>" + city[4] + count[4] + "<br><br>");

// FOURTH TASK

var fruits = [" Апельсин", " Банан", " Груша"];
document.write("Задача №4" + "<br><br>");
document.write(fruits + "<br>");
document.write("Всего у меня - " + fruits.length + " фрукта" + "<br>" + "<br>");

fruits.unshift(" Грейпфрут");
fruits.push(" Яблоко", " Ананас");
document.write(fruits + "<br>")
document.write("Теперь у меня - " + fruits.length + " фруктов" + "<br>" + "<br>");

fruits.shift();
fruits.pop();
document.write(fruits)
document.write("<br>" + "В итоге у меня осталось - " + fruits.length + " фрукта" + "<br><br>");

// FIFTH TASK
var newFruits = [" Яблоко", " Апельсин", " Груша", " Гранат"];
newFruits.splice(newFruits.length - 2, 1, " Ананас");
document.write("Задача №5" + "<br><br>");
document.write(newFruits + "<br>");

var newFruits = [" Банан", " Мандарин", " Манго"];
fruits.splice(newFruits.length - 2, 1, " Ананас");
document.write(newFruits + "<br><br>");

// SIXTH TASK
var students = ["Сергей", "Матвей", "Лейла", "Алина", "Иоган"];
document.write("Задача №6" + "<br><br>");
if (students.length >= 3) {
    document.write(" - это большой массив, в котором как минимум 3 элемента." + "<br><br>");
} else {
    document.write("- это маленький массив, в котором менее 3-х элементов." + "<br><br>");
}

// SEVENTH TASK
var students = ["Дмитрий", "Алексей", "Петр", "Виктор"];
document.write("Задача №7" + "<br><br>");
if (students.length == 4 && students[students.length - 1] == "Виктор") {
    document.write("Этот массив мне подходит. <br>" + "<br><br>");
} else {
    document.write("Массив вам не подходит. <br>" + "<br><br>");
}

// EIGHTH TASK
a = 1;
b = 8;
result = (a + b < 4) ? 'Мало' : 'Много';
document.write("Задача №8" + "<br><br>");
document.write(result + "<br><br>");

// NINTH TASK
var sayHi;

var login = prompt("Login", '');
sayHi = (login == 'Вася') ? sayHi = 'Привет' :
    (login == 'Директор') ? sayHi = 'Здравствуйте' :
    (login == '') ? sayHi = 'Нет логина' :
    sayHi = '';

alert(sayHi);
document.write("Задача №9" + "<br><br>");

// TENTH TASK
var lang = prompt('Каково "официальное" название JavaScript?', '');

if (lang == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? "ECMAScript"!');
}
document.write("Задача №10" + "<br><br>");