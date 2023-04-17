function mobile(){}

function pc(){
    var currentDate;

var minutes = 2;
var seconds = 56;
var counter = 0;


let runningTime = function(){
    counter++;
    var minutesTimeSpan = counter * 1000;
    currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + minutesTimeSpan);
    countDownDate = currentDate.getTime();
    refreshTime();
}

var timePlay = setInterval(runningTime, 1000);

function refreshTime() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateDOM(minutes, seconds);
}

function updateDOM(minutes, seconds) {

    if ( minutes.toString().length == 2 ) {
        document.querySelector(".leftM").innerHTML = minutes.toString().split("")[0];
        document.querySelector(".rightM").innerHTML = minutes.toString().split("")[1];
    } else {
        document.querySelector(".leftM").innerHTML = "0";
        document.querySelector(".rightM").innerHTML = minutes.toString();
    }

    if ( seconds.toString().length == 2 ) {
        document.querySelector(".leftS").innerHTML = seconds.toString().split("")[0];
        document.querySelector(".rightS").innerHTML = seconds.toString().split("")[1];
    } else {
        document.querySelector(".leftS").innerHTML = "0";
        document.querySelector(".rightS").innerHTML = seconds.toString();
    }
}

clearInterval(timePlay);


let switches =  true;

$('.psBtn').click(function(){
    switches = !switches;

    if(switches == true){
        $('.play').show();
        $('.stop').hide();
        $('.round').css({'animation-play-state' : 'paused'});
        clearInterval(timePlay);

    }else{
        $('.play').hide();
        $('.stop').show();
        $('.round').css({'animation-play-state' : 'running'});
        timePlay = setInterval(runningTime,1000);

    }

});

$('.heart').click(function(){
    switches = !switches;

    if(switches == true){
        $('.heartG').show();
        $('.heartP').hide();


    }else{
        $('.heartG').hide();
        $('.heartP').show();

    }

});

$('.sound').click(function(){
    switches = !switches;

    if(switches == true){
        $('.soundO').show();
        $('.soundC').hide();


    }else{
        $('.soundO').hide();
        $('.soundC').show();

    }

});

$('.repeat').click(function(){
    switches = !switches;

    if(switches == true){
        $('.reO').show();
        $('.reC').hide();


    }else{
        $('.reO').hide();
        $('.reC').show();

    }

});

$('.shuffle').click(function(){
    switches = !switches;

    if(switches == true){
        $('.shuC').show();
        $('.shuO').hide();


    }else{
        $('.shuC').hide();
        $('.shuO').show();

    }

});
}


let winWidth = $(window).width(); //브라우저 너비값
                //window.innerwidth; 

if(winWidth < 1024){
    mobile();
}else{
    pc();
}

$(window).resize(function(){
    let winWidth2 = $(window).width();

    if(winWidth2 < 1024){
        mobile();
    }else{
        setTimeout(function(){
            location.reload(); //새로고침
        }, 500);
        
        pc();
    }
});

