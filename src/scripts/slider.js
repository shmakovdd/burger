


 ;(function() {


    const right = document.querySelector('.burgers__right');
    const left = document.querySelector('.burgers__left');
    const wrapperWidth = document.querySelector('.burgers__wrapper').clientWidth;
    const list = document.querySelector('.burgers__list');
    const items = document.querySelectorAll('.burgers__item');
    const listWidth = wrapperWidth * items.length;
    list.style.width = listWidth + 'px';

    let currentRight = 0;
    let maxRight = - (listWidth - wrapperWidth);

    left.addEventListener('click', function(e) {
        doSlide('left', e)
    })

    right.addEventListener('click', function(e) {
        doSlide('right', e)
    })


    function doSlide(direction, e) {
        if (direction == 'left' && currentRight < 0) {
            currentRight += wrapperWidth;
            list.style.transform = `translate(${currentRight}px)`
            
        } else if (direction == 'right' && currentRight > maxRight) {
            currentRight -= wrapperWidth;
            list.style.transform = `translate(${currentRight}px)`;            
        }
    }


 }) ()