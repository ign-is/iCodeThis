const apps = document.querySelectorAll('.app');
const btnAdd = document.querySelectorAll('.btn-add');

for (let i = 0; i < apps.length; i++) {
    apps[i].addEventListener('mouseover', () => onHover(i));
    apps[i].addEventListener('mouseout', () => outHover(i));
}

function onHover(i) {
    btnAdd[i].style.bottom = '10px';
}

function outHover(i) {
    btnAdd[i].style.bottom = '-34px';
}
