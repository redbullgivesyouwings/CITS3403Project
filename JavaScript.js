'use strict'
$(window).on('load', () =>  {
    /* getting day of week and corresponding image */
    /* lines 5-6 is from https://www.w3schools.com/jsref/jsref_getday.asp */
    const d = new Date();
    let day = d.getDay();
    const images = ["sunday.jpeg", "monday.jpeg", "tuesday.jpeg", "wednesday.jpeg", "thursday.jpeg", "friday.jpeg", "saturday.jpeg"];
    const answers = ["arc de triomphe", "stonehenge", "the sphynx", "the great wall of china", "mount rushmore", "neuschwanstein castle", "saint basil's cathedral"];
    document.getElementsByTagName('img')[0].src = images[day];

    /* instructions button functionality */
    let instructionsButton = document.getElementById('show');
    let instructions = document.getElementById('instructions');
    let closeButton = document.getElementById('close');
    instructionsButton.addEventListener('mouseclick', function() {
        instructions.show();
    })
    closeButton.addEventListener('mouseclick', function() {
        instructions.hide();
    })
    
    /* submit buttons functionality */
    let buttons = document.getElementsByClassName('btn btn-info');
    let guess = document.getElementsByClassName('form-control');
    let message = document.getElementsByTagName('h2')[0];
    let attempts = 0;
    let statistic = document.getElementsByClassName('label')[0];
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseclick', function() {
            if(guess[i] == answers[day]) {
                message.innerText = "Congratulations";
                let accuracy = (1 - attempts/5) * 100;
                statistic.innerText = accuracy + "% accuracy";
            }
            else {
                attempts += 1;
                if(attempts == 5) {message.innerText = "Answer: " + answers[day];}
                else {message.innerText = "Try Again";}
            }
        })
    }
})
