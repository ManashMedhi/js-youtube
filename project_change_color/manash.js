const changeColor = function(color) {
    document.body.style.backgroundColor = color;
};

const start = document.getElementById('start');

start.addEventListener('click', function() {
    console.log("started");
    
    let isBlue = false;
    const temp = setInterval(function() {
        isBlue = !isBlue;
        changeColor(isBlue ? 'lightblue' : 'green');
    }, 100);

    const id_stop = document.getElementById('stop');
    id_stop.addEventListener('click', function() {
        clearInterval(temp);
        console.log("stopped");
    });
});