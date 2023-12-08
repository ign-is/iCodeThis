const cartIcon = document.getElementById('cart');
const cart = document.getElementById('aside-cart');

let toggle = true;
cartIcon.addEventListener('click', () => {
    if(toggle) {
        cart.style.right = '0px';
        toggle = false;
    } else {
        cart.style.right = '-400px';
        toggle = true;
    }
});

