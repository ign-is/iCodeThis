const addToCartArray = document.querySelectorAll(".added");
const buttonsArray = document.querySelectorAll("button");
const sign = document.querySelector('.product-added-cart');
const cartNumber = document.querySelector('.num');

let count = 0;
buttonsArray.forEach(function(elem, index) {
    elem.addEventListener("click", function() {
        count++;
        elem.style.display = "none";
        addToCartArray[index].style.display = "flex";
        sign.style.display = "block";
        cartNumber.innerText = count;
        setTimeout(() => {
            sign.style.display = "none";
        }, 1000);
       
    });
});

