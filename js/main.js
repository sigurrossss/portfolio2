

window.onload = function(){

    let svg = document.querySelector('svg');
    svg.classList.add('active');

}

// $(document).ready(function(){

//     $('.svg').addClass('active');

// });





function decodeText(a){
    var text = document.getElementsByClassName('decode-text')[a];
    // debug with
    // console.log(text, text.children.length);

    // assign the placeholder array its places
    var state = [];
    for(var i = 0, j = text.children.length; i < j; i++ ){
        text.children[i].classList.remove('state-1','state-2','state-3');
        state[i] = i;
    }

    // shuffle the array to get new sequences each time
    var shuffled = shuffle(state);

    for(var i = 0, j = shuffled.length; i < j; i++ ){
        var child = text.children[shuffled[i]];
        classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }
}

// send the node for later .state changes
function firstStages(child){
    if( child.classList.contains('state-2') ){   
        child.classList.add('state-3');
    } else if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
    } else if( !child.classList.contains('state-1') ){
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }    
}
function secondStages(child){
    if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
        setTimeout(thirdStages.bind(null, child), 100);
    } 
    else if( !child.classList.contains('state-1') )
    {
        child.classList.add('state-1')
    }
}
function thirdStages(child){
    if( child.classList.contains('state-2') ){
        child.classList.add('state-3')
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Demo only stuff
decodeText(0);
decodeText(1);

// beware: refresh button can overlap this timer and cause state mixups
setInterval(function(){ decodeText(); }, 10000);





$('.wrap>div').on('mousewheel',function(e,d){
    if(d>0){
        let result = $(this).prev().offset().top; //이전 div의 위치
        $('html, body').stop().animate({
            'scrollTop' : result
        });
    }else if(d<0){
        let result = $(this).next().offset().top;
        $('html,body').stop().animate({
            'scrollTop' : result
        });
    }
});



$('nav a').on('click',function(e){
    e.preventDefault();
    let i = $(this).index();

    let destination = $('.Wrap').children().eq(i).offset().top;

    $('html, body').stop().animate({
        'scrollTop' : destination
    }); 
});

$(window).on('scroll',function(){
    let scr = $(window).scrollTop();
    let box2Top = $('.profileWrap').offset().top;
    let box3Top = $('.design1').offset().top;
    let box4Top = $('.design2').offset().top;
    let box5Top = $('.design3').offset().top;
    let box6Top = $('.gallWrap').offset().top;

    console.log(scr);

    if(scr >= 0 && scr < box2Top){
        $('nav a').removeClass('active');
        $('nav a').eq(0).addClass('active');
    }else if(scr >= box2Top && scr < box3Top){
        $('nav a').removeClass('active');
        $('nav a').eq(1).addClass('active');
    }else if(scr >= box3Top && scr < box4Top){
        $('nav a').removeClass('active');
        $('nav a').eq(2).addClass('active');
    }else if(scr >= box4Top && scr < box5Top){
        $('nav a').removeClass('active');
        $('nav a').eq(3).addClass('active');
    }else if(scr >= box5Top && scr < box6Top){
        $('nav a').removeClass('active');
        $('nav a').eq(4).addClass('active');
    }else{
        $('nav a').removeClass('active');
        $('nav a').eq(5).addClass('active');
    }
});



    $('nav div').on('click',function(){
        $(this).toggleClass('active').parent()
            .siblings().children('nav div')
            .removeClass('active');
        });

   