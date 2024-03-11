const close = document.querySelector('.fa-xmark');
const choose = document.querySelector('.choose');
const categories = document.querySelectorAll('.category');
const btn = document.querySelector('.btn-continue');
const article = document.querySelector('.articles');
const bookmark = document.querySelectorAll('.article-title .fa-bookmark');

close.addEventListener('click', closeFunc);

function closeFunc() {
    choose.style.display = 'none';
}

categories.forEach((item, index) => {
    return item.addEventListener('click', () => categorySelect(index));
})

function categorySelect(index) {
    if(window.getComputedStyle(categories[index].children[0]).borderStyle == 'none') {
        categories[index].children[0].style.border = '1px solid #ff6b91';
         categories[index].children[1].style.backgroundColor = '#ff6b91';
    } else {
        categories[index].children[0].style.border = 'none';
         categories[index].children[1].style.backgroundColor = 'transparent';
    }
}

btn.addEventListener('click', continueFunc);

function continueFunc() {
    choose.style.display = 'none';
    article.style.display = 'flex';
}

bookmark.forEach((item, index) => {
    return item.addEventListener('click', () => bookmarked(index));
})

function bookmarked(index) {
    if (bookmark[index].classList.contains('fa-regular')) {
        bookmark[index].classList.remove('fa-regular');
        bookmark[index].classList.add('fa-solid');
    } else {
        bookmark[index].classList.remove('fa-solid');
        bookmark[index].classList.add('fa-regular');
    }
}