let w = [];
let f = [];
let number = 1;
let userguess = 0;
let winscount= 0;
let lossescount = 0;

let htmluserguess = $("#scorenumber");
let htmlnumber = $("#randomnumber");
let htmlwinscount = $("#winscount");
let htmllossescount = $("#lossescount");
let lastgame = $('#yourlastgame');


let gem1 =  $("#gem1");
let gem2 =  $("#gem2");
let gem3 =  $("#gem3");
let gem4 =  $("#gem4");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function getweights(){
    for(i = 1; i < 5; i++){
        w[i] =  getRandomInt(1, 10);
    };
};

function getfactors(){
    for(i = 1; i < 5; i++){
        f[i] =  getRandomInt(1, 5);
    };
};

function getnumber(){
    for(i = 1; i < 5; i++){
        if(i == 1){
            number--;
        }
        number = number +  w[i]*f[i];
    };
    return number;
};
function winreboot(){
    alert('You won bro!')
    winscount++;
    htmlwinscount.text(winscount);
    lastgame.text('You won bro');

    htmluserguess.text(0);
    number = 1;
    userguess = 0;
    getweights();
    getfactors();

    number = getnumber();
    htmlnumber.text(number);  
};

function losereboot(){
    alert('You are loser bro!')
    lossescount++;
    htmllossescount.text(lossescount);
    lastgame.text('You are loser bro');

    htmluserguess.text(0);
    number = 1;
    userguess = 0;
    getweights();
    getfactors();

    number = getnumber();
    htmlnumber.text(number);
}

function checknumber(){
    if(userguess < number){
        return true;
    } 
    if(userguess == number){
        winreboot();
        return true;
    } else{
        return false;
    };
};


getweights();
getfactors();

number = getnumber();
htmlnumber.text(number);

gem1.on('click', function(){
    userguess += w[1];
    htmluserguess.text(userguess);
    if(checknumber()){
        return userguess;
    } else{
        losereboot();
    }
    });

gem2.on('click', function(){
    userguess += w[2];
    htmluserguess.text(userguess);
    if(checknumber()){
        return userguess;
    } else{
        losereboot();
    }
});

gem3.on('click', function(){
    userguess += w[3];
    htmluserguess.text(userguess);
    if(checknumber()){
        return userguess;
    } else{
        losereboot();
    }
});

gem4.on('click', function(){
    userguess += w[4];
    htmluserguess.text(userguess);
    if(checknumber()){
        return userguess;
    } else{
        losereboot();
    }
 });

