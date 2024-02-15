const heart = document.querySelectorAll(".fa-heart");
const list = document.querySelectorAll("li");


heart.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(heart[index].classList.contains("fa-regular")) {
            heart[index].classList.remove("fa-regular");
            heart[index].classList.add("fa-solid");
        } else {
            heart[index].classList.remove("fa-solid");
            heart[index].classList.add("fa-regular");
        }
    });
})

list.forEach(navItem => {
navItem.addEventListener('click', e => {
    document.querySelector('li.active').classList.remove('active');
    e.target.classList.add('active');
  });
});