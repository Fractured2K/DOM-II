// Navigation
const navHover = document.querySelectorAll('.nav-link');

navHover.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        e.currentTarget.style.color = '#17A2B8';
    })
})

navHover.forEach(el => {
    el.addEventListener('mouseout', (e) => {
        e.currentTarget.style.color = 'black';
    })
})
