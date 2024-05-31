
const showButton=document.getElementById('showButton');
const birthdayWish= document.getElementById('birthdayWish');

showButton.addEventListener('click' , ()=> {
showButton.classList.add('hidden');
birthdayWish.classList.remove('hidden');
});

