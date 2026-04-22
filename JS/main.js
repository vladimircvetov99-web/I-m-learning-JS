// document.write("JavaScript говорит привет!");
//  console.log("JavaScript говорит привет!");
//  console.info("JavaScript говорит привет!");
// console.error("JavaScript говорит привет!");
// console.warn("JavaScript говорит привет!");





// 1.  Переменные создание!!!!!!





// var num;
// num = 5;

// var num = 5;
// num = 7;
// console.log("Переменная: " + num + ".");

// const num = 5;
// // num = 7;
// console.log("Переменная: " + num + ".");

// var number;
// number = true;

// var num__1 = 5; число
// var num__1 = "5"; строка





// 2.  Математические действия!!!





// var num_1 = 5;
// var num_2 = 15;

// console.log("Вычетание: " + (num_1 - num_2));
// console.log("Результат: " + (num_1 + num_2));
// console.log("Умножение: " + num_1 * num_2);
// console.log("Деление: " + num_1 / num_2);
// console.log("Проценты: " + (num_1 % num_2));

// var num_3 = 5;
// num_3 += 7;
// console.log("Результат:" + num_3);

// var str_1 = Number("12");
// var str_2 = Number("2");

// console.log("Результат:" + (str_1 + str_2));

// console.log("Math:" + Math.PI);
// console.log("Math:" + Math.min(4, 6, -8, 2, 0, 6)); выводит мин число
// console.log("Math:" + Math.max(4, 6, 64, 2, 0, 6)); выводит максимальное число






// 3. Условные операторы!!!!







// var number = 15;
// if(number == 5) {
//     // console.log("Ok") Условия не выполниться потому что переменная не равна 5
// }

// var number = 15;
// if(number > 5) {
//     console.log("Ok") Условие выполниться потому что переменная больше 5
// }
// var number = 15;
// if(number != 5) {
//     console.log("Ok"); переменная не равна значеннию 5 , поэтому значение верное 
// }

// var number = 15;
// if(number != 15) {
//     console.log("Ok");
// } else {
//     console.log("Error"); Выводиться если значенение неверное 
// }

// var number = 15;

// if(number == 5) {
//     console.log("Ok");
// } else if(number < 10) {  Не выполняется 
//      console.log("Ok!");
// }  else if(number == 7) { Не выполняется 
//      console.log("7!");
// }  else if(number >= 15) { Выполняеться потому что >= переменной
//      console.log(">=15");
// }else {
//     console.log("Else"); Не выполняется 
// }

// var number = 15;
// var isHasHouse = true;

// if(number == 15  && isHasHouse) {
//     console.log("Ok"); Выполняется
// } else if(number < 10) {  
//      console.log("Ok!"); Невыполняется 
// }  else if(number == 7) { 
//      console.log("7!"); Невыполняется
// }  else if(number >= 15) { 
//      console.log(">=15"); Невыполняется
// }else {
//     console.log("Else"); Невыполняется
// }


// var stroka = 'word 23';

// switch(stroka) {
//     case "4": 
//     console.log("Переменная со значением 4"); Невыполнится
//     break;

//     case "45": 
//     console.log("Переменная со значением 45"); Невыполнится
//     break;
//     case "word": 
//     console.log("Переменная со значением word"); Невыполнится
//     break;
//     default:
//         console.log("Default"); Выполнится так как переменная не совпадает!
//         break;
// }




// 4. Массивы Данных !!





// var arr = [5, true, "stroka", 5.7, 0, -100]; Одномерные массивы!
// arr[3] = 'word'
// console.log(arr.length);


// var matrix = [
//     [4, 6, 8], ['stroka', 5.7], [0, -100] Многомерные массивы!
// ];


// matrix[1] [0] = 90;
// console.log(matrix);


// 5. Цыклы и операторы Циклов в JS



// for(var i = 100; i > 5; i /= 2) {
//     console.log(i);
// }

// var j = 1000;
// while(j > 100) {
//     console.log(j);
//     j -= 100;
// }

// var isHasCar = true;
// while(isHasCar) {

// }


// var x = 0;
// do {
//    console.log(x);
//    x++;
// }  while(x < 10);


// for(var i = 10; i <= 20; i+= 2){
//     if(i > 15)
//         break; полностью выходит из цикла

//     console.log(i);
// }

// for(var i = 10; i <= 20; i++){
//     if(i % 2 == 0)
//         continue;

//     console.log(i);
// }

// Работа с Массивами :

// var arr =[5, 7,3 ,8 ,9, 91];

// for(var i = 0; i < arr.length; i++) {
//     arr[i] *= 2;


//     console.log("Эллемент" + (i + 1) + ":" + arr[i]);
// }




// 6. Всплывающие окна (alert,prompt,confirm) !!!




// alert("Какая хорошая погода!"); окно обычное

// confirm("Вы сейчас дома?"); окно с 2 кнопками 
// var data = confirm("Вы сейчас дома?");
// if (data) {
//     alert("Вы молодец");
// }

// var data = prompt("Скажите сколько вам лет"); 
// console.log(data);

// var var1 = null;

// var person = null;
// if(confirm("Вы точно уверены?")) {
//     person = prompt("Введите ваше имя");
//     alert("Привет," + person);
// } else{
//     alert("Вы нажали на <<Отмена>>");
// }




// 7. Функции в языке JS !!!




// function info() {
//     // console.log("HEllo"); Создание функции и её вызов
//     console.log("!");
// }

// info();

// function info(word) {
//     console.log(word + "");
//     console.log("!");
// }

// function summa(a, b) {
//     var res = a + b;
//     info(res);
// }
// summa(5, 7);


// function summa(arr) {
//     var sum = 0;

//     for(var i = 0; i < arr.length; i++) 
//        sum += arr[i]; 

//     return sum;
// }

// var array = [6, 8, 1];
// var array_2 = [6, 8, 1, 7];
// var array_3 = [6, 8, 1, 90];

// var res = summa(array);
// res *= 2;
// console.log("Результат:" + res);
// // summa(array_2);
// // summa(array_3);




// Локальные и Глобальные переменные :


// var num = 10; Глобальная переменная 

// function info() {
//     var num = 20;
//     console.log(num); Локальная переменная, переменная внутри Функции
// }

// info();

// console.log(num);



// 8. События и обработчик событий в JS

// var counter = 0;

// function onClickButton(el) {

//     counter++;
//     el.innerHTML = "Вы нажали на кнопку: " + counter;
//     // el.style.background = "red";
//     // el.style.color = "blue";


//     el.style.cssText = "border-radius: 5px; border:0, font-size: 20px";

//     console.log(el.names);
// }

// function onInput(el) {
//     if(el.value == "Hello")
//         alert("И тебе привет");
//     console.log(el.value);
// }

