const array = ['html', 'css', 'js'];

render(array);

function render(arr) {
    const arrayUl = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        arrayUl.append(craeteLiElement(arr[i]));
    }
    document.body.append(arrayUl);

    console.log(arrayUl);
}

function craeteLiElement(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}