'use strict'
$(window).on('load', () =>  {
    /* getting day of week and corresponding image */
    /* lines 5-6 is from https://www.w3schools.com/jsref/jsref_getday.asp */
    let d = new Date();
    let day = d.getDay();
    const images = ["sunday.jpeg", "monday.jpeg", "tuesday.jpeg", "wednesday.jpeg", "thursday.jpeg", "friday.jpeg", "saturday.jpeg"];
    const answers = ["arc de triomphe", "stonehenge", "the sphynx", "the great wall of china", "mount rushmore", "neuschwanstein castle", "saint basil's cathedral"];
    document.getElementsByTagName('img')[0].src = images[day];

    /* instructions button functionality */
    const instructionsButton = document.getElementById('show');
    const instructions = document.getElementById('instructions');
    const closeButton = document.getElementById('close');
    instructionsButton.addEventListener('mousedown', function() {
        instructions.setAttribute('open', 'true');
        })
    closeButton.addEventListener('mousedown', function() {
        instructions.outerHTML = '<dialog id="instructions"><p>Guess the <strong>PLACE</strong> in five tries</p><p>Each guess must be valid word. Hit the submit button to submit.</p><p><strong>A new picture will be changed everyday.</strong></p><button id="close">Close</button>'
        })
    
    /* submit buttons functionality */
    const buttons = document.getElementsByClassName('btn btn-info');
    const message = document.getElementsByTagName('h2')[0];
    const statistic = document.getElementsByClassName('label')[0];
    let attempts = 0;
    for(let i = 0; i < 5; i++) {
        const guess = document.getElementsByClassName('form-control')[i].value;
        console.log(guess);
        buttons[i].addEventListener('mousedown', function() {
            if(guess == answers[day]) {
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
