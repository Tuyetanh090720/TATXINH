const loginbtn = document.getElementById('loginBtn')
const loginbtnmobile = document.getElementById('loginBtnMobile')
const mymodal = document.getElementById('myModal')
const closelogin = document.getElementById('closeLogin')
const register = document.getElementById('register')
const mymodalregister = document.getElementById('myModalRegister')
const closeregister = document.getElementById('closeRegister')

function showLogin() {
    mymodal.style.display = "block"
}

function closeLogin() {
    mymodal.style.display = "none"
}

function showRegister() {
    mymodalregister.style.display = "block"
}

function closeRegister() {
    mymodalregister.style.display = "none"
}

loginbtn.addEventListener("click", showLogin)
loginbtnmobile.addEventListener("click", showLogin)
closelogin.addEventListener("click", closeLogin)

register.addEventListener("click", showRegister)
closeregister.addEventListener("click", closeRegister)


// search item
const searchitem = document.getElementById('searchItem')
const searchinput = document.getElementById('searchInput')

function showSearch() {
    searchinput.style.opacity = '1'

}

function closeSearch() {
    searchinput.style.opacity = '0'
}

searchitem.addEventListener("click", showSearch)