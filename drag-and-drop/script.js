const table = document.querySelector('.fa-table-cells-large');
const bars = document.querySelector('.fa-bars');
const nodeList = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const img = document.querySelectorAll('img');
const ellipsis = document.querySelectorAll('.elipsis');
const h3 = document.querySelectorAll('h3');
const right = document.querySelectorAll('.right');
const done = document.querySelectorAll('.done');

table.addEventListener("click", tableClicked);
bars.addEventListener("click", barsClicked);

function tableClicked() {
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";

    for (let i = 0; i < nodeList.length; i++) {

        nodeList[i].style.height = "210px";
        nodeList[i].style.width = "280px";
        nodeList[i].style.marginRight = "20px";
        nodeList[i].style.marginBottom = "12px";
    
    
        img[i].style.position = "absolute";
        img[i].style.left = "0px";
        img[i].style.top = "12px";

        ellipsis[i].style.position = "absolute";
        ellipsis[i].style.right = "16px";
        ellipsis[i].style.top = "28px";

        h3[i].style.width = "100%";
        h3[i].style.width = "100%"
        h3[i].style.marginLeft = "9px";

        right[i].style.position = "absolute";
        right[i].style.flexDirection = "column";
        right[i].style.width = "100%";

        done[i].style.marginBottom = "20px"
        done[i].style.marginTop = "14px"
        done[i].style.marginLeft = "-4px"
        done[i].style.paddingLeft = "80px"
        done[i].style.paddingRight = "80px"
        done[i].style.paddingBottom = "8px"
        done[i].style.paddingTop = "8px"
    }
}

function barsClicked() {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].removeAttribute('style');
        img[i].removeAttribute('style');
        ellipsis[i].removeAttribute('style');
        h3[i].removeAttribute('style');
        right[i].removeAttribute('style');
        done[i].removeAttribute('style');
        ul.removeAttribute('style');
    }
}

