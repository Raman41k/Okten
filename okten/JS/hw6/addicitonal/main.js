// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str, n) {
//     let newArr = [];
//     for (let i = 0; i < str.length; i += n) {
//         newArr.push(str.substring(i, n + i));
//     }
//     return newArr;
// }
//
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// let str = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) =>{
//     return str.slice(str[0], length)
// }
// console.log((delete_characters(str, 7)));

// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.

//     let str = "HTML JavaScript PHP";
//
// let insert_dash = str =>{
//     return str.replaceAll(' ', '-').toUpperCase();
// }
//
// console.log(insert_dash(str));

// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let bigLetter = str =>{
//     return  str.charAt(0).toUpperCase() + str.slice(1);
// }
//
// console.log(bigLetter('hello world!'));

// - Дано список імен.

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione____________________________________Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//
// let change = str =>{
//     return str.replaceAll(/[._\-]/g,' ').replace(/\s+/g, " ");
// }
// console.log(change(n3));

// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// function randomArr(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//
//     }
//     return arr;
// }
//
// console.log(randomArr(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArr = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     return arr;
// }
//
// console.log(randomArr( 10));
//
// let sort = arr =>{
//     arr.sort();
//     return arr;
// }
//
// console.log(sort(randomArr(10)));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// console.log(randomArr(10));

// arr.filter(value => {
//     if (value % 2 === 0) {
//         console.log(value);
//     }
// });

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = str =>{
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
//     });
// }
// console.log(capitalize('hello world how are you'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((fisrt, second) => fisrt.modules.length - second.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb)) // 5

// let symb = "о", str = "Астрономия это наука о небесных объектах";
// let count = (str,stringsearch) =>{
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) =>{
//     const arr = str.split(' ');
//     return arr.splice(0, n).toString().replace(/,/g," ");
// }
//
// console.log(cutString(str, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню