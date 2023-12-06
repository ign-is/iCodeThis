const addToCartArray = document.querySelectorAll(".added");
const buttonsArray = document.querySelectorAll("button");

buttonsArray.forEach(function(elem, index) {
    elem.addEventListener("click", function() {
        elem.style.display = "none";
        addToCartArray[index].style.display = "flex";
    });

});