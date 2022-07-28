// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Enter number');
//
// if (x !== 0) {
//     document.write("<h2>Вірно</h2>");
// }else {
//     document.write("<h2>Невірно</h2>");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 59;
//
// if (time > 0 && time <= 15) {
//     document.write("<h2>Перша половина</h2");
// } else if (time > 15 && time <= 30) {
//     document.write("<h2>Друга половина</h2");
// } else if (time > 30 && time <= 45) {
//     document.write("<h2>Третя половина</h2");
// } else if (time > 45 && time <= 59) {
//     document.write("<h2>Четверта половина</h2>");
// } else {
//     document.write("<h2>Error</h2>");
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 1;
//
// if (day > 0 && day < 11) {
//     document.write("<h2>Перша декада</h2>");
// } else if (day > 10 && day < 21) {
//     document.write("<h2>Друга декада</h2>");
// } else if (day >= 21 && day <= 31) {
//     document.write("<h2>Третя декада</h2>");
// } else {
//     document.write("<h2>Error</h2>");
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let number = +prompt('Enter the number of day');
//
// switch (number) {
//     case 1:
//         document.write("<h2>Monday</h2>");
//         break;
//     case 2:
//         document.write("<h2>Tuesday</h2>");
//         break;
//     case 3:
//         document.write("<h2>Wednesday</h2>");
//         break;
//     case 4:
//         document.write("<h2>Thursday</h2>");
//         break;
//     case 5:
//
//
//         document.write("<h2>Friday</h2>");
//         break;
//     case 6:
//         document.write("<h2>Saturday</h2>");
//         break;
//     case 7:
//         document.write("<h2>Sunday</h2>");
//         break;
//     default:
//         document.write("<h2>What do you want?</h2>");
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
//
// if (a > b){
//     document.write("<h2>First number is bigger that second</h2>");
// } else if (b > a){
//     document.write("<h2>Second number is bigger that first</h2>");
// } else if (a === b){
//     document.write("<h2>Numbers are equal</h2>");
// } else {
//     document.write("<h2>WTF?</h2>");
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt("Enter something") || "default";
// document.write(x);