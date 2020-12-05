$(function() {
    // 적응형
    var wd = $(window).width();
    if(wd > 0 && wd < 1280) {
        let userAgent = navigator.userAgent;

        let smartPhone = ['iphone', 'ipad', 'android'];
        for(let i in smartPhone) {
            if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhone[i]))) {
                location = 'https://absolutelyfullycapable.github.io/iab-studio-m/about.html'
            }
        }
    }

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
            history = $('#history').offset().top;

        // #go_to_top 아이콘 나타남
        if(w_scroll >= 300) {
            $('#go_to_top').stop().animate({opacity:1}, 500);
        } else {
            $('#go_to_top').stop().animate({opacity:0}, 500);
        }

        // history section 애니메이션
        if(w_scroll >= history - 300) {
            $('.history_title').addClass('active');
        } else {
            $('.history_title').removeClass('active');
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