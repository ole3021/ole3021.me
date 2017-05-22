// Toogle Burger Menu
const burgerButton = document.getElementsByClassName('toggle')
const toggleMenu = document.getElementsByClassName('toggle-menu')

burgerButton[0].addEventListener('click', function () {
  burgerButton[0].classList.toggle('open')
  toggleMenu[0].classList.toggle('open')
})
