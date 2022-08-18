// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(1,'user1','user_1','user1@gmail.com', 111);
const user2 = new User(2,'user2','user_2','user2@gmail.com', 222);
const user3 = new User(3,'user3','user_3','user3@gmail.com', 333);
const user4 = new User(4,'user4','user_4','user4@gmail.com', 444);
const user5 = new User(5,'user5','user_5','user5@gmail.com', 555);
const user6 = new User(6,'user6','user_6','user6@gmail.com', 666);
const user7 = new User(7,'user7','user_7','user7@gmail.com', 777);
const user8 = new User(8,'user8','user_8','user8@gmail.com', 888);
const user9 = new User(9,'user9','user_9','user9@gmail.com', 999);
const user10 = new User(10,'user10','user_10','user10@gmail.com', 1010);

const arr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log("Об'єкти з парними id =>" ,arr.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log("ідсортувати його по id. по зростанню =>" ,arr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client(1,'client1','client_1','client1@gmail.com', 111,['milk', 'juice']);
const client2 = new Client(2,'client2','client_2','client2@gmail.com', 222,['milk', 'juice','apples']);
const client3 = new Client(3,'client3','client_3','client3@gmail.com', 333,['milk']);
const client4 = new Client(4,'client4','client_4','client4@gmail.com', 444,['milk', 'juice']);
const client5 = new Client(5,'client5','client_5','client5@gmail.com', 555,['milk', 'juice', 'milk', 'juice']);
const client6 = new Client(6,'client6','client_6','client6@gmail.com', 666,['milk', 'juice']);
const client7 = new Client(7,'client7','client_7','client7@gmail.com', 777,['milk', 'juice']);
const client8 = new Client(8,'client8','client_8','client8@gmail.com', 888,['milk', 'juice', 'milk', 'juice', 'milk', 'juice']);
const client9 = new Client(9,'client9','client_9','client9@gmail.com', 999,['milk', 'juice']);
const client10 = new Client(10,'client10','client_10','client10@gmail.com', 1010,['milk', 'juice']);

const clientArr = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArr.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, madeBy, date, maxSpeed, engine) {
//     this.model = model;
//     this.madeBy = madeBy;
//     this.date = date;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function (){
//         console.log(`
//         Model = ${model}
//         Made by = ${madeBy}
//         Date = ${date}
//         Max speed is = ${maxSpeed}
//         Engine volume = ${engine}
//         `);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue){
//         this.date = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }

// let car = new Car('Audi', 'German', 2015, 250,3.6);
// car.increaseMaxSpeed(260);
// car.changeYear(1999);
// car.addDriver({name:'Roman', age:19});
// console.log(car);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car {
    constructor(model, madeBy, date, maxSpeed, engine) {
        this.model = model;
        this.madeBy = madeBy;
        this.date = date;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info(){
        console.log(`
        Model = ${this.model}
        Made by = ${this.madeBy}
        Date = ${this.date}
        Max speed is = ${this.maxSpeed}
        Engine volume = ${this.engine}
        `);
    }

    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
    }

    changeYear (newValue){
        this.date = newValue;
    }

     addDriver(driver){
        this.driver = driver;
         console.log(driver);
     }

}

let car = new Car('Audi', 'German', 2015, 251,3.6);

// car.drive();
// car.increaseMaxSpeed(500);
// car.changeYear(2016);
// car.addDriver({name:'Roman', age:19})
car.info();
console.log(car);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Girl(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let girls = [
    girl1 = new Girl('girl1', 18, 34),
    girl2 = new Girl('girl2', 20, 30),
    girl3 = new Girl('girl3', 14, 29),
    girl4 = new Girl('girl4', 74, 41),
    girl5 = new Girl('girl5', 65, 43),
    girl6 = new Girl('girl6', 17, 40),
    girl7 = new Girl('girl7', 21, 31),
    girl8 = new Girl('girl8', 34, 32),
    girl9 = new Girl('girl9', 67, 45),
    girl10 = new Girl('girl10', 29, 28),
]

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Boy {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let boy = new Boy('Roman', 19, 28)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const girlElement of girls) {
    if (girlElement.size === boy.shoe){
        console.log(`${boy.name} find his ${girlElement.name}`);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(girls.find(value => value.size === boy.shoe));

girls.find(value => {
   if (value.size === boy.shoe){
       console.log(`${value.name} will go with ${boy.name}`)
   }
});

