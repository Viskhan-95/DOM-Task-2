const ul = document.createElement('ul');
ul.classList.add('list');

const li = document.createElement('li').textContent = 'hellow, world';

ul.append(li);

console.log(ul);
console.log(li);