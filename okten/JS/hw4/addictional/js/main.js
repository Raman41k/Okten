// ---------------------------------------------------Addictional 1 --------------------------------------------
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let array = [2,17,13,6,22,31,45,66,100,-18];
// document.write(`<div>${array}</div>`);
// 1. перебрати його циклом while

// let i = 0;
//
// while (array.length > i){
//     document.write(`<div>${array[i]}</div>`);
//     i++;
// }

// 2. перебрати його циклом for

// for (let i = 0; i < array.length; i++) {
//     document.write(`<div>${array[i]}</div>`);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 1;
//
// while (array.length > i){
//     document.write(`<div>${array[i]}</div>`);
//     i += 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 1; i < array.length; i+=2) {
//     document.write(`<div>${array[i]}</div>`);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

 // let i = 0;
 //
 // while (array.length > i){
 //     if (array[i] % 2 === 0){
 //         document.write(`<div>${array[i]}</div>`);
 //     }
 //     i++;
 // }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         document.write(`<div>${array[i]}</div>`);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     document.write(`<div>${array[i]}</div>`);
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     document.write(`<div>${array[i]}</div>`);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

// let i = array.length - 1;

// while (i >=0){
//     document.write(`<div>${array[i]}</div>`);
//     i--;
// }

// 2. перебрати його циклом for

// for (let i = array.length - 1; i >= 0; i--) {
//     document.write(`<div>${array[i]}</div>`);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = array.length - 1;
//
// while (i >= 0){
//     document.write(`<div>${array[i]}</div>`);
//     i -= 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = array.length - 1; i >= 0 ; i-=2) {
//     document.write(`<div>${array[i]}</div>`);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = array.length - 1;
//
// while (i >= 0){
//     if (array[i] % 2 === 0){
//         document.write(`<div>${array[i]}</div>`);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 === 0) {
//         document.write(`<div>${array[i]}</div>`);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
//     document.write(`<div>${array[i]}</div>`);
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < numbers.length; i++) {
//     document.write(`<div>${numbers[i]}</div>`);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strings = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",];
//
// for (let i = 0; i < strings.length; i++) {
//     document.write(`<div>${strings[i]}</div>`);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mixed = [1, "W", 3, "R", 5, "Y", 6, "I", 8, "P"];
//
// for (let i = 0; i < mixed.length; i++) {
//     document.write(`<div>${mixed[i]}</div>`);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let mixed = [1, "W", true, "R", 5, false, 6, "I", true, "P"];
//
// for (let i = 0; i < mixed.length; i++) {
//     if (typeof mixed[i] === "boolean") {
//         document.write(`<div>${mixed[i]}</div>`);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let mixed = [1, "W", true, "R", 5, false, 6, "I", true, "P"];
//
// for (let i = 0; i < mixed.length; i++) {
//     if (typeof mixed[i] === "number") {
//         document.write(`<div>${mixed[i]}</div>`);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mixed = [1, "W", true, "R", 5, false, 6, "I", true, "P"];
//
// for (let i = 0; i < mixed.length; i++) {
//     if (typeof mixed[i] === "string") {
//         document.write(`<div>${mixed[i]}</div>`);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
//
// array[0] = 1;
// array[1] = "W";
// array[2] = true;
// array[3] = "R";
// array[4] = 5;
// array[5] = false;
// array[6] = 6;
// array[7] = "I";
// array[8] = true;
// array[9] = "P";
//
// for (let i = 0; i < array.length; i++) {
//     document.write(`<div>${array[i]}</div>`);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 11; i++) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 101; i++) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 101; i += 2) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 101; i += 2) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//for (let i = 1; i < 101; i += 2) {
//    console.log(i);
//    document.write(`<p>${i}</p>`);
//}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books = [
//     {name: 'In Search of Lost Time', pages: 147, authors: 'Marcel Proust', genre: 'Nonfiction'},
//     {name: 'Ulysses', pages: 589, authors: ['James Joyce', 'Marcel Proust'], genre: ['Nonfiction', 'Fiction']},
//     {name: 'Don Quixot', pages: 1478, authors: 'Miguel de Cervantes', genre: 'Satire'},
//     {name: 'One Hundred Years of Solitude', pages: 457, authors: ['Marcel Proust', 'Gabriel Garcia Marquez'], genre: ['Suspense', 'Travel']},
//     {name: 'The Great Gatsby ', pages: 523, authors: 'F. Scott Fitzgerald', genre: 'Review'}
// ];

// -знайти найбільшу книжку.

// for (const book of books) {
//     for (const bookKey in book) {
//         if (Math.max(book['pages'])){
//
//         }
//     }
// }

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

// ---------------------------------------------------Addictional 1 --------------------------------------------
/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон
			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
			*
			* */

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

document.write(`<div class="father">`)
for (const usersListElement of usersList) {
    document.write(`
    <div>
    ${usersListElement["id"]} <br> 
    ${usersListElement['name']} <br> 
    ${usersListElement['username']} <br>
    ${usersListElement['email']} <br>
    ${usersListElement['address']['street']} <br>
    ${usersListElement['address']['suite']} <br>
    ${usersListElement['address']['city']} <br>
    ${usersListElement['address']['zipcode']} <br>
    ${usersListElement['address']['geo']['lat']} <br>
    ${usersListElement['address']['geo']['lng']} <br>
    ${usersListElement["phone"]} <br> 
    ${usersListElement["website"]} <br> 
    ${usersListElement["company"]['name']} <br> 
    ${usersListElement["company"]['catchPhrase']} <br> 
    ${usersListElement["company"]['bs']} <br> 
    </div>
`);
}
document.write(`</div>`);
