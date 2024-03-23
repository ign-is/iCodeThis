const rainbow = document.querySelector('.rainbow');
const colors = document.querySelectorAll('.inner-container > div');
const container = document.querySelector('.container');

colors.forEach(color => {
    color.addEventListener('mouseover', (e) => changeRainbow(e));
    color.addEventListener('mouseout', defaultRainbow);
})

function changeRainbow(e) {

    switch (e.target.classList[0]) {
        case 'orange':
            rainbow.style.background = '#fdcbac';
            container.style.boxShadow = `12px 8px 21px -3px rgba(253, 203, 172, 0.3),
                                        -12px 8px 21px -3px rgba(253, 203, 172, 0.3)`;
            break;
        case 'yellow':
            rainbow.style.background = '#fcd492';
            container.style.boxShadow = `12px 8px 21px -3px rgba(252, 211, 146, 0.3),
                                        -12px 8px 21px -3px rgba(252, 211, 146, 0.3)`;
            break;
        case 'green':
            rainbow.style.background = '#c4dfbb';
            container.style.boxShadow = `12px 8px 21px -3px rgba(196, 223, 187, 0.3),
                                        -12px 8px 21px -3px rgba(196, 223, 187, 0.3)`;
            break;
        case 'light-blue':
            rainbow.style.background = '#8ddaeb';
            container.style.boxShadow = `12px 8px 21px -3px rgba(141, 218, 235, 0.3),
                                        -12px 8px 21px -3px rgba(141, 218, 235, 0.3)`;
            break;
        case 'violet':
            rainbow.style.background = '#b8aaff';
            container.style.boxShadow = `12px 8px 21px -3px rgba(184, 170, 255, 0.3),
                                        -12px 8px 21px -3px rgba(184, 170, 255, 0.3)`;
            break;
        case 'pink':
            rainbow.style.background = '#ffabc7';
            container.style.boxShadow = `12px 8px 21px -3px rgba(255, 171, 199, 0.3),
                                        -12px 8px 21px -3px rgba(255, 171, 199, 0.3)`;
            break;
    }
    
}

function defaultRainbow() {

    container.style.boxShadow = 'none';
    rainbow.style.background = 'none';
    rainbow.style.background = `linear-gradient(
        90deg, 
        var(--orange),
        var(--yellow),
        var(--green),
        var(--light-blue),
        var(--violet),
        var(--pink)
    )`;

}