$(function() {
    // 적응형
    var wd = $(window).width();
    if(wd > 0 && wd < 1280) {
        let userAgent = navigator.userAgent;

        let smartPhone = ['iphone', 'ipad', 'android'];
        for(let i in smartPhone) {
            if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhone[i]))) {
                location = 'https://absolutelyfullycapable.github.io/iab-studio-m/'
            }
        }
    }

    // swiper 플러그인
    var news_swiper = new Swiper('.news-container', {
        slidesPerView:2,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

    // 마우스휠 플러그인
    $('body').on("mousewheel", function(event, delta){
        if(delta >= 0) {
          $('header').removeClass('fade');
        } else if(delta < 0){
          $('header').addClass('fade');
        }
    });

    // #go_to_top 누르면 화면 제일 위로 가기
    $('#go_to_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1100);
        $('header').removeClass('fade');
      });

    // 스크롤 시 나타나는 애니메이션
    $(window).scroll(function() {
        var w_scroll = $(window).scrollTop(),
            info = $('#info').offset().top,
            info_txt = $('#info .info_txt .txt1').offset().top - $(window).height(),
            work1 = $('#works .gallery').offset().top - $(window).height(),
            work2 = $('#works .gallery li').eq(3).offset().top - $(window).height(),
            work3 = $('#works .gallery li').eq(6).offset().top - $(window).height(),
            info_title1 = $('.info_title1').offset().top,
            fin = $('#fin').offset().top - $(window).height(),
            fin_txt = $('.fin_txt').offset().top;

        // 스크롤 시 #title 애니메이션
        if(w_scroll > 100) {
            $('.main').addClass('hide');
            $('#video').addClass('hide');
        } else {
            $('.main').removeClass('hide');
            $('#video').removeClass('hide');
        }
  
        // #info 부분까지 스크롤 했을 때 #go_to_top 아이콘 나타남
        if(info < w_scroll) {
            $('#go_to_top').stop().animate({opacity: 1}, 500);
        } else {
            $('#go_to_top').stop().animate({opacity: 0}, 500);
        }

        // .info_txt .txt1 부분까지 스크롤 했을 때 #learn_more 아이콘 나타남 + video 투명도 0
        if(info_txt < w_scroll) {
            $('#learn_more').animate({left: 30}, 500);
        } else {
            $('#learn_more').stop(1,1).animate({left: -120}, 500);
        }
  
        // .gallery까지 스크롤 했을 때 사진 애니메이션
        if(w_scroll > work1) {
          $('#works ul li').eq(0).addClass('showing');
          $('#works ul li').eq(1).addClass('showing');
          $('#works ul li').eq(2).addClass('showing');
        } else {
          $('#works ul li').eq(0).removeClass('showing');
          $('#works ul li').eq(1).removeClass('showing');
          $('#works ul li').eq(2).removeClass('showing');
        }

        if(w_scroll > work2) {
            $('#works ul li').eq(3).addClass('showing');
            $('#works ul li').eq(4).addClass('showing');
            $('#works ul li').eq(5).addClass('showing');
            $('video').css('opacity', 0);
          } else {
            $('#works ul li').eq(3).removeClass('showing');
            $('#works ul li').eq(4).removeClass('showing');
            $('#works ul li').eq(5).removeClass('showing');
            $('video').css('opacity', 1);
          }

          if(w_scroll > work3) {
            $('#works ul li').eq(6).addClass('showing');
            $('#works ul li').eq(7).addClass('showing');
            $('#works ul li').eq(8).addClass('showing');
          } else {
            $('#works ul li').eq(6).removeClass('showing');
            $('#works ul li').eq(7).removeClass('showing');
            $('#works ul li').eq(8).removeClass('showing');
          }
  
        // #fin 영역까지 가면 .box 나타나는 애니메이션, #video 투명도 조절
        if(w_scroll >= fin - 300) {
          $('.info_title2 .box').addClass('ta_da');
          $('#video').css('opacity', 0);
        } else {
          $('.info_title2 .box').removeClass('ta_da');
          $('#video').css('opacity', 1);
        }

        // .fin_txt 영역까지 가면 #learn_more 아이콘 사라짐
        if(w_scroll > fin_txt) {
            $('#learn_more').addClass('hidden');
        } else {
            $('#learn_more').removeClass('hidden');
        }
    });

    // works 호버 애니메이션
    $('.gallery li').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    // horizontal scroll
    const spaceHolder = document.querySelector('.space_holder');
    const horizontal = document.querySelector('.horizontal');
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    
    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
      return objectWidth - vw + vh + 20;
    }
    
    window.addEventListener('scroll', () => {
      const sticky = document.querySelector('.sticky');
      horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    });
    
    window.addEventListener('resize', () => {
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });
});