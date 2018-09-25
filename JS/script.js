window.onload = function () {
    init();

};

function init() {
    console.log('init fired');
    //alert("ALERT");
}

$(function () { //OnLoad Function
    $('#simple-menu').sidr();
    $(".navclass").fadeIn(5000).removeClass('hidden');
    $(".textlogo").fadeIn(5000).removeClass('hidden');
    console.log('animation');
    console.log('fired');
    
    $(".owl-carousel").owlCarousel({
        
    loop:true,
    margin:10,
    items:3,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        750:{
            items:3,
            nav:false
        }
    }
        
    });


    //for blog next/back pages VVVV

    var $el = $("#wrap > div");
    var pageSize = 8; //number of elements per page

    $el.slice(0, pageSize).css({
        background: 'black',
        display: 'block'
    });
    $el.slice(pageSize, $el.length).css({
        background: 'black',
        display: 'none'
    });

    function addSlice(num) {
        return num + pageSize;
    }

    function subtractSlice(num) {
        return num - pageSize;
    }

    var slice = [0, pageSize];

    $('.next').click(function () {
        if (slice[1] < $el.length) {
            slice = slice.map(addSlice);
        }
        showSlice(slice);

        console.log(slice);

        $(".pagenum").html(slice[1] / pageSize);

        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;

    });

    $('.prev').click(function () {
        if (slice[0] > 0) {
            slice = slice.map(subtractSlice);
        }
        showSlice(slice);

        console.log(slice);

        $(".pagenum").html(slice[1] / pageSize);

        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;

    });

    function showSlice(slice) {
        $el.css('display', 'none');
        $el.slice(slice[0], slice[1]).css('display', 'block');
    }
});

$(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
        $('.video-foreground').fadeOut();
    } else {
        $('.video-foreground').fadeIn();
    }
});

$(function () {
    $(".flip").flip({
        trigger: 'click'
    });
});


function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    console.log("worked");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
