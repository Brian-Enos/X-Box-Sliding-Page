
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.main-container');

left.addEventListener('mouseenter', handleMouseEnter);

function handleMouseEnter() {
container.classList.add('hover-left');
}

left.addEventListener('mouseleave', handleMouseLeave);

function handleMouseLeave() {
container.classList.remove('hover-left');
}

//The above two functions are similar to the ones below: Use of arrow function
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));