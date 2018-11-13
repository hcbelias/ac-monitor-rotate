(function app() {
    var index = 0;
    var content = document.getElementById("content");
    var config = {
        timeout: 300000,
        url: 'https://app.vivifyscrum.com/boards/',
        boards: 
            [
                //ACDC PLUS
                14367,
                26184, 
                26185,
                //SUPERSTARS
                14358,
                //ACPM
                14362,
                21406,
                //AC Miles
                14363,
                //ACDC Microservices
                16753,
                26113,
                //Alphaquesters
                14359,
                //EBA
                14368,
                //Insight
                16562,
                //DEVOPS
                19343,
                //Mobile
                14364,
                14365,
                //Hire
                35130
                
            ]
    };

    window.addEventListener('resize', init);

    function init() {
        var w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var h = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

        content.style.width = w;
        content.style.height = h;
    }

    function rotate() {
        content.src = config.url + config.boards[index];

        setTimeout(function() {
            if(++index === config.boards.length) {
                index = 0;
            }

            rotate();
        }, config.timeout);
    }

    init();

    rotate();
})();
