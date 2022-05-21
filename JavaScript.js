'use strict'
$(window).on('load', () =>  {
    let buttons = document.getElementsByClassName('btn btn-info');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseclick', function() {
            $.get()
        })
    }
})
