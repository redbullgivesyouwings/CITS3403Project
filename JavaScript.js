'use strict'
$(window).on('load', () =>  {
    /* getting day of week and corresponding image */
    /* lines 5-7 is from https://www.w3schools.com/jsref/jsref_getday.asp */
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    const images = ["sunday.jpeg", "monday.jpeg", "tuesday.jpeg", "wednesday.jpeg", "thursday.jpeg", "friday.jpeg", "saturday.jpeg"];
    const answers = ["arc de triomphe", "stonehenge", "the sphynx", "the great wall of china", "mount rushmore", "neuschwanstein castle", "saint basil's cathedral"];
    document.getElementsByTagName("img")[0].src = images[day];
    /* submit buttons functionality */
    let buttons = document.getElementsByClassName('btn btn-info');
    let guess = document.getElementsByClassName('form-control');
    attempts = 0;
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseclick', function() {
            if(guess[i] == answers[day]) {
                document.getElementsByTagName('h2')[0].innerText = "Congratulations";
            }
            else if(document.getElementsByClassName('input-group-text')[4]) { 
                document.getElementsByTagName('h2')[0].innerText = "Answer: " + answers[day]; 
            }
            else {document.getElementsByTagName('h2')[0].innerText = "Try Again";}
            attempts += 1;
        })
    }
    /* results calculation */
    let statistic = document.getElementsByClassName('statistic')[0];
    accuracy = (1 - attempts/5) * 100;
    statistic.innerText = accuracy + "% accuracy";
})
