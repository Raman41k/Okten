// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// for (const person of simpsons) {
//
//     let div = document.createElement('div');
//     div.classList.add('member');
//     let h2 = document.createElement('h2');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let img = document.createElement('img');
//     img.src = person.photo;
//
//     h2.append(`${person.surname} ${person.name}`);
//     h3.append(`Age ${person.age}`);
//     p.append(`${person.info}`);
//
//     div.append(h2,h3,p,img);
//
//     document.body.append(div);
// }

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
// Цикл в циклі
// - Є масив
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

// let div = document.createElement('div');
//
// for (const course of coursesArray) {
//
//     let h2 = document.createElement('h2');
//     h2.append(course.title);
//
//     let h3 = document.createElement('h3');
//     h3.append(`${course.monthDuration} months - ${course.hourDuration} hours`);
//
//     let h4 = document.createElement('h4');
//     h4.innerText = 'Modules'
//
//     let ul = document.createElement('ul');
//
//     for (const liElements of course.modules) {
//         let li = document.createElement('li');
//         li.innerText = liElements;
//         ul.append(li);
//     }
//
//     div.append(h2,h3,h4,ul)
//
//     document.body.append(div);
// }

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
//
//
// - створити блок,

// let div = document.createElement('div');
//
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.background = 'cornflowerblue' ;
// div.style.color = 'black';
// div.style.fontSize = '20px';
// div.innerText = 'dsafsdafsad';
//
// let cloneDiv = div.cloneNode(true);
//
// document.body.append(div);
// document.body.append(cloneDiv);


// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// - Є масив:

// let arr = ['Main','Products','About us','Contacts']
//
// let menu = document.getElementsByClassName('menu')[0];
// console.log(menu);
// for (const arrElement of arr) {
//     let li = document.createElement('li');
//     li.append(arrElement);
//     menu.appendChild(li);
// }


// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let div = document.createElement('div');
//
// for (let course of coursesAndDurationArray) {
//     let text =
// }

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let h1Element = document.createElement('h1');
//     h1Element.classList.add('heading');
//     let pElement = document.createElement('p');
//     pElement.classList.add('description');
//
//     h1Element.append(element.title);
//     pElement.append(element.monthDuration);
//     divElement.append(h1Element,pElement)
//
//     document.body.append(divElement);
// }

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
//
// -----------
//
//- Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let div = document.createElement('div');
// div.setAttribute('id','text');
// let btnRemove = document.createElement('button');
// let btnShow = document.createElement('button');
// btnRemove.innerText = 'Remove';
// btnShow.innerText = 'Show';
//
// btnRemove.addEventListener('click', () => {
//     div.style.display = 'none';
// });
// btnShow.addEventListener('click', () => {
//     div.style.display = 'block';
// });
//
// document.body.append(div, btnShow,btnRemove );

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Send';
// input.placeholder = 'Enter you age';
// input.type = 'number';
//
// btn.addEventListener('click',()=>{
//     if (input.value < 18 ){
//         alert('WTF???');
//     } else {
//         alert('All is good');
//     }
// })
//
// document.body.append(input,btn);

// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let form = document.createElement('form');
// form.name = 'table'
// let table = document.createElement('table');
// let tr = document.createElement('input');
// tr.placeholder = 'Enter row'
// let td = document.createElement('input');
// td.placeholder = 'Enter col'
// let text = document.createElement('input');
// text.placeholder = 'Enter text';
// let btn = document.createElement('button');
// btn.innerText = 'Generate';
// btn.name = 'table';
// form.append(tr,td,text,btn);
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//         for (let i = 0; i < tr.value; i++) {
//
//             let trElement = document.createElement('tr');
//
//             for (let j = 0; j < td.value; j++) {
//
//                 let tdElement = document.createElement('td');
//                 trElement.append(tdElement);
//                 tdElement.innerText = text.value;
//                 table.append(trElement);
//
//             }
//         }
// })
//
// document.body.append(table,form);
// (Додатковачастина для завдання)