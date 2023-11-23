let easy = document.querySelector('.easy')
let firstButton = document.querySelector('.firstButton')
let click1 = document.querySelector('.click1')

easy.onmouseover = function() {
  if (click1.style.opacity == 0) {
    click1.style.opacity = 1;
  } 
  
}

easy.onclick = function() {

  document.querySelector('.modal').classList.add('open')
  document.querySelector('.activeDif').classList.add('f')
  document.querySelector('.beginnerpop').style.display = 'block'

}

firstButton.onmouseout = function() {
  click1.style.opacity = 0;
}

let medium = document.querySelector('.medium')
let secondButton = document.querySelector('.secondButton')
let click2 = document.querySelector('.click2')

medium.onmouseover = function() {
  if (click2.style.opacity == 0) {
    click2.style.opacity = 1;
  } 
  
}

medium.onclick = function() {
  
  document.querySelector('.modal').classList.add('open')
  document.querySelector('.activeDif').classList.add('s')
  document.querySelector('.mediumpop').style.display = 'block'

}
secondButton.onmouseout = function() {
  click2.style.opacity = 0;
}

let hard = document.querySelector('.hard')
let thirdButton = document.querySelector('.thirdButton')
let click3 = document.querySelector('.click3')

hard.onmouseover = function() {
  if (click3.style.opacity == 0) {
    click3.style.opacity = 1;
  } 
  
}

hard.onclick = function() {

  document.querySelector('.modal').classList.add('open')
  document.querySelector('.activeDif').classList.add('t')
  document.querySelector('.hardpop').style.display = 'block'

}
thirdButton.onmouseout = function() {
  click3.style.opacity = 0;
}

document.querySelector('.backContainer').onclick = function() {
  document.querySelector('.modal').classList.remove('open')
  document.querySelector('.activeDif').classList.remove('f')
  document.querySelector('.activeDif').classList.remove('s')
  document.querySelector('.activeDif').classList.remove('t')
  document.querySelector('.beginnerpop').style.display = 'none'
  document.querySelector('.mediumpop').style.display = 'none'
  document.querySelector('.hardpop').style.display = 'none'
}

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    document.querySelector('.modal').classList.remove('open')
    document.querySelector('.activeDif').classList.remove('f')
  document.querySelector('.activeDif').classList.remove('s')
  document.querySelector('.activeDif').classList.remove('t')
  document.querySelector('.beginnerpop').style.display = 'none'
  document.querySelector('.mediumpop').style.display = 'none'
  document.querySelector('.hardpop').style.display = 'none'
  }
})

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    document.querySelector('.modal').classList.remove('open')
    document.querySelector('.activeDif').classList.remove('f')
  document.querySelector('.activeDif').classList.remove('s')
  document.querySelector('.activeDif').classList.remove('t')
  document.querySelector('.beginnerpop').style.display = 'none'
  document.querySelector('.mediumpop').style.display = 'none'
  document.querySelector('.hardpop').style.display = 'none'
  }
})