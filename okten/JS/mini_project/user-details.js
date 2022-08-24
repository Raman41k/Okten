let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('user-block');
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title-block');
        let btn = document.createElement('button');
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('user-btn');
        btn.innerText = 'post of current user'.toUpperCase();
        btnDiv.append(btn);
        
       function recursion(element) {
           for (const value in element) {
               if (typeof element[value] !== 'object'){
                   let p = document.createElement('p');
                   p.classList.add('user-item');
                   p.append(`${value} : ${element[value]}`);
                   mainDiv.append(p);
               } else {
                    recursion(element[value]);
               }
           }
       }

        recursion(data);

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let anchor = document.createElement('a');
                        anchor.innerText = 'See more';
                        anchor.href = `post-details.html?id=${id}`;

                        let titleDivItem = document.createElement('div');
                        titleDivItem.append(item.title, anchor);
                        titleDiv.append(titleDivItem);

                    }

                });
        };

        document.body.append(mainDiv, btnDiv, titleDiv);
    })

// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.