// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// function Info(id,name,username,email,street,suite,zipcode,lat,lng,phone,website,companyName,companyCatchPhrase,companyBs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street,
//         suite,
//         zipcode,
//         geo:{lat, lng},
//     }
//     this.phone = phone;
//     this.website = website;
//     this.company = {companyName, companyCatchPhrase,companyBs}
// }
//
// let info = new Info(15,'Leanne Graham','Bret', 'Sincere@april.biz', 'Kulas Light','Apt. 556','92998-3874','-37.3159','81.1496', '1-770-736-8031 x56442','hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(info);

// class Info {
//     constructor(id,name,username,email,street,suite,zipcode,lat,lng,phone,website,companyName,companyCatchPhrase,companyBs) {
//         this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {street, suite, zipcode,geo:{lat,lng}};
//
//     this.phone = phone;
//     this.website = website;
//     this.company = {companyName, companyCatchPhrase,companyBs}
//     }
// }
//
// console.log(new Info(15, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function Tags(titleOfTag, action,attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

let titleOfTag_A = 'area';
let action_A  = `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`;
let attrs_A = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
];

let tag_A = new Tags(titleOfTag_A,action_A,attrs_A);
console.log(tag_A);


// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }