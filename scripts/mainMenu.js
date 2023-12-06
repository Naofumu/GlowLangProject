window.onload = () => {

    var buttonActive = 1;

    var back1 = document.querySelector('.back1');
    var back2 = document.querySelector('.back2');
    var back3 = document.querySelector('.back3');
    var back4 = document.querySelector('.back4');
    var back5 = document.querySelector('.back5');
    var back6 = document.querySelector('.back6');

    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    var button5 = document.getElementById('button5');
    var button6 = document.getElementById('button6');

back1.setAttribute('style', 'opacity: 1; scale: 1;')

button1.addEventListener('click', () => {
if (buttonActive !== 1) {
back1.setAttribute('style', 'opacity: 1; scale: 1;')
document.querySelector(`.back${buttonActive}`).setAttribute('style', 'opacity: 0; scale: 0;')
buttonActive = 1;
document.querySelector(`.location${buttonActive}`).scrollIntoView();
} else return;
});

button2.addEventListener('click', () => {
if (buttonActive !== 2) {
back2.setAttribute('style', 'opacity: 1; scale: 1;')
document.querySelector(`.back${buttonActive}`).setAttribute('style', 'opacity: 0; scale: 0;')
buttonActive = 2;
document.querySelector(`.location${buttonActive}`).scrollIntoView();
} else return;
});

button3.addEventListener('click', () => {
if (buttonActive !== 3) {
back3.setAttribute('style', 'opacity: 1; scale: 1;')
document.querySelector(`.back${buttonActive}`).setAttribute('style', 'opacity: 0; scale: 0;')
buttonActive = 3;
document.querySelector(`.location${buttonActive}`).scrollIntoView();
} else return;
});
button4.addEventListener('click', () => {
if (buttonActive !== 4) {
back4.setAttribute('style', 'opacity: 1; scale: 1;')
document.querySelector(`.back${buttonActive}`).setAttribute('style', 'opacity: 0; scale: 0;')
buttonActive = 4;
document.querySelector(`.location${buttonActive}`).scrollIntoView();
} else return;
});
button5.addEventListener('click', () => {
if (buttonActive !== 5) {
back5.setAttribute('style', 'opacity: 1; scale: 1;')
document.querySelector(`.back${buttonActive}`).setAttribute('style', 'opacity: 0; scale: 0;')
buttonActive = 5;
document.querySelector(`.location${buttonActive}`).scrollIntoView();
} else return;
});
button6.addEventListener('click', () => {
if (buttonActive !== 6) {
back6.setAttribute('style', 'opacity: 1; scale: 1;')
document.querySelector(`.back${buttonActive}`).setAttribute('style', 'opacity: 0; scale: 0;')
buttonActive = 6;
document.querySelector(`.location${buttonActive}`).scrollIntoView();
} else return;
});

const scrollOffset = 100;
const scrollElement = document.querySelector(".location3");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
const displayScrollElement = () => {
  console.log('true')
}
const hideScrollElement = () => {
  console.log('false')
}
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

}
