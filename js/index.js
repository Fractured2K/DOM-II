// Place footer text on window load
window.onload = () => {
    const injectFooter = document.querySelector('footer p');
    injectFooter.textContent = 'Copyright Fun Bus 2018';
}

// Random title generator for heading
window.onscroll = () => {
    const randomSelect = document.querySelector('h2');
    const randomTitle = ['Lorem ipsum', 'Consectetur adipiscing elit', 'Sed accumsan ante turpis', ' Curabitur interdum enim', 'Nulla bibendum neque erat', 'Mauris elementum porta augue'];

    const rngTitle = Math.floor(Math.random() * randomTitle.length);

    randomSelect.textContent = randomTitle[rngTitle];
}

// Random button color
window.addEventListener('resize', (e) => {
    if (window.innerWidth < 1500) {
        const colors = ['red', 'green', 'blue', 'orange'];
        const rngColor = Math.floor(Math.random() * colors.length);
        e.stopPropagation();

        const btn = document.querySelectorAll('.btn');
        btn.forEach(btn => {
            btn.style.color = colors[rngColor];
        })
    }
})

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

// Keylog Scare
let keys = [];
window.addEventListener('keydown', e => {
    keys.push(e.key)
    document.querySelector('.home header p').textContent = keys.join('');
})


const formInput = document.querySelectorAll('form input');

formInput.forEach(input => {
    input.addEventListener('focus', e => {
        e.currentTarget.style.background = 'red';
    })
})

formInput.forEach(input => {
    input.addEventListener('blur', e => {
        e.currentTarget.style.background = '';
    })
})
