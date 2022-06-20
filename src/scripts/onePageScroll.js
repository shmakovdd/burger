;(function(){

    const nav__list = document.body.querySelector('.nav__list');
    const nav__link = document.body.querySelectorAll('.nav__link')
    const pagination__link = document.body.querySelectorAll('.pagination__link');
    const sections = document.body.querySelectorAll('.section');
    const main = document.body.querySelector('.main-content');
    const pagination__list = document.body.querySelector('.pagination__list');
    const pagination__item = document.body.querySelectorAll('.pagination__item');
    const hambList = document.body.querySelector('.nav_ham').querySelector('.nav__list');
    const hambLink = hambList.querySelectorAll('.nav__link');
    let inScroll = false;



   

    function wheel() {
        document.addEventListener('wheel', e => {
            switch(e.deltaY > 0) {
                case(true): name('up');
                break
                case(false): name('down');
                break
            }
        })
    }

    function keyDown() {
        document.addEventListener('keydown', e => {
            switch(e.keyCode) {
                case (40): name('up');
                break
                case (38): name('down');
                break
            }
        })
    }

    
    function name(direction) {
        const page = definePage()
        if(direction === "up" && page.nextPage) {
            doScroll(page.indexPage + 1)
        } else if (direction === 'down' && page.prevPage) {
            doScroll(page.indexPage - 1)
        }
    }

    function definePage() {
        for (let i = 0; i < sections.length; i++) {
            if(sections[i].classList.contains('is-active')) {
                return  {   prevPage: sections[i].previousElementSibling,
                            nextPage: sections[i].nextElementSibling,
                            indexPage: i }
                }
        }
        
    }

    function doScroll(number) {
        const position = `${number * (-100)}%`
        if (inScroll) return
        inScroll = true
        main.style.transform = `translateY(${position})`;
        changeClass(sections, number)
        changeClass(pagination__item, number)
        setTimeout(() => {
            inScroll = false
            
        }, 600);

    }

    function navigation() {

        document.addEventListener( 'click', e => {
            if (e.target.dataset.value == 'scroll') {
                doScroll(1)
            }
           
            if(e.target.dataset.value == '6') {
                e.preventDefault();
                doScroll(6)
            }

        })

        pagination__list.addEventListener( 'click', e => {
            e.preventDefault()
            for (let i = 0; i < pagination__link.length; i++ ) {
                if (e.target == pagination__link[i]) {
                    let data = e.target.dataset.value
                    doScroll(data)
                }
            }
            
        })

        hambList.addEventListener('click', e=> {
            e.preventDefault()
            for (let i = 0; i < hambLink.length; i++ ) {
                if (e.target == hambLink[i]) {
                    let data = e.target.dataset.value
                    doScroll(data)
                }
            }
            
        })

        nav__list.addEventListener( 'click', e => {
            e.preventDefault()
            for (let i = 0; i < nav__link.length; i++ ) {
                if (e.target == nav__link[i]) {
                    let data = e.target.dataset.value
                    doScroll(data)
                }
            }
        })
    }

    function changeClass(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('is-active')
    }
    arr[number].classList.add('is-active')
    }

    $(function() {
        $("body").swipe( {
          swipe:(event, direction) => {
            const page = definePage()
            if(direction === "up" && page.nextPage) {
                doScroll(page.indexPage + 1)
            } else if (direction === 'down' && page.prevPage) {
                doScroll(page.indexPage - 1)
            }
          }
        });

      });


    keyDown();

    wheel();

    navigation()

})()