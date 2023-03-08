

function mobile(){
    $('.navMain>li>a').on('click',function(){
        
        $(this).siblings('.sub').slideToggle();
        $(this).parent().siblings().find('.sub').slideUp();
                
        $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
                
                
    });
    // 아코디언메뉴
    
    
    
    $('.navBtn').on('click',function(){
            
        $('nav').stop().animate({
            'left' : 0
        })
        
        
    });
    
    $('nav .close').on('click',function(){
    
    $('nav').stop().animate({
        'left' : '-100%'
    });
        
        
    });
    // nav 버튼
    
    $('.searchBtn').on('click',function(){
        $(this).toggleClass('on');
        $('form').stop().slideToggle().css({
            'display' : 'flex'
        });
    });

    $('.noTxt').slick({
        'autoplay' : true,
        'autoplaySpeed' : 5000,
        'arrows' : false,
        'vertical' : true
    });

} //모바일에서 실행될 것

function tablet(){} //태블릿에서 실행될 것

function pc(){} //pc에서 실행될 것

function common(){
    $('.btnBox').children().on('click',function(){
        $(this).css({
            'backgroundColor' : '#03b2a8',
            'color' : '#fff',
            'fontWeight' : 'bold',
            'border' : 'none'
        }).siblings().css({
            'backgroundColor' : 'transparent',
            'color' : '#000',
            'fontWeight' : 'normal',
            'borderBottom' : '1px solid #777'
        });
    
        let i = $(this).index();
    
        $('.bookBox').children().eq(i).css({
            'display' : 'flex'
        }).siblings().css({
            'display' : 'none'
        });
    });
    
    
    $('.ad').slick({
        'dots' : true,
        'autoplay' : true,
        'autoplaySpeed' : 4000,
        'arrows' : false
    
    });
    


} //pc나 모바일 구분없이 돌아가는 것

common();


let winWidth = $(window).width(); //브라우저 너비값
                //window.innerwidth; 

if(winWidth < 1024){
    mobile();
}else{
    pc();
}


//리사이징 했을 때

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

//반응형 세팅