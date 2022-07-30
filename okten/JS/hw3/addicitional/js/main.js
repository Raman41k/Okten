// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grischa", "Lera", "Ira"];
//
// if (friends.length >=3){
//     document.write(`<h2 style="font-size: 50px;">Huge array, there are 3 or more elements</h2>`);
// } else {
//     document.write(`<h2 style="font-size: 50px;">Small array, there are less than 3 elements</h2>`);
// }

// - Маємо 3 числа і між ним нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let a = 789;
// let b = 999;
// let c = 666;
//
// if (a > b && a < c || a < b && a > c) {
//     document.write(`<h2 style="font-size: 50px;">${a} is medium</h2>`);
// }
//
// if (b > a && b < c || b < a && b > c) {
//     document.write(`<h2 style="font-size: 50px;">${b} is medium</h2>`);
// }
//
// if (c > a && c < b || c < a && c > b) {
//     document.write(`<h2 style="font-size: 50px;">${c} is medium</h2>`);
// }
//
// if (a === b || a === c || b === c) {
//     document.write(`<h2 style="font-size: 50px;">Two or three numbers are equal</h2>`);
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = 100;
// let b = 1;
// let result = a + b < 4 ? document.write(`<h2 style="font-size: 50px;">Мало</h2>`): document.write(`<h2 style="font-size: 50px;">Багато</h2>`);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let x = -1;
//
// let result = x > 0 ? document.write(`<h2 style="font-size: 50px;">Number is positive</h2>`): x < 0 ? document.write(`<h2 style="font-size: 50px;">Number is negative</h2>`): x === 0 ? document.write(`<h2 style="font-size: 50px;">Number equal 0</h2>`) : document.write(`<h2 style="font-size: 50px;">Don't understand</h2>`);

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = " ";

// let result = test ? document.write(`<h2 style="font-size: 50px;">Вірно</h2>`) : document.write(`<h2 style="font-size: 50px;">Неправильно</h2>`);

// if (test){
//     document.write(`<h2 style="font-size: 50px;">Вірно</h2>`);
// } else {
//     document.write(`<h2 style="font-size: 50px;">Неправильно</h2>`);
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt("Яка «офіційна» назва JavaScript?")
//
// if (question === "ECMAScript"){
//     document.write(`<h2 style="font-size: 50px;">Правильно!</h2>`);
// } else{
//     document.write(`<h2 style="font-size: 50px;">Не знаєте? ECMAScript!!</h2>`);
// }

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let apart = +prompt("Enter your number of apartments");
//
// if (apart > 0 && apart < 21) {
//     document.write(`<h2 style="font-size: 50px;">This apartment is in first enter</h2>`);
// } else if (apart > 20 && apart < 49) {
//     document.write(`<h2 style="font-size: 50px;">This apartment is in second enter</h2>`);
// } else if (apart > 48 && apart < 91) {
//     document.write(`<h2 style="font-size: 50px;">This apartment is in third enter</h2>`);
// } else {
//     document.write(`<h2 style="font-size: 50px;">WTF?</h2>`);
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt("Enter the number");
//
// if (number === 10) {
//     document.write(`<h2 style="font-size: 50px;">ВІРНО</h2>`);
// } else {
//     document.write(`<h2 style="font-size: 50px;">НЕВІРНО</h2>`);
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = 20;
//
// if (temperature > 9 && temperature < 23){
//     document.write(`<h2 style="font-size: 50px;">ми йдемо ВЧИТИСЯ</h2>`);
// } else {
//     document.write(`<h2 style="font-size: 50px;">сидимо вдома і вчимося ОНЛАЙН</h2>`);
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне

// let number = +prompt("Enter the number from 1 to 5");
//
// switch (number){
//     case 1:
//         document.write(`<h2 style="font-size: 50px;">You won a car</h2>`);
//         break;
//     case 2:
//         document.write(`<h2 style="font-size: 50px;">You won a motorcycle</h2>`);
//         break;
//     case 3:
//         document.write(`<h2 style="font-size: 50px;">You won a Iphone</h2>`);
//         break;
//     case 4:
//         document.write(`<h2 style="font-size: 50px;">You won a Trip to Egypt</h2>`);
//         break;
//     case 5:
//         document.write(`<h2 style="font-size: 50px;">You won a 500$</h2>`);
//         break;
//     default:
//         document.write(`<h2 style="font-size: 50px;">The number isn't correct</h2>`);
// }