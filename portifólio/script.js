function initSelector() {
    const navSelect = document.querySelectorAll('a[href^="#"]');
    navSelect[0].classList.add('item-select');

    function clickSelect(event) {
        event.preventDefault();
        navSelect.forEach((link) => {
            link.classList.remove('item-select')
        });
        event.currentTarget.classList.add('item-select');
    };

    navSelect.forEach((link) => {
        link.addEventListener('click', clickSelect)
    });
};
initSelector();

function initNavBar() {
    const navBar = document.querySelector('.js-nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navBar.classList.add('ativo-bar')
        } else {
            navBar.classList.remove('ativo-bar')
        }
    });
}
initNavBar();

function initScrollSuave() {
    const navItem = document.querySelectorAll('.js-nav a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    navItem.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}
initScrollSuave();

