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

class Data{
    constructor(){
      if(!localStorage.getItem('damage')){
          this.damage = Number(5);
      }
      else{
          this.damage = Number(localStorage.getItem('damage'));
      }
      if(!localStorage.getItem('multipl')){
          this.multipl =  Number(1);
      }
      else{
          this.multipl = localStorage.getItem('multipl');
      }
      if(!localStorage.getItem('costs')){
          this.costs =  Number(200);
      }
      else{
          this.costs = Number(localStorage.getItem('costs'));
      }
      if(!localStorage.getItem('auto')){
          this.auto = Number(0);
      }
      else{
          this.auto = Number(localStorage.getItem('auto'));
      }
      if(!localStorage.getItem('money')){
          this.money = Number(0);
      }
      else{
          this.money = Number(localStorage.getItem('money'));
      }
      if(!localStorage.getItem('seconds')){
        this.seconds = Number(0);
      }
      else{
        this.seconds = Number(localStorage.getItem('seconds'));
      }
      if(!localStorage.getItem('minutes')){
        this.minutes = Number(0);
      }
      else{
        this.minutes = Number(localStorage.getItem('minutes'));
      }
    }
}

// Display function

function dispAll(){
    yourDamage.innerHTML = data.damage*data.multipl;
    multiplica.innerHTML = data.multipl*2;
    prix.innerHTML = data.costs*data.multipl;
    HP.innerHTML = enemy.HP;
    yourMoney.innerHTML = data.money;
    eName.innerHTML = enemy.eName;
    document.getElementById("enemyImg").src=enemy.img;
    if(data.auto==0){
      yourAuto.innerHTML = '0/sec';
    }
    else{
      yourAuto.innerHTML = data.damage*data.multipl+'/sec';
    }
}
function dispDamages(){
    counter.innerHTML = data.damage;
}
function dispHP(){
    HP.innerHTML = enemy.HP;
}
function dispMenu(menu,style){
    document.querySelector(menu).style.display = style;
}

// Data

var data = new Data();

if(data.auto!=0){
    setInterval(autoClicks, 1000);
    autoClicksBuy.innerHTML = 'Max ! ';
}


var enemyDict =
[new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp'),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON.webp'),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-6.webp'),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-2.webp'),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-3.webp'),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-4.webp'),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-5.webp'),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE.webp'),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-2.webp'),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-3.webp'),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp'),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp'),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp'),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER.webp'),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER-2.webp'),
 new Ennemies('Giant Mummy',400,400,'../img/mobs/Sprite-XLMUMMY.webp'),
 new Ennemies('Green Mudman',300,300,'../img/mobs/Sprite-MUDMAN2.webp'),
 new Ennemies('* Giant Mantis',500,500,'..img/mobs/Sprite-XLMANTIS.webp'),
 new Ennemies('* Giant Flower',500,500,'../img/mobs/Sprite-XLFLOWER.webp'),
 new Ennemies('* Glowing Bat',500,500,'../img/mobs/Sprite-BAT4.webp'),
 new Ennemies('Giant Bat',400,400,'../img/mobs/Sprite-XLBAT.webp'),
 new Ennemies('* Silver Bat',600,600,'../img/mobs/Sprite-BAT5.webp'),
 new Ennemies('** Death',1666,1666,'../img/mobs/Sprite-BOSS_XLDEATH.webp'),
 ];

var tmpEnemy = randomEnnemies();
var enemy = new Ennemies(String(tmpEnemy.eName), Number(tmpEnemy.HP), Number(tmpEnemy.constHP), String(tmpEnemy.img));

dispAll();

// data save and reset

function makeSave(){
    localStorage.setItem('damage', data.damage);
    localStorage.setItem('multipl', data.multipl);
    localStorage.setItem('costs', data.costs);
    localStorage.setItem('auto', data.auto);
    localStorage.setItem('money', data.money);
}

function resetAll(){
    localStorage.removeItem('damage');
    localStorage.removeItem('multipl');
    localStorage.removeItem('costs');
    localStorage.removeItem('auto');
    localStorage.removeItem('money');
    localStorage.removeItem('minutes');
    localStorage.removeItem('seconds');

    location.reload();
}

