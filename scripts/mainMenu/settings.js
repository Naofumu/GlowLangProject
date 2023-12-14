let settingsButton = document.querySelector('.settingsButton')
let settings = document.querySelector('.settingsContainer')
let closeSettings = document.querySelector('.home')
let levels = document.querySelector('.levels')

settingsButton.onclick = function() {
  settings.style.display = (settings.style.display != 'block') ? 'block' : 'none'
}

closeSettings.onclick = function() {
  settings.style.display = 'none'
}

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    settings.style.display = 'none'
  }
})