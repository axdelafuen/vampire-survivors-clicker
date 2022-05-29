// class ennemies

class Ennemies {
  constructor(eName, HP, constHP, img, dropMoney, dropXP) {
    this.eName = eName;
    this.HP = HP;
    this.constHP = constHP;
    this.img = img;
    this.dropMoney = dropMoney;
    this.dropXP = dropXP;
  }
}

// class Heros

class Heros{
  constructor(hName, dmg, cost, img, levelReq){
    this.hName = hName;
    this.dmg = dmg;
    this.cost = cost;
    this.img = img;
    this.levelReq = levelReq;
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
      if(!localStorage.getItem('xp')){
        this.xp=Number(0);
      }
      else{
        this.xp = Number(localStorage.getItem('xp'));
      }
      if(!localStorage.getItem('level')){
        this.level = Number(1);
      }
      else{
        this.level = Number(localStorage.getItem('level'));
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
    dispLevel();
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


var enemyDict =
[new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-6.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-2.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-3.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-4.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-5.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-2.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-3.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-2.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-3.webp',70,20),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp',70,40),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp',70,40),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp',70,40),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER.webp',60,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER.webp',60,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER-2.webp',60,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER-2.webp',60,40),
 new Ennemies('Giant Mummy',400,400,'../img/mobs/Sprite-XLMUMMY.webp',100,50),
 new Ennemies('Green Mudman',300,300,'../img/mobs/Sprite-MUDMAN2.webp',60,50),
 new Ennemies('Giant Mummy',400,400,'../img/mobs/Sprite-XLMUMMY.webp',100,50),
 new Ennemies('Green Mudman',300,300,'../img/mobs/Sprite-MUDMAN2.webp',60,50),
 new Ennemies('* Giant Mantis',500,500,'../img/mobs/Sprite-XLMANTIS.webp',120,80),
 new Ennemies('* Giant Flower',500,500,'../img/mobs/Sprite-XLFLOWER.webp',120, 80),
 new Ennemies('* Glowing Bat',500,500,'../img/mobs/Sprite-BAT4.webp',110, 80),
 new Ennemies('Giant Bat',400,400,'../img/mobs/Sprite-XLBAT.webp',80, 60),
 new Ennemies('Giant Bat',400,400,'../img/mobs/Sprite-XLBAT.webp',80, 60),
 new Ennemies('* Silver Bat',600,600,'../img/mobs/Sprite-BAT5.webp',130, 100),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Bat',200,200,'../img/mobs/Sprite-BAT1.webp',50,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-6.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-2.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-3.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-4.webp',70,20),
 new Ennemies('Skeleton',300,300,'../img/mobs/Sprite-SKELETON-5.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-2.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-3.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-2.webp',70,20),
 new Ennemies('Zombie',200,200,'../img/mobs/Sprite-ZOMBIE-3.webp',70,20),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp',70,40),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp',70,40),
 new Ennemies('Ghost',300,300,'../img/mobs/Sprite-GHOST.webp',70,40),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Werewolf',300,300,'../img/mobs/Sprite-WEREWOLF.webp',80,30),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Mudman',300,300,'../img/mobs/Sprite-MUDMAN1.webp',90,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER.webp',60,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER.webp',60,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER-2.webp',60,40),
 new Ennemies('Flower',200,200,'../img/mobs/Sprite-FLOWER-2.webp',60,40),
 new Ennemies('Giant Mummy',400,400,'../img/mobs/Sprite-XLMUMMY.webp',100,50),
 new Ennemies('Green Mudman',300,300,'../img/mobs/Sprite-MUDMAN2.webp',60,50),
 new Ennemies('Giant Mummy',400,400,'../img/mobs/Sprite-XLMUMMY.webp',100,50),
 new Ennemies('Green Mudman',300,300,'../img/mobs/Sprite-MUDMAN2.webp',60,50),
 new Ennemies('* Giant Mantis',500,500,'../img/mobs/Sprite-XLMANTIS.webp',120,80),
 new Ennemies('* Giant Flower',500,500,'../img/mobs/Sprite-XLFLOWER.webp',120, 80),
 new Ennemies('* Glowing Bat',500,500,'../img/mobs/Sprite-BAT4.webp',110, 80),
 new Ennemies('Giant Bat',400,400,'../img/mobs/Sprite-XLBAT.webp',80, 60),
 new Ennemies('Giant Bat',400,400,'../img/mobs/Sprite-XLBAT.webp',80, 60),
 new Ennemies('* Silver Bat',600,600,'../img/mobs/Sprite-BAT5.webp',130, 100),
 ];

var tmpEnemy = randomEnnemies();
var enemy = new Ennemies(String(tmpEnemy.eName), Number(tmpEnemy.HP), Number(tmpEnemy.constHP), String(tmpEnemy.img), Number(tmpEnemy.dropMoney), Number(tmpEnemy.dropXP));

var herosDict = [
  new Heros('Antonio', 1, 5000, './img/heros/Sprite-Antonio.webp', 1),
  new Heros('Imelda',3,7500,'./img/heros/Sprite-Imelda.webp',5),
  new Heros('Pasqualina',10, 10000, './img/heros/Sprite-Pasqualina.webp',15),
  new Heros('Gennaro', 15, 13000,'./img/heros/Sprite-Gennaro.webp',20),
  new Heros('Arca', 18, 15000, './img/heros/Sprite-Arca.webp',25)
]

dispAll();

// data save and reset

function makeSave(){
    localStorage.setItem('damage', data.damage);
    localStorage.setItem('multipl', data.multipl);
    localStorage.setItem('costs', data.costs);
    localStorage.setItem('money', data.money);
}

function resetAll(){
    localStorage.removeItem('damage');
    localStorage.removeItem('multipl');
    localStorage.removeItem('costs');
    localStorage.removeItem('money');
    localStorage.removeItem('minutes');
    localStorage.removeItem('seconds');
    localStorage.removeItem('level');
    localStorage.removeItem('xp');
    localStorage.removeItem('constXP');

    location.reload();
}

// clicker function
// raise damage (nom a changer)
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

// gestion des héros

function DispHerosShop(){
  var dispTmp = String();
  for(var i=0 ; i<herosDict.length ; i++){
    dispTmp = dispTmp+'<span> <img src="'+herosDict[i].img+'" alt=""> '+herosDict[i].hName+' : ('+herosDict[i].dmg+' / sec) (cost : '+herosDict[i].cost+') <button onclick=""> <span id="Buy'+herosDict[i].hName+'"> Buy ! </span> </button> / Level Required : '+herosDict[i].levelReq+' </span>'
  }
  //console.log(dispTmp);
  shopSection.innerHTML = dispTmp;
}
DispHerosShop();
/*
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
*/

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
    data.money = data.money + enemy.dropMoney;
    GainXP();
    delete enemy;
    tmpEnemy = randomEnnemies();
    enemy = new Ennemies(String(tmpEnemy.eName), Number(tmpEnemy.HP), Number(tmpEnemy.constHP), String(tmpEnemy.img), Number(tmpEnemy.dropMoney), Number(tmpEnemy.dropXP));
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
    enemyDict.push(new Ennemies('** Death',1666,1666,'../img/mobs/Sprite-BOSS_XLDEATH.webp',300))
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
    enemyDict.push(new Ennemies('** Death',1666,1666,'../img/mobs/Sprite-BOSS_XLDEATH.webp',300))
  }

  localStorage.setItem('minutes',data.minutes);
  localStorage.setItem('seconds',data.seconds);
}

// XP BAR

function dispLevel(){
  Level.innerHTML = 'Level '+String(data.level);
  var LvlPrc = (data.xp*100)/(data.level*500);
  LvlPrc = Math.round(LvlPrc * 10) / 10;
  Prct.innerHTML = '('+String(LvlPrc)+'%)';
  document.getElementById("BarLevel").style.background = 'linear-gradient(90deg, lightgreen '+String(LvlPrc)+'%, gray 0%)';
}

function GainXP(){
  data.xp = data.xp + enemy.dropXP;

  if(data.xp>=data.level*500){
    LevelUP();
  }

  dispLevel();

  localStorage.setItem('level', data.level);
  localStorage.setItem('xp', data.xp);
}

function LevelUP(){
  data.xp = 0;
  data.level = data.level + 1;
}
