const clock = document.querySelector('#clock');

let date = new Date()
console.log(date.toLocaleTimeString()); // ai line ta amar nalakhilao kotha nai amar khali print koribo console ot
// aikhine loike amar hoise time ta console ot ahiya ase 
// ala amak html dia juta interface banising ote ahiba lage
// so ami eta use korim
setInterval(function(){
    clock.innerHMTL = date.toLocaleTimeString();

},1000);