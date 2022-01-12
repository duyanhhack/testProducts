const menuBtn = document.querySelectorAll('.menu__btn')
const btnBars = document.querySelector('.fa-bars')
const btnTimes = document.querySelector('.fa-times')
const menuSide = document.querySelector('.menu__main ul')
const moreBtn = document.querySelector('.btn-more')
const logo = document.querySelector('.circlek-club')
const contact = document.querySelector('.contact')

btnBars.addEventListener('click', () => {
    menuSide.classList.add('show')
    btnBars.classList.add('hidden')
    btnTimes.classList.add('show')
})

btnTimes.addEventListener('click', () => {
    menuSide.classList.remove('show')
    btnBars.classList.remove('hidden')
    btnTimes.classList.remove('show')
})

moreBtn.addEventListener('click', () => {
    logo.classList.toggle('show')
    contact.classList.toggle('show')
})

$(document).ready(function() {
    $('.menu-mobile div input').focusin(function() {
        $('.logo__mobile').css('display', 'none')
        $('.logo__mobile--small').css('display', 'block')
        $('.menu-mobile div').css('width', '70%')
        $('.menu-mobile div svg').addClass('change')
    }).focusout(function() {
        $('.logo__mobile').css('display', 'block')
        $('.logo__mobile--small').css('display', 'none')
        $('.menu-mobile div').css('width', '49%')
        $('.menu-mobile div svg').removeClass('change')
    })

});