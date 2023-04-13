// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) { if (age > 18) {
// return true; } else {
// return confirm('Батьки дозволили?'); }
// }


// const checkAge = (age) =>
//   age > 18 ? console.log(true) : confirm('Батьки дозволили?');

// checkAge(19); 

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const checkMinNumber = (a, b) => (a > b ? console.log(b) : console.log(a));
// checkMinNumber(3, 1);
  
//  ---3---
// Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
function ask(question, yes, no) {
    if (confirm(question)) yes();
else no(); }
    
ask(
"Ви згодні?",
function() { alert("Ви погодились."); }, function() { alert("Ви скасували виконання."); }
);

