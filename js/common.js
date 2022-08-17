
function init(){

    //  header 
    let headH = $('header').height();
    
    $(window).on('scroll',function(){
        
        let scrollTop = $(window).scrollTop();
        let scrollT = $(window).scroll({top:0})
    
        if(headH < scrollTop){
            $('header').addClass('active');
            $('header h1 > img').attr('src',"./img/logo-vac-nav-bk.png");
        }
        else if(scrollT){
            $('header h1 > img').attr('src',"./img/logo-vac-nav.png");
            $('header').removeClass('active');
        }
        
    });

    //  slide_video
    let data;
    $.ajax({
        url:'js/data.json',
        success:function(data){
            
            let elData = '';

            $.each(data.video,function(k,v){

                elData += `<div class="bn">
                            <video autoplay muted controls loop
                            poster="./img/Dir-Park.png"><source src="${data.video[k].url}" type="video/mp4"></video>

                            <div class="txt">
                                <h2>${data.video[k].tit}</h2>
                                <p>${data.video[k].ja}</p>
                            </div>
                            </div>`;
            });

            $('.video').html(elData);

            $(".slide").slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });

            // $('.slide').on('afterChange', function(e,c){
            //     console.log(c.currentSlide);
            // });
        }
    });

    //  scroll_animation
    $(window).on('scroll',function(){
        scrollTop = $(window).scrollTop();
        let C1 = $('.s2-c1').offset().top;
        let C2 = $('.s2-c2').offset().top;
        let C3 = $('.s3-bg').offset().top;
        let C4 = $('.s4-c1').offset().top;
        let C5 = $('.section5').offset().top;

        if( C1-500 < scrollTop){
            $('.s2-c1 p:nth-of-type(1)').addClass('active');
            $('.s2-c1 p:nth-of-type(2)').addClass('active');
        }if( C2-500 < scrollTop){
            $('.s2-c2 a').addClass('active');
            $('.s2-c2 p').addClass('active');
        }if( C3-500 < scrollTop){
            $('.s3-bg').addClass('active');
        }if( C4-500 < scrollTop){
            $('.s4-c1 > ul a').addClass('active');
        }if( C5-500 < scrollTop){
            $('.section5 > a> div').addClass('active');
        }
        
    });

    //  burger menu
    $('header .burger span').on('click',function(){

        $('.menu').addClass('active')
        $('header').addClass('active')
        $('header h1 > img').attr('src',"./img/logo-vac-nav-bk.png");
    })
}

$(window).on('load',init);


