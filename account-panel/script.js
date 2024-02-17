const chebron = document.querySelector('.chebron');
const images = document.querySelectorAll('img');

const imgArray = [
    "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603807699268-b898d5af56b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603655570546-62db1e72b208?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

let count = 0;
function next() {
    
    if(count == 0) {
        images[0].src = imgArray[0];
        images[1].src = imgArray[1];
        images[2].src = imgArray[2];
        count++;
    } else if (count == 1) {
        images[0].src = imgArray[1];
        images[1].src = imgArray[2];
        images[2].src = imgArray[3];
        count++;
    } else if (count == 2) {
        images[0].src = imgArray[2];
        images[1].src = imgArray[3];
        images[2].src = imgArray[4];
        count++;
    } else if (count == 3) {
        images[0].src = imgArray[3];
        images[1].src = imgArray[4];
        images[2].src = imgArray[5];
        count++;
    } else if (count == 4) {
        images[0].src = imgArray[4];
        images[1].src = imgArray[5];
        images[2].src = imgArray[0];
        count++;
    } else if (count == 5) {
        images[0].src = imgArray[5];
        images[1].src = imgArray[0];
        images[2].src = imgArray[1];
        count = 0;
    } 
}
next();
chebron.addEventListener('click', next);