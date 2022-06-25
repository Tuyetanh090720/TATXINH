const panels = document.querySelectorAll('.panel')
const producTabs = document.querySelectorAll('.product-tabs li')
const descriptionTab = document.getElementById('description-tab')
const additionalTab = document.getElementById('additional-tab')
const reviewsTab = document.getElementById('reviews-tab')

let activePanel = 0


descriptionTab.addEventListener('click', () => {
    activePanel = 0

    setActiveProducTabs()
    setActivePanel()
})

additionalTab.addEventListener('click', () => {
    activePanel = 1

    setActiveProducTabs()
    setActivePanel()
})

reviewsTab.addEventListener('click', () => {
    activePanel = 2

    setActiveProducTabs()
    setActivePanel()
})

function setActiveProducTabs() {
    producTabs.forEach(tabs => {
        tabs.classList.remove('active')
    })

    producTabs[activePanel].classList.add('active')
}

function setActivePanel() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

    panels[activePanel].classList.add('active')
}