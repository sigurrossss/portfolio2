        $('.bnCon').slick({
            'arrows' : true,
            'dots' : true,
            'autoplay' : true,
            'autoplaySpeed' : 6000,
            'nextArrow' : '.next',
            'prevArrow' : '.prev',
        }).on('afterChange',function(s,c){


            let crt = c.$slider;
            let currentSlide = $('.bnCon').find(".slick-current");

    let video = currentSlide.children("video").get(0);
    if (video != null) {

        video.currentTime = 0;
        video.play();
    
    }else{
        
        $('.vid').get(0).pause();
       
        

    }
  
            
        

        });

        $('.mainMenu').slick({
            'slidesToShow' : 3,
            'slidesToScroll' : 1,
            'nextArrow' : '.mNext',
            'prevArrow' : '.mPrev'
        });

    $(function() {  
    $('.view')
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

    $('.txtSlide').slick({
        'asNavFor' : '.imgSlide',
        'arrows' : false,
        'dots' : true
    });
    $('.imgSlide').slick({
        'asNavFor' : '.txtSlide',
        'arrows' : false
    });

