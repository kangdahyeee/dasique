$(function () {
    // ====================================== logo, btnTop 클릭시 최상단
    $(".logo, .btnTop").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });

    // ====================================== 스크롤 500px 이상 내릴때 btnTop 나타남 
    $(window).scroll(() => {
        if ($(this).scrollTop() > 500) {
            $(".btnTop").fadeIn();
        } else {
            $(".btnTop").fadeOut();
        }
    });


    // ====================================== header menu 
    // 메인 메뉴가 클릭되었는지 여부를 추적하는 새로운 변수 추가
    let isMainMenuClicked = false;

    function updateStyles(isScrolled, isHovered = false) {

        let headerStyles = {
            'height': isHovered || isScrolled || isMainMenuClicked ? '160px' : '',
            'width': '100%',
            'background-color': isScrolled || isMainMenuClicked ? 'rgba(255, 255, 255, 0.8)' : (isHovered ? 'rgba(255, 255, 255, 0.8)' : '')      
        };

        $("header").css(headerStyles);
    }

    $(function () {
        // 변수 추가
        let isHovered = false;

        $(window).scroll(() => {
            let scrollTop = $(window).scrollTop();
            let isScrolled = scrollTop > 160;

            let headerStyles = {
                'height': isScrolled ? '160px' : '',
                'width': '100%',
                'background-color': isScrolled ? 'rgba(255, 255, 255, 0.8)' : ''
            };
            $("header").css({
                ...headerStyles,
                'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
            });
            updateStyles(isScrolled, isHovered);
        });
        // 대메뉴에 마우스 오버 및 아웃 이벤트 처리
        $("ul#menu, .headerInner").hover(
            () => {
                $(".submenu, .smenu_bar").stop().slideDown('fast');
                isHovered = true; // 마우스가 올라갔음을 표시
                updateStyles($(window).scrollTop() > 160, isHovered);
            },
            () => {
                $(".submenu, .smenu_bar").stop().fadeOut('fast');
                isHovered = false; // 마우스가 나갔음을 표시
                updateStyles($(window).scrollTop() > 160, isHovered);
            }
        );
        
        $("ul#menu").slicknav();
    });


    $(".submenu>li>a").mouseenter(function () {
        $(this).addClass("submenu-hovered");
        $(this).css({
            "color": "#999"
        });
    });

    $(".submenu>li>a").mouseleave(function () {
        $(this).removeClass("submenu-hovered");
        $(this).css({
            "color": ""
        });
    });

    $(window).scroll(updateStyleOnScroll);

    function updateStyleOnScroll() {
        let scrollTop = $(window).scrollTop();
        let isScrolled = scrollTop > 160;

        let headerStyles = {
            'height': isScrolled ? '160px' : '',
            'width': '100%',
            'background-color': isScrolled ? 'rgba(255, 255, 255, 0.8)' : '',

        };

        $("header").css({
            ...headerStyles,
            'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
        });

        updateStyles(isScrolled);
    }


// ====================================== 신제품 (수정필요)

$(".inner_new li").click(function () {
    let $this = $(this);
    let index = $this.index();
    $this.addClass("active");
    $this.siblings(".inner_new li.active").removeClass("active");

    let $wrap = $this.closest(".inner_new");
    let $current = $wrap.find("> .tabs > .tab.active");
    let $post = $wrap.find("> .tabs > .tab").eq(index);

    $current.removeClass("active");
    $post.addClass("active");

    $(".slider").slick("setPosition");
});


});

//toggle
function openNav(){
    document.getElementById("myNav").style.width = "50%";
}
// close
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}


