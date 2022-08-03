let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
    for (let i = 0; i < listOfItems.length; i++) {
        let listOfItem = listOfItems[i];
        document.write(`<li>${listOfItem}</li>`);
    }
document.write(`</ul>`);