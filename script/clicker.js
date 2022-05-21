// Initialization function 

function Initialization(){
    if(!localStorage.getItem('clicks')){
        var clicks = Number(0);
    }
    else{
        var clicks = Number(localStorage.getItem('clicks'));
    }
    if(!localStorage.getItem('multipl')){
        var multipl =  Number(1);
    }
    else{
        var multipl = localStorage.getItem('multipl');
    }
    if(!localStorage.getItem('costs')){
        var costs =  Number(200);
    }
    else{
        var costs = Number(localStorage.getItem('costs'));
    }
    if(!localStorage.getItem('auto')){
        var auto = Number(0);
    }
    else{
        var auto = Number(localStorage.getItem('auto'));
    } 
    return [clicks, multipl, costs, auto];
}

// Display function

function dispAll(){
    counter.innerHTML = clicks;
    multiplica.innerHTML = multipl*2;
    prix.innerHTML = costs*multipl;
}
function dispClicks(){
    counter.innerHTML = clicks;
}

function dispMenu(menu,style){
    document.querySelector(menu).style.display = style;
}

// Data 

data = Initialization();
var clicks = Number(data[0]);
var multipl = Number(data[1]);
var costs = Number(data[2]);
var auto = Number(data[3]);
if(auto!=0){
    setInterval(autoClicks, 2000);
}
dispAll();

// data save and reset

function makeSave(){
    localStorage.setItem('clicks',clicks);
    localStorage.setItem('multipl',multipl);
    localStorage.setItem('costs',costs);
    localStorage.setItem('auto', auto)
}

function resetAll(){
    localStorage.removeItem('clicks');
    localStorage.removeItem('multipl');
    localStorage.removeItem('costs'); 
    localStorage.removeItem('auto');
    Initialization();
    location.reload();
}

// clicker function

function increment(){
    clicks = clicks + multipl;
    counter.innerHTML = clicks;
    makeSave();
}

function clickMulti(){
    if(clicks >= costs*multipl){
        clicks = clicks - multipl*costs;
        multipl = multipl*2;
        costs = costs * multipl;
    }
    else{
        alert("You don't have enough clicks ! ");
        return;
    }
    dispAll();
    makeSave();
}

function autoClicks(){
    clicks = clicks + auto;
    dispClicks();
}

function buyAutoClicks(){
    if(auto!=0){
        alert("You already have auto clicks ! ");
        return;
    }
    else{
        if(clicks >= 5000){
            clicks = clicks - 5000;
            auto=1;
            dispClicks();
            setInterval(autoClicks, 2000);
        }
        else{
            alert("You don't have enough clicks ! ");
            return;
        }
    }
    makeSave();
}

function upgradeAuto(){
    // soon
}