const slideMenu = document.querySelector('nav ul')
const menuToggle = document.querySelector('input[type="checkbox"]')

console.log(menuToggle)
menuToggle.addEventListener('click', function() {
    slideMenu.classList.toggle('slide')
    console.log(slideMenu)
})