// transform product-thumb
const slideProduct = document.getElementById('slide-product')
const slidePrev = document.getElementById('slide-prev')
const slideNext = document.getElementById('slide-next')
const lis = document.querySelectorAll('.product-thumb')

let j = 0


if (lis.length > 4) {
    slidePrev.style.opacity = '0.7'
    slideNext.style.opacity = '0.7'
}

function changeThumb() {
    if (j > lis.length - 4) {
        j = 0
    } else if (j < 0) {
        j = lis.length - 4
    }
    slideProduct.style.transform = `translateX(${-j *25}%)`
}

slideNext.addEventListener('click', () => {
    j++
    if (lis.length > 4) {
        changeThumb()
    }
})

slidePrev.addEventListener('click', () => {
    j--

    if (lis.length > 4) {
        changeThumb()
    }
})