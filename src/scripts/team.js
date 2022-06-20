

;(function() {
    let teamList = document.querySelector('.team__list');
let workers = document.querySelectorAll('.team__item');

teamList.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('team__name')) {
        let teamItem = target.parentNode;
        let wrapper = target.nextElementSibling;
        let height = wrapper.firstElementChild.clientHeight;

         if(!teamItem.classList.contains('team__item_active')) {
           teamItem.classList.add('team__item_active');
            wrapper.style.height = height + "px";
        }  else {
            teamItem.classList.remove('team__item_active');
            wrapper.style.height = 0;
        }

        for (let i of workers) {
            if(i !== teamItem) {
                i.classList.remove('team__item_active')
                i.querySelector('.team__hidden-wrapper').style.height = 0;
            }
        }

    }
})
 })()





