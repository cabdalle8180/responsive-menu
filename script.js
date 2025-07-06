menbtn=document.querySelector('.menu')
navlin=document.querySelector('.nav-links')

menbtn.addEventListener('click', showbtn)

function showbtn(){
    navlin.classList.toggle('show-nav-links')
}
