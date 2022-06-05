const arr = ['html', 'css', 'js'];

const arrUl = document.createElement('ul');

for (let i = 0; i < arr.length; i++) {
    arrUl.append(craeteLiElement(arr[i]));
}

document.body.append(arrUl);

console.log(arrUl);

function craeteLiElement(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}