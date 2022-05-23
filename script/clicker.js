// class ennemies

class Ennemies {
  constructor(eName, HP, constHP, img) {
    this.eName = eName;
    this.HP = HP;
    this.constHP = constHP;
    this.img = img;
  }
}

// Initialization function
/*

class Date{

}

*/
function Initialization(){
    if(!localStorage.getItem('damage')){
        var damage = Number(5);
    }
    else{
        var damage = Number(localStorage.getItem('clicks'));
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
    if(!localStorage.getItem('money')){
        var money = Number(0);
    }
    else{
        var money = Number(localStorage.getItem('money'));
    }
    return [damage, multipl, costs, auto, money];
}

// Display function

function dispAll(){
    yourDamage.innerHTML = damage;
    multiplica.innerHTML = multipl*2;
    prix.innerHTML = costs*multipl;
    HP.innerHTML = bat.HP;
    yourMoney.innerHTML = money;
    eName.innerHTML = bat.eName;
}
function dispDamages(){
    counter.innerHTML = damage;
}

function dispMenu(menu,style){
    document.querySelector(menu).style.display = style;
}

// Data

data = Initialization();
var damage = Number(data[0]);
var multipl = Number(data[1]);
var costs = Number(data[2]);
var auto = Number(data[3]);
var money = Number(data[4])
if(auto!=0){
    setInterval(autoClicks, 2000);
}

var bat = new Ennemies('Bat',200,200,'/img/bat')

dispAll();

// data save and reset

function makeSave(){
    localStorage.setItem('clicks',clicks);
    localStorage.setItem('multipl',multipl);
    localStorage.setItem('costs',costs);
    localStorage.setItem('auto', auto)
}

function resetAll(){
    localStorage.removeItem('damage');
    localStorage.removeItem('multipl');
    localStorage.removeItem('costs');
    localStorage.removeItem('auto');
    localStorage.removeItem('money');

    Initialization();
    location.reload();
}

// clicker function

function clickMulti(){
    if(money >= costs*multipl){
        money = money - multipl*costs;
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
    ennemiesHP = ennemiesHP - auto;
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

// gestion des ennemies :

function ennemiesDamage(){
    if(bat.HP<=0){
      return;
    }

    if(damage<=bat.HP){
        bat.HP = bat.HP - damage;
        prc = (bat.HP*100)/bat.constHP;
        console.log('prc : '+String(prc)+'%)');
        document.getElementById("BarHP").style.background = 'linear-gradient(110deg, red '+String(prc)+'%, gray 0%)';
        if(bat.HP<=0){
          money = money + 10;
        }
        dispAll();
    }
}
