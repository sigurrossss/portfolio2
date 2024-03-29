

$('.menuBtn').on('click',function(){
    $(this).toggleClass('on');
    $('.overlayMenu').toggleClass('open');
    
});//menuBtn.click

$('.menu li').on('mouseover',function(){

    let i = $(this).index();
    $('.menuImg div').stop().fadeOut(1000);
    $('.menuImg div').eq(i).stop().fadeIn(1000);
    $('.menuImg div').eq(i).css({'transform' : 'scale(1.1)'})

});

 // we need to set this here for now.
 var marquee;

 // first, let's grab the element we're going to move around
 var marquee_el = document.querySelector( '.grid.marquee' );
 var children = marquee_el.querySelectorAll( '.cell');

 // the key here is not to animate all of the cells in the grid, which might be products or what have you; we have a grid constrained by a container, so we can just translate the entire grid and only the part of the grid that fits into the container will be visible anyway
 function createMarquee(){
   
   // just to be doubly sure there's an animation method...
   if ('animate' in marquee_el && typeof marquee_el.animate === 'function') {
     
     // we're going to recreate the marquee animation when the viewport is resized
     // so get rid of any existing animation first
     if( typeof marquee !== 'undefined' ) marquee.cancel();

     // set this dynamically, so the thing will gracefully degrade to a typical grid of items
     marquee_el.style.whiteSpace = 'nowrap';

     // create a variable for the distance by which the grid element will be transformed
     var displacement = 0;

     // the width of all the elements in the marquee
     // it's important to tot up the child element widths because if overflow is hidden,
     // the clientWidth of the grid_to_animate element will be that of the parent element
     for ( var j = 0; j < children.length; ++j ) displacement += children[j].clientWidth;

     // crucial: subtract the width of the container
     // take the opportunity to round the displacement value down to the nearest pixel
     // the browser may thank you for this by not blurring the shit out of your text 
     displacement = (displacement - marquee_el.clientWidth) << 0;

     // by using the variable 'marquee' we created in the parent scope,
     // we can easily use the reference to pause/cancel the animation later if necessary
     marquee = marquee_el.animate([
       // these are your keyframes, if you are familiar with the CSS syntax
       // so your 'from' or '0%' keyframe translates to 'offset: 0'
       // 'to'/'100%' translates to 'offset: 1'
       // and anything in betwen like '54%' will be 'offset: .54'
       { transform: 'matrix(1, 0.00, 0.00, 1, 0, 0)', offset: 0 },
       { transform: 'matrix(1, 0.00, 0.00, 1,' + -displacement + ', 0)', offset: 1 }
       // you don't have to use matrix, I just like it
     ],
     {
       // animation-duration = 1 second for each element in marquee
       // arbitrary decision
       duration: children.length * 4e3,

       // could be 'ease', 'cubic-bezier(.4,0,.2,1)', etc.
       easing: 'linear',

       // useful if you don't want the animation to start until your content has loaded from, say, a REST API and you want to speculate a reasonable time for that to take
       delay: 0,

       // kind of crucial for a marquee...
       iterations: Infinity,

       // invert animation after completion, so it scrolls backwards */
       direction: 'alternate',

       // you would use this if your animation is set to occur only a finite number of times, and you wanted the animated element to finish at the end keyframe, rather than the first keyframe
       fill: 'forwards'
     });
   } 
 }


 // quick check for the WAAPI method
 // you could also do if (typeof grid_to_animate.animate !== 'undefined')
 // but this is cleaner in my opinion
 if ('animate' in marquee_el && typeof marquee_el.animate === 'function') {
   
   // okay, let's fire up the marquee!
   createMarquee();

   // now for the playing/pausing
   marquee_el.addEventListener('mouseenter', pauseMarquee, false);
   marquee_el.addEventListener('mouseleave', playMarquee, false);
   
   // and resizing
   window.addEventListener('resize', debounce( createMarquee ), false);
   
 } else {
     // let's say hello to those using Safari
     // or indeed users of IE, not-recently-updated FF, very old Chrome, old Opera, etc.
     document.querySelector('h1').innerHTML = 'Your browser does not appear to <br> support the Web Animation API';
     document.querySelector('h2').innerHTML = 'So you see a grid of items like this';
 }

 // pretty self-explanatory
 function playMarquee(){
   if( marquee.playState === 'paused' ) marquee.play();
 }
 
 // pretty self-explanatory
 function pauseMarquee(){
   if( marquee.playState === 'running' ) marquee.pause();
 }

 // a debouncing function using requestAnimationFrame
 // this is just an easy-to-use wrapper I like to use for event handlers
 function debounce(func){
   var scheduled, context, args;
   return function(){
     context = this; args = [];
     for(var i = 0; i < arguments.length; ++i) args[i] = arguments[i];
     !!scheduled && window.cancelAnimationFrame(scheduled);
     scheduled = window.requestAnimationFrame(function(){
       func.apply(context, args);
       scheduled = null;
     });
   }
 }


 $(function() {  
  $('.scentBtn')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });

  
 $(function() {  
  $('.productBtn')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });


  let scrollConTop = $('.scrollCon').offset().top;
  $(window).scroll(function(){


    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if(scrollTop>=800){

        $('.main2Txt').css({'opacity' : 1 - scrollTop*0.0006});
    }else{

        let main2TxtOpacity = $('.main2Txt').css('opacity');
        main2TxtOpacity = parseInt(main2TxtOpacity);
        $('.main2Txt').css({'opacity' : main2TxtOpacity + scrollTop*0.0006});

    }

    if(scrollTop>=2114){
        $('.mainTxt').addClass('stop');

    }else{
        $('.mainTxt').removeClass('stop');
    }
  





  if (scrollTop <= scrollConTop) {
    $('.scroll').css('position','absolute');
  }else{
    $('.scroll').css({
        'position' : 'fixed',
        'top' : 0
    });
  }

  if(scrollTop >= 11385){
    $('.scroll').css({
        'position' : 'absolute',
        'top' : '3741px'
})
  }



  if (scrollTop >= 7434&& scrollTop <=9500) {

      $('.elem01').css('transform',`scale(${(13) + scrollTop * -0.001})`);
  }

  if(scrollTop >=9500){
    $('.elem01').css({'transform' : 'scale(1)'})
  }



  if (scrollTop >= 7600 && scrollTop <= 9640) {
      $('.elem04').css('transform',`scale(${(10.633) + scrollTop * -0.001})`);
  }

  if(scrollTop >= 9740){
      $('.elem04').css('transform',`scale(1)`);
  }



  if (scrollTop >= 8300 && scrollTop <= 10425) {
      $('.elem08').css('transform',`scale(${(11.433) + scrollTop * -0.001})`);
  }

  if(scrollTop >= 10425){
      $('.elem08').css('transform',`scale(1)`);
  }




  if (scrollTop >= 8400 && scrollTop <= 10531) {
      $('.elem07').css('transform',`scale(${(11.533) + scrollTop * -0.001})`);
  }

  if(scrollTop >= 10531){
      $('.elem07').css('transform',`scale(1)`);
  }


  if (scrollTop >= 8200 && scrollTop <= 10531) {
      $('.elem02').css('transform',`scale(${(11.533) + scrollTop * -0.001})`);
  }
  if(scrollTop >= 10531){
      $('.elem02').css('transform',`scale(1)`);
  }

  if (scrollTop >= 8400 && scrollTop <= 10732) {
      $('.elem03').css('transform',`scale(${(11.733) + scrollTop * -0.001})`);
  }

  if(scrollTop >= 10732){
      $('.elem03').css('transform',`scale(1)`);
  }


  if (scrollTop >= 8400 && scrollTop <= 10733) {
      $('.elem05').css('transform',`scale(${(11.733) + scrollTop * -0.001})`);
  }

  if(scrollTop >= 10733){
      $('.elem05').css('transform',`scale(1)`);
  }

  if (scrollTop >= 8500 && scrollTop <= 10833) {
      $('.elem06').css('transform',`scale(${(11.833) + scrollTop * -0.001})`);
  }
  if(scrollTop >= 10833){
      $('.elem06').css('transform',`scale(1)`);
 }

// 9, 10, 11 스크롤값, 스케일값 조정해서 자연스럽게 만들기

 if (scrollTop >= 8500 && scrollTop <= 10933) {
    $('.elem09').css('transform',`scale(${(11.833) + scrollTop * -0.001})`);
}
if(scrollTop >= 10933){
    $('.elem09').css('transform',`scale(1)`);
}
if (scrollTop >= 8550 && scrollTop <= 10933) {
    $('.elem10').css('transform',`scale(${(11.833) + scrollTop * -0.001})`);
}
if(scrollTop >= 10933){
    $('.elem10').css('transform',`scale(1)`);
}

if (scrollTop >= 8700 && scrollTop <= 11093) {
    $('.elem11').css('transform',`scale(${(11.833) + scrollTop * -0.001})`);
}
if(scrollTop >= 11093){
    $('.elem11').css('transform',`scale(1)`);
}



    
});
  