// Place footer text on window load
window.onload = function () {
    const injectFooter = document.querySelector('footer p');
    injectFooter.textContent = 'Copyright Fun Bus 2018';
}

// Team Fun Bus Easter Egg
const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('mouseover', (e) => {
    funBus.textContent === 'Team Fun Bus' ? e.currentTarget.style.cursor = 'auto' : e.currentTarget.style.cursor = 'Pointer';
})

funBus.addEventListener('dblclick', (e) => {
    e.currentTarget.textContent = 'Team Fun Bus';
    e.currentTarget.style.cursor = 'auto';
})


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

// Bolder Paragraph
const boldP = document.querySelectorAll('p');

boldP.forEach(p => {
    p.addEventListener('click', (e) => {
        e.currentTarget.style.fontSize = '30px';
    })
})

boldP.forEach(p => {
    p.addEventListener('dblclick', e => {
        e.currentTarget.style.fontSize = '16px';
    })
})

// Image drag sets img to display none
const imageDrag = document.querySelectorAll('img');

imageDrag.forEach(img => {
    img.addEventListener('drag', e => {
        e.currentTarget.style.display = 'none';
    })
})
