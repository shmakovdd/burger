;(function(){
    const butt = document.querySelector('.header__ham');
    const hamburger = document.querySelector('.modal');
    const body = document.body;
    const links = document.querySelectorAll('.nav__link');

    links.forEach(function(element) {
        let parent = element.parentNode.parentNode.parentNode;
        if (parent.classList.contains('nav_ham')) {
            element.addEventListener( 'click', toggleMenu);
        }
    }) 

    function toggleMenu() {
        butt.classList.toggle('header__ham_open');
        hamburger.classList.toggle('modal_active');
        body.classList.toggle('body_active');
    }

    butt.addEventListener( 'click', toggleMenu);
})()