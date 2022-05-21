var clicks = 0;
var multipl = 1;
var costs = 200;

counter.innerHTML = clicks;
multipli.innerHTML = multipl*2;
cost.innerHTML = costs;

function increment(){
    clicks = clicks + multipl;
    counter.innerHTML = clicks;
}

function dispMenu(menu,style){
    document.querySelector(menu).style.display = style;
}

function clickMulti(){
    if(clicks >= costs){
        clicks = clicks - multipl*200;
        counter.innerHTML = clicks;
        multipl = multipl*2;
        costs = costs * multipl;
    }
    else{
        alert("You don't have enough clicks ! ");
        return;
    }
    cost.innerHTML = costs;
    multipli.innerHTML = multipl*2;
}