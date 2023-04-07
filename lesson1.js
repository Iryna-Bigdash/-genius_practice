/* ТИПИ ДАННИХ
 Примітивні 7:
1. Boolean (true, false) 
2. Number;
3. String;
4. Sumbol;
Спеціальний тип данних
5. Undefined - зміна, якій не присвоїли значення ;
6. Null - нулєве значення, пусте значення;
7. BigInt - великі числа 99900000000000n;

Не примітивний:
8. Об'єкт; Ключ завжди String

*/
//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = null;
// let city = null;
// name = 'Ivan';
// city = name;

// console.log(city);
//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // hi 1
// console.log(`привіт ${"name"}`); // hi name
// console.log(`привіт ${name}`); // ? hi Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// // let b = "13cvb";
// let c = "12.9sxdcfgv";
// // вивести в консоль тип
// console.log(typeof parseInt(a));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// const sum = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(sum);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// const infirmation = {};
// infirmation.name = 'Ira';
// infirmation.age = 33;
// infirmation.city = 'Lisbon';
// delete infirmation.city;
// infirmation['like flowers'] = true;
// console.log(infirmation);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// for (let key in infirmation) {
//   console.log('key', key);
//   console.log('value', infirmation[key]);
// }