// clicker function

function clickMulti(){
    if(data.money >= data.costs*data.multipl){
        data.money = data.money - data.multipl*data.costs;
        data.multipl = data.multipl*2;
        data.costs = data.costs * data.multipl;
    }
    else{
        alert("You don't have enough clicks ! ");
        return;
    }
    dispAll();
    makeSave();
}

function autoClicks(){
    if(data.damage*data.multipl >= enemy.HP){
      killEnnemie();
    }
    else{
      enemy.HP = enemy.HP - data.damage*data.multipl;
      prc = (enemy.HP*100)/enemy.constHP;
      //console.log('prc : '+String(prc)+'%)');
      document.getElementById("BarHP").style.background = 'linear-gradient(110deg, red '+String(prc)+'%, gray 0%)';
    }
    dispHP();
}

function buyAutoClicks(){
    if(data.auto!=0){
        alert("You already have auto clicks ! ");
        return;
    }
    else{
        if(data.money >= 5000){
            data.money = data.money - 5000;
            autoClicksBuy.innerHTML = 'Buyed ! ';
            data.auto=1;
            dispHP();
            setInterval(autoClicks, 2000);
        }
        else{
            alert("You don't have enough clicks ! ");
            return;
        }
    }
    makeSave();
    dispAll();
}

function upgradeAuto(){
    // soon
}

// gestion des ennemies :

function ennemiesDamage(){
    if((data.damage*data.multipl)<enemy.HP){
        enemy.HP = enemy.HP - data.damage*data.multipl;
        prc = (enemy.HP*100)/enemy.constHP;
        //console.log('prc : '+String(prc)+'%)');
        document.getElementById("BarHP").style.background = 'linear-gradient(110deg, red '+String(prc)+'%, gray 0%)';
    }
    else{
      killEnnemie();
    }
    makeSave();
    dispAll();

}

function killEnnemie(){
    data.money = data.money + 50;
    delete enemy;
    tmpEnemy = randomEnnemies();
    enemy = new Ennemies(String(tmpEnemy.eName), Number(tmpEnemy.HP), Number(tmpEnemy.constHP), String(tmpEnemy.img));
    document.getElementById("BarHP").style.background = 'linear-gradient(110deg, red 100%, gray 0%)';
    dispAll();
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEnnemies(){
    var tmp = Number(randomInt(0,Number(enemyDict.length-1)));
    //console.log(tmp);
    return enemyDict[tmp];
}

// Timer //

StartTimer();

function StartTimer(){
  if(data.minutes>=30){
    document.getElementById('time').style.color='red';
  }
  else{
    timerInter=setInterval(Timer,1000);
  }
  if(data.minutes>=10){
    if(data.seconds>=10){
      time.innerHTML = String(data.minutes)+':'+String(data.seconds);
    }
    else{
      time.innerHTML = String(data.minutes)+':0'+String(data.seconds);
    }
  }
  else{
    if(data.seconds>=10){
      time.innerHTML = '0'+String(data.minutes)+':'+String(data.seconds);
    }
    else{
        time.innerHTML = '0'+String(data.minutes)+':0'+String(data.seconds);
    }
  }
}
function Timer(){
  data.seconds=data.seconds+1;
  if(data.seconds>=60){
    data.seconds = data.seconds - 60;
    data.minutes = data.minutes + 1;
  }

  if(data.minutes>=10){
    if(data.seconds>=10){
      time.innerHTML = String(data.minutes)+':'+String(data.seconds);
    }
    else{
      time.innerHTML = String(data.minutes)+':0'+String(data.seconds);
    }
  }
  else{
    if(data.seconds>=10){
      time.innerHTML = '0'+String(data.minutes)+':'+String(data.seconds);
    }
    else{
        time.innerHTML = '0'+String(data.minutes)+':0'+String(data.seconds);
    }
  }

  if(data.minutes>=30){
    clearInterval(timerInter);
    document.getElementById('time').style.color='red';
  }

  localStorage.setItem('minutes',data.minutes);
  localStorage.setItem('seconds',data.seconds);
}
