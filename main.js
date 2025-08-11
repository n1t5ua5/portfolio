let isTranslated = false;
let isDarkMode = true;

const originalText = {
    h1: 'RECENT PROJECTS',
    h4: 'web development, marketing & plants',
    a: ['quarterly', 'connect']
};
const translations = {
    h1: 'PROYECTOS RECIENTES',
    h4: 'desarrollo web, marketing & plantas',
    a: ['trimestral', 'conectar']
};

function flashingEffect(element, interval) {
    setInterval(() => {
        element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, interval);
}

const h4Element = document.getElementById('flashingEffect');
flashingEffect(h4Element, 500);

function toggleTranslation() {
    const h1Element = document.querySelector('h1');
    const h4Element = document.querySelector('h4');
    const translateButton = document.getElementById('translateButton');

    if (!isTranslated) {
        applyTranslations(translations);
        translateButton.innerText = 'english?';
    } else {
        applyTranslations(originalText);
        translateButton.innerText = '¿español?';
    }
    isTranslated = !isTranslated;
}

function applyTranslations(translations) {
    const h1Element = document.querySelector('h1');
    const h4Element = document.querySelector('h4');
    const navElements = document.querySelectorAll('a[data-translate="true"]');
    const dayNightToggle = document.getElementById('dayNightToggle');

    if (h1Element) h1Element.innerText = translations.h1;
    if (h4Element) h4Element.innerText = translations.h4;

    const minElements = Math.min(navElements.length, translations.a.length);

    for (let i = 0; i < minElements; i++) {
        navElements[i].innerText = translations.a[i];
    }

    if (dayNightToggle) {
        dayNightToggle.innerText = (isDarkMode) ? '💡' : '🔦';
    }

    if (navElements.length !== minElements) {
        console.error('Number of translated <a> elements does not match.');
    }
}

function toggleDayNightMode() {
    const dayNightToggle = document.getElementById('dayNightToggle');
    const body = document.body;

    if (!isDarkMode) {
        body.classList.add('dark-mode');
        dayNightToggle.innerText = '💡';
    } else {
        body.classList.remove('dark-mode');
        dayNightToggle.innerText = '🔦';
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', function() {
    toggleDayNightMode();
});

const dayNightToggle = document.getElementById('dayNightToggle');
dayNightToggle.addEventListener('click', function(event) {
    event.preventDefault();
    toggleDayNightMode();
});

if (window.innerWidth >= 1024) {
    document.body.classList.add('desktop');
}
