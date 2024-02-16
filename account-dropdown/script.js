const profile = document.querySelector('.profile');
const btnName = document.querySelector('.btn-name');

btnName.addEventListener('click', () => {

   if(getComputedStyle(profile).display == 'block') {
        profile.style.display = 'none';
   } else {
        profile.style.display = 'block';
   }

})