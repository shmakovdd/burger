


;(function(){
    const menuList = document.querySelector('.menu__list')
    const menu = document.querySelectorAll('.menu__item')
    
    
    menuList.onclick = event => {
        event.preventDefault()
        const target = event.target
        const item = target.parentNode
    
        if(item.classList.contains('menu__item_active')) {
            item.classList.remove('menu__item_active')
        } else {
            for (let i of menu) {
                i.classList.remove('menu__item_active')
            }
            item.classList.add('menu__item_active')
        }
    }
})()



