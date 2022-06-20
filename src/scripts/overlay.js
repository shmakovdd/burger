function createOverlay(template) {
    const element = document.createElement('div');
    element.innerHTML = template
    const overlayElement = element.querySelector('.overlay');
    const titleElement = element.querySelector('.overlay__title')
    const contentElement = element.querySelector('.overlay__content')
    const closeButton = element.querySelector('.overlay__close')

    overlayElement.addEventListener('click', e => {
        if (e.target == overlayElement) {
            closeButton.click();
        }
    })

    closeButton.addEventListener('click', e=> {
        document.body.removeChild(overlayElement)
    }) 

    return {
        open() {
            document.body.appendChild(overlayElement)
            
        },
        close() {
            closeButton.click()
        },
        setContent(t, n) {
            contentElement.innerHTML = n;
            titleElement.innerHTML = t;
        }
    }
}

