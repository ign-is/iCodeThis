
function hoverOrange(x) {

    x.style.backgroundColor = '#ffa353';
    x.style.boxShadow = '0px 10px 15px -3px rgba(0,0,0,0.2)';
    x.children[0].style.color= 'white';
    x.children[1].innerText = 'More \n details';
    x.children[1].style.fontSize = '20.8px';
    x.children[1].style.textAlign = 'center';
    x.children[1].style.color = 'white';
    x.children[1].style.fontWeight = '400';
    
    if(x.children[0].classList[1] == 'fa-instagram') {
        x.children[0].style.background = '#f09433'; 
        x.children[0].style.background = `-moz-linear-gradient(
            45deg, 
            #ffffff,
            #ffffff)`; 
        x.children[0].style.background = `-webkit-linear-gradient(
            45deg, 
            #ffffff,
            #ffffff)`; 
        x.children[0].style.background = `linear-gradient(
            45deg, 
            #ffffff,
            #ffffff)`; 
        x.children[0].style.filter = `progid:DXImageTransform.Microsoft.gradient( startColorstr=' #ffffff', 
        endColorstr=' #ffffff',
        GradientType=1 )`;
        x.children[0].style.backgroundClip = '-webkit-background-clip = text';
        x.children[0].style.backgroundClip = 'text';
        x.children[0].style.webkitTextFillColor = 'transparent';
    } 
}

function hoverOrangeOut(x) {

    x.style.backgroundColor = 'white';
    x.style.boxShadow = 'none';

    if(x.children[0].classList[1] == 'fa-facebook-f') {
        x.children[0].style.color = '#4267B2';
        x.children[1].style.color = '#3b3960';
        x.children[1].innerText = '7881';
        x.children[1].style.fontSize = '2rem';
        x.children[1].style.fontWeight = '600';
    }

    if(x.children[0].classList[1] == 'fa-twitter') {
        x.children[0].style.color = '#1DA1F2';
        x.children[1].style.color = '#3b3960';
        x.children[1].innerText = '2450';
        x.children[1].style.fontSize = '2rem';
        x.children[1].style.fontWeight = '600';
    }

    if(x.children[0].classList[1] == 'fa-instagram') {
        x.children[0].style.background = '#f09433'; 
        x.children[0].style.background = `-moz-linear-gradient(
            45deg, 
            #f09433 0%, 
            #e6683c 25%, 
            #dc2743 50%, 
            #cc2366 75%, 
            #bc1888 100%)`; 
        x.children[0].style.background = `-webkit-linear-gradient(
            45deg, 
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%)`; 
        x.children[0].style.background = `linear-gradient(
            45deg, 
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%)`; 
        x.children[0].style.filter = `progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', 
        endColorstr='#bc1888',
        GradientType=1 )`;
        x.children[0].style.backgroundClip = '-webkit-background-clip = text';
        x.children[0].style.backgroundClip = 'text';
        x.children[0].style.webkitTextFillColor = 'transparent';
        x.children[1].style.color = '#3b3960';
        x.children[1].innerText = '4577';
        x.children[1].style.fontSize = '2rem';
        x.children[1].style.fontWeight = '600';
    }
}
