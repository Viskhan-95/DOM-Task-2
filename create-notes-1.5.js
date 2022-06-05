const redDiv = document.createElement('div');
const greenDiv = document.createElement('div');
const blueDiv = document.createElement('div');

redDiv.classList.add('red');
greenDiv.classList.add('green');
blueDiv.classList.add('blue');

blueDiv.textContent = 'Я вложен';

greenDiv.append(blueDiv);
redDiv.append(greenDiv);

console.log(redDiv);
