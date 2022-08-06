// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareRectangle(a, b) {
    return a * b;
}

console.log("Rectangle square = " ,squareRectangle(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;

function squareCircle(radius) {
    return PI * Math.pow(radius, 2);
}

console.log("Circle square = " ,squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(height, radius) {
    return 2 * PI * Math.pow(radius, 2) + 2 * PI * height * radius;
}

console.log("Cylinder square = " ,squareCylinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

console.log('***********************************');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log('***********************************');
}

console.log("%cShow array:", 'color:red; font-size:20px;');
arrayElements(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`)
}
paragraph('How are you there?!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
list('Hello okten!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listAmount(text, amount) {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
listAmount('Hello again okten!!!', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let mixed = [1, 2, 3, 'q', 'w', 'r', true, false];
function makeList(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`);
}
makeList(mixed);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function showObjects(array) {
    for (const item of array) {
        document.write(`<div>`);
        for (let itemKey in item) {
            document.write(item[itemKey] + " ");
            // document.write(`${item[itemKey]}`);
        }
        document.write(`</div>`);
    }
}
showObjects(users);

// - створити функцію яка повертає найменьше число з масиву

let arrayNumbers = [105, 2745, 14, 4789, 7899, 652, 7, 800, 999, 1001];
function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[0] > array[i]){
            max = array[i];
        }
    }
    return max;
}
console.log("%cThe lowest number in array = ", "color:red" ,findMax(arrayNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log("%cThe sum of the numbers of the array = ", "color:red" ,arraySum(arrayNumbers));