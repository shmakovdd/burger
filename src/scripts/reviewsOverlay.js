;(function() {


    const template = document.querySelector('#overlayTemplate').innerHTML;
   
    const reviews__list = document.querySelector('.reviews__list');
    const overlay = createOverlay(template)
    reviews__list.addEventListener('click', e=> {
          if(e.target.classList.contains('review__btn')) {
              const openButton = e.target;
              const reviewTitle = openButton.parentNode.querySelector('.review__title');
              const reviewDescr = openButton.parentNode.querySelector('.review__descr');
              
                overlay.open()
                overlay.setContent(reviewTitle.innerHTML, reviewDescr.innerHTML)
          }
        
    })


}) ()