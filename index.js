const btn1 = document.querySelector('.btn-p')
const btn2 = document.querySelector('.btn-p2')
const btn3 = document.querySelector('.btn-p3')
const img = document.querySelector('.div-img')
const titulo = document.querySelector('.js-h2')
const li1 = document.querySelector('.js-li1')
const li2 = document.querySelector('.js-li2')
const li3 = document.querySelector('.js-li3')
const li4 = document.querySelector('.js-li4')
const jsp1 = document.querySelector('.js-p1')
const jsp2 = document.querySelector('.js-p2')
const jsp3 = document.querySelector('.js-p3')
const jsp4 = document.querySelector('.js-p4')
const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const a3 = document.querySelector('.a3')
const a4 = document.querySelector('.a4')
const iconimg = document.querySelector('.icon-img')
const iconimg2 = document.querySelector('.icon-img2')
const iconimg3 = document.querySelector('.icon-img3')
const iconimg4 = document.querySelector('.icon-img4')

let widthh = window.innerWidth
window.addEventListener('resize', function () {
    widthh = this.window.innerWidth
})
let i = 1
let i2 = 1
let i3 = 1
let i4 = 1
btn1.addEventListener('click', function () {

    img.style.backgroundImage = "url('./images/illustration-features-tab-1.svg')"
    titulo.innerHTML = 'Bookmarck in one click'
})
btn2.addEventListener('click', function () {

    img.style.backgroundImage = "url('./images/illustration-features-tab-2.svg')"
    titulo.innerHTML = 'Intelligent seaech'
})
btn3.addEventListener('click', function () {

    img.style.backgroundImage = "url('./images/illustration-features-tab-3.svg')"
    titulo.innerHTML = 'Share your bookmarks'
})
li1.addEventListener('click', function () {
    event.preventDefault()
    ++i
    if (i % 2 == 0) {
        jsp1.style.display = 'block'
        iconimg.style.transform = 'rotate(180deg)'
    } else {
        jsp1.style.display = 'none'
        iconimg.style.transform = 'rotate(0deg)'

    }
})
li2.addEventListener('click', function () {
    ++i2
    if (i2 % 2 == 0) {
        jsp2.style.display = 'block'
        iconimg2.style.transform = 'rotate(180deg)'
    } else {
        jsp2.style.display = 'none'
        iconimg2.style.transform = 'rotate(0deg)'
    }
    event.preventDefault()
})
li3.addEventListener('click', function () {
    event.preventDefault()
    ++i3
    if (i3 % 2 == 0) {
        jsp3.style.display = 'block'
        iconimg3.style.transform = 'rotate(180deg)'
    } else {
        jsp3.style.display = 'none'
        iconimg3.style.transform = 'rotate(0deg)'
    }
})
li4.addEventListener('click', function () {
    event.preventDefault()
    jsp4.style.display = 'block'
    ++i4
    if (i4 % 2 == 0) {
        iconimg4.style.transform = 'rotate(180deg)'
        jsp4.style.display = 'block'
    } else {
        jsp4.style.display = 'none'
        iconimg4.style.transform = 'rotate(0deg)'
    }
})









a1.addEventListener('click', function () {
    event.preventDefault()
})
a2.addEventListener('click', function () {
    event.preventDefault()
})
a3.addEventListener('click', function () {
    event.preventDefault()
})
a4.addEventListener('click', function () {
    event.preventDefault()
})