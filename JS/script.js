window.onload = function () {
    init();
   
};

function init() {
    console.log('init fired');
    //alert("ALERT");
}
    
$(function(){
    $('#simple-menu').sidr();
    $(".navclass").fadeIn(5000).removeClass('hidden');
    $(".textlogo").fadeIn(5000).removeClass('hidden');
    console.log('animation');
    
 console.log('fired');
});

  $(window).scroll(function() {

    if ($(this).scrollTop()>400)
     {
        $('.video-foreground').fadeOut();
     }
    else
     {
      $('.video-foreground').fadeIn();
     }
 });
    
$(".flip").flip({
  trigger: 'hover'
});

	function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    console.log("worked");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}