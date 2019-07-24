var wakey = 7;
var noon = 12;
var lunchTime = 13;
var napTime = lunchTime + 2;
var blessTime= -1;
var evening = 17;


var showCurrentTime = function(){
    var clock = document.getElementById('clock');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
     
    //Setting hours
    if(hours>=noon){
        meridian = "PM";
    }
    if(hours>noon){
        hours = hours - 12;
    }

    //Setting Minutes
    if(minutes<10){
        minutes = "0" + minutes;
    }

    if(seconds<10){
        seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";


    clock.innerText = clockTime;

};


var updateClock = function(){
    var tim = new Date();
    var time = tim.getHours();
    var event;
    var image;

    var message = document.getElementById('times');
    var angelImage = document.getElementById('angelicImage');

    if(time == blessTime){
        event = "Pray for me!";
        image = "https://secure.img1-fg.wfcdn.com/im/83755675/resize-h600-w600%5Ecompr-r85/4185/41854493/Kneeling+Praying+Angel+Religious+Outdoor+Garden+Statue.jpg";
    }
    else if(time == wakey){
        event = "Time to wake up !!";
        image = "https://www.mygardengifts.com/ProductImages/cherub-statues/10072.jpg";
    }
    else if(time == lunchTime){
        event = "Lunchtime Sunny!!";
        image = "https://cache.desktopnexus.com/thumbseg/2461/2461391-bigthumbnail.jpg";
    }
    else if(time == napTime){
        event = "Time for a nap! Sweet Dreams!!";
        image = "https://cdn.pixabay.com/photo/2017/11/12/17/17/angel-2943175_1280.jpg";
    }
    else if(time == noon){
        event = "Good Noon! How's Your Day?";
        image = "https://images-na.ssl-images-amazon.com/images/I/51TDf2zw%2BYL._SX425_.jpg";
    }
    else if(time == noon + 1){
        event = "Good Afternoon!! What Are you Upto?";
        image = "https://www.catholicfaithstore.com/Inventory/CatholicFaith/10/African-American-Garden-Angel-Female-Statue-24-75_16901.jpg";
    }
    else if(time >= evening){
        event = "Good Evening!! have Fun!";
        image = "https://ii.designtoscano.com/fcgi-bin/iipsrv.fcgi?FIF=/images/toscano/source/DB16_1.tif&wid=480=&cvt=jpeg";
    }
    else{
        event = "Hello! Good Day!!";
        image = "https://cache.desktopnexus.com/thumbseg/2461/2461391-bigthumbnail.jpg"
    }
   
    console.log(event);
    message.innerText = event;
    angelImage.src = image;

    showCurrentTime();
};
updateClock();


var oneSec = 1000;
setInterval(updateClock, oneSec);

var blessButton = document.getElementById('blessMeButton');


var blessEvent = function(){
    if(blessTime<0){
        blessTime = new Date();
        blessTime = blessTime.getHours();
        blessButton.innerText() = "Amen!";
        blessButton.style.backgroundColor = "#fff";
    }
    else{
        blessTime = -1;
        blessButton.innerText = "Bless Me!";
        blessButton.style.backgroundColor = "#239";
    }
};


blessButton.addEventListener("click", blessEvent);

var wakeUp = document.getElementById('riseup');

var wakeEvent = function(){
    wakey = wakeUp.value;
};

wakeUp.addEventListener("change", wakeEvent);

var lunch = document.getElementById('lunch');

var lunchEvent = function(){
    lunchTime = lunch.value;
};

lunch.addEventListener("change", lunchEvent);

var nap = document.getElementById('down');

var napEvent = function(){
    napTime = nap.value;
};

nap.addEventListener("change", napEvent);


