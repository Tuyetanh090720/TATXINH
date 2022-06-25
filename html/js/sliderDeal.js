//slide deal
const slides = document.getElementById('slide-deal')
const leftBt = document.getElementById('deal-left')
const rightBt = document.getElementById('deal-right')


const div = document.querySelectorAll('#slide-deal .pro-loop')

let i = 0

let intervalDeal = setInterval(runDeal, 2000)

function runDeal() {
    i++
    changeSlide()
}

function changeSlide() {
    if (i > div.length - 4) {
        i = 0
    } else if (i < 0) {
        i = div.length - 4
    }
    slides.style.transform = `translateX(${-i *25}%)`
}

function resetIntervalDeal() {
    clearInterval(intervalDeal)
    intervalDeal = setInterval(runDeal, 2000)
}

rightBt.addEventListener('click', () => {
    i++

    changeSlide()
    resetIntervalDeal()
})

leftBt.addEventListener('click', () => {
    i--

    changeSlide()
    resetIntervalDeal()
})