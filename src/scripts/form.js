

;(function(){
    const myForm = document.body.querySelector('#myForm');
const phone = myForm.elements.phone;
const sendButton = myForm.querySelector('.btn_orange')
const clearButton = myForm.querySelector('.btn_clear')
const template = document.querySelector('#overlayTemplate').innerHTML;
const overlay = createOverlay(template);
phone.addEventListener('keydown', e=> {
    let isDigit = false;
    let isValid = false;
    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }
    if (e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == '-') {
        isValid = true;
    }
    if (!isDigit && !isValid) {
        e.preventDefault();
    }
})

clearButton.addEventListener('click', e=> {
    e.preventDefault();
    let elements = myForm.elements;
    for (element of elements) {
        element.value = '';
    }
})

sendButton.addEventListener('click', e=> {
    e.preventDefault();
    console.log(myForm.elements.comment)


    

    if (validateForm(myForm)) {
        let data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: 'my@mail.com'
        }
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail')
        xhr.responseType = 'json';
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data))

        xhr.addEventListener('load', e=> {
            if (xhr.response.status) {
                overlay.open()
                overlay.setContent('Заказ выполнен!', xhr.response.message)
            } else {
                overlay.open()
                overlay.setContent('Заказ не выполнен!', xhr.response.message)
            }
        })
    }
    
    function validateForm(form) {
        let valid = true;

        if(!validateField(form.elements.phone)) {
            valid = false;
        }

        if(!validateField(form.elements.name)) {
            valid = false;
        }

        if(!validateField(form.elements.street)) {
            valid = false;
        }

        if(!validateField(form.elements.flat)) {
            valid = false;
        }

        if(!validateField(form.elements.flatNum)) {
            valid = false;
        }

        if(!validateField(form.elements.floor)) {
            valid = false;
        }

        if(!validateField(form.elements.comment)) {
            valid = false
        }
        return valid;
    }

    function validateField(field) {
        field.nextElementSibling.innerText = field.validationMessage;
        return field.checkValidity();
    }
})
})()