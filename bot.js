const open = require('open');

// perform loop actoun 
setInterval(() => {
    // you can select which browser to use by 
    // changing "chrome" to "safari", "firefox" etc.

    // open('https://www.youtube.com/watch?v=t9uwMwAo9yU', { app: { name: 'chrome' } });

    // skipping the second parameter just opens in your default browser

    open('https://www.youtube.com/watch?v=t9uwMwAo9yU');

    // this is the number of milliseconds. The video is 5 min 30 secs, which is about 
    // 330 seconds, which is 330000 in milliseconds, plus 5 second buffer
    // }, 335000
}, 335000
);


