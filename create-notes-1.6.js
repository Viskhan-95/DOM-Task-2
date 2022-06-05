const div = document.createElement('div');
const ulA = document.createElement('ul');

const liInsta = document.createElement('li');
const aInsta = document.createElement('a');

const liOurSite = document.createElement('li');
const aOurSite = document.createElement('a');

aInsta.href = "https://instagram.com/intocode";
aInsta.appendChild(document.createTextNode('наш инстаграм'));

aOurSite.href = "https://intocode.ru";
aOurSite.appendChild(document.createTextNode('Наш сайт'));

liInsta.append(aInsta);
liOurSite.append(aOurSite);

ulA.append(liInsta, liOurSite);
document.body.insertAdjacentElement("beforeend", div);
div.append(ulA);

console.log(div);