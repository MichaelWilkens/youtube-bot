const open = require('open');

// open web page 
open('https://www.youtube.com/watch?v=t9uwMwAo9yU');

let counter = 0;


// perform loop actoun 
setInterval(() => {
    // you can select which browser to use by 
    // changing "chrome" to "safari", "firefox" etc.

    // open('https://www.youtube.com/watch?v=t9uwMwAo9yU', { app: { name: 'chrome' } });

    // skipping the second parameter just opens in your default browser

    // web browsers typically don't allow opening more than 100 tabs, so after 
    // 100 interations, change to a different browser
    if (counter <= 100) {
        open('https://www.youtube.com/watch?v=t9uwMwAo9yU');
    }
    if (counter > 100 && counter < 200) {
    open('https://www.youtube.com/watch?v=t9uwMwAo9yU', { app: { name: 'safari' } });
    }
    else {
        open('https://www.youtube.com/watch?v=t9uwMwAo9yU', { app: { name: 'safari' } });
    }

    // increase counter
    counter++;

    // this is the number of milliseconds. The video is 5 min 30 secs, which is about 
    // 330 seconds, which is 330000 in milliseconds, plus 5 second buffer
    // }, 335000
}, 335000
);


