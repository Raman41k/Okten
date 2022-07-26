// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 'hello', true, false, "okten", 6, 'good', 8, 9, 'how are you'];
console.log('%cArray:', 'color:red;font-weight:bold; font-size:18px;')
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let first = {
    title: 'Harry Potter',
    pageCount: 750,
    genre: 'fantastic'
}

let second = {
    title: 'Tom and Jerry',
    pageCount: 15,
    genre: 'funny'
}

let third = {
    title: 'Lorem',
    pageCount: 54,
    genre: 'fantastic'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let firstObj = {
    title: 'Harry Potter',
    pageCount: 750,
    genre: 'fantastic',
    authors: [
        {
            name: 'Stepan',
            age: 17
        }
    ]
}

let secondObj = {
    title: 'Harry Potter',
    pageCount: 750,
    genre: 'fantastic',
    authors: [
        {
            name: 'Stepan',
            age: 17
        }
    ]
}

let thirdObj = {
    title: 'Harry Potter',
    pageCount: 750,
    genre: 'fantastic',
    authors: [
        {
            name: 'Stepan',
            age: 17
        }
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

long = [
    {name: 'Barker', username: 'Creedence', password: 'bZJLcA',},
    {name: 'Roberson', username: 'Pixie', password: '3aDwSp'},
    {name: 'Guerra', username: 'Candy', password: 'y9F2rL'},
    {name: 'Gibson', username: 'Spicy', password: 'ZbwQds'},
    {name: 'Heath', username: 'Muffin', password: 'GvUG44'},
    {name: 'Abbott', username: 'Marge', password: '4ARnfF'},
    {name: 'Henry', username: 'Brutus', password: '3SyruN'},
    {name: 'Gentry', username: 'Cruella', password: 'zsbQVd'},
    {name: 'Poole', username: 'Cupcake', password: '5pGcpW'},
    {name: 'Ballard', username: 'Piggy', password: 'HH4UVS',}
];

console.log('%cPasswords:', 'color:red;font-weight:bold; font-size:18px;')
console.log(long[0]['password']);
console.log(long[1]['password']);
console.log(long[2]['password']);
console.log(long[3]['password']);
console.log(long[4]['password']);
console.log(long[5]['password']);
console.log(long[6]['password']);
console.log(long[7]['password']);
console.log(long[8]['password']);
console.log(long[9]['password']);