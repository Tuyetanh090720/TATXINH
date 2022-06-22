// show menu
const navicon = document.getElementById('nav-bar-icon')
const menumobile = document.querySelector('.menu-mobile')

let click = 0
navicon.addEventListener("click", () => {
    click += 1
    if (click % 2 == 1) {
        menumobile.style.display = "block"
    }
    if (click % 2 == 0) {
        menumobile.style.display = "none"
        click = 0
    }
})

// show ne menu
const plus = document.querySelectorAll('.plus')
const li = document.querySelectorAll('.plus .ne-dropdown-menu')

let id
let jd
let plusbtn
for (let i = 0; i < plus.length; i++) {
    id = "plus"
    id = id + i

    for (let j = 0; j < plus.length; j++) {
        jd = "plus"
        jd = jd + j
        if (jd == id) {
            const plusbtn = document.getElementById(`${id}`)
            plusbtn.addEventListener("click", () => {
                li.forEach(l => {
                    l.classList.remove('active')
                })

                li[j].classList.add('active')
            })
        }

    }
}

// fixed main menu
const mainMenu = document.querySelector('.main-menu-area')
let posMainMenu = mainMenu.getBoundingClientRect()

window.addEventListener('scroll', (function() {
    var posScroll = this.window.scrollY

    if (parseInt(posScroll) > parseInt(posMainMenu.top)) {
        mainMenu.classList.add('fixed')
    } else {
        mainMenu.classList.remove('fixed')
    }
}))

// fixed mobile menu
const mobileMenu = document.querySelector('.mean-bar-mobile')
let posMobileMenu = mobileMenu.getBoundingClientRect()

window.addEventListener('scroll', (function() {
    var posScroll = this.window.scrollY

    if (parseInt(posScroll) > parseInt(posMobileMenu.top)) {
        mobileMenu.classList.add('fixed')
    } else {
        mobileMenu.classList.remove('fixed')
    }
}))