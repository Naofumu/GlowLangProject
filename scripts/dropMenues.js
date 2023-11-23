let lang = document.querySelector('.firstDropmenu')
let langMenu = document.querySelector('.langMenu')

lang.onclick = function() {
    langMenu.style.display = 'flex';
    document.querySelector('.currentLang').style.display = 'none'
}

lang.addEventListener('mouseleave', function() {
    langMenu.style.display = 'none';
    document.querySelector('.currentLang').style.display = 'flex'
})

document.querySelector('.eng').onclick = function() {
    document.querySelector('.currentLang').innerHTML = document.querySelector('.eng').innerHTML
}

document.querySelector('.deut').onclick = function() {
    document.querySelector('.currentLang').innerHTML = document.querySelector('.deut').innerHTML
}

document.querySelector('.fren').onclick = function() {
    document.querySelector('.currentLang').innerHTML = document.querySelector('.fren').innerHTML
}

let theme = document.querySelector('.secondDropmenu')
let themeMenu = document.querySelector('.themeMenu')

theme.onclick = function() {
    themeMenu.style.display = 'flex';
    document.querySelector('.currentTheme').style.display = 'none'
}

theme.addEventListener('mouseleave', function() {
    themeMenu.style.display = 'none';
    document.querySelector('.currentTheme').style.display = 'flex'
})

document.querySelector('.light').onclick = function() {
    document.querySelector('.currentTheme').innerHTML = document.querySelector('.light').innerHTML
}

document.querySelector('.dark').onclick = function() {
    document.querySelector('.currentTheme').innerHTML = document.querySelector('.dark').innerHTML
}

let dif = document.querySelector('.thirdDropmenu')
let difMenu = document.querySelector('.difMenu')

dif.onclick = function() {
    difMenu.style.display = 'flex';
    document.querySelector('.currentDif').style.display = 'none'
}

dif.addEventListener('mouseleave', function() {
    difMenu.style.display = 'none';
    document.querySelector('.currentDif').style.display = 'flex'
})

document.querySelector('.beginner').onclick = function() {
    document.querySelector('.currentDif').innerHTML = document.querySelector('.beginner').innerHTML
}

document.querySelector('.knowing').onclick = function() {
    document.querySelector('.currentDif').innerHTML = document.querySelector('.knowing').innerHTML
}

document.querySelector('.genius').onclick = function() {
    document.querySelector('.currentDif').innerHTML = document.querySelector('.genius').innerHTML
}