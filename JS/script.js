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
    console.log('animation')
    
 console.log('fired');
    
          $("#clearbtn").click( function()
           {
             console.log('click/clear'); //clear storage
            localStorage.clear();
              $(".button").css("background-color", "#e11d22")
              $("h1").css("color", "#e11d22")
           }
                               );  
    
    if(localStorage && localStorage.getItem('background'))
        { //check for storage
            var colour = localStorage.getItem('background');
            
            console.log('colour should be' +colour);
            
            $(".button").css("background-color", colour)
            $("h1").css("color", colour)//change css
        }
    
    
$('#inputname').change(function() //when colour changes
{
var col = $(this).val();
    
   // save local storage
var background_colour = $('#inputname').val();
localStorage.setItem('background', background_colour);
    
    $(".button").css("background-color", background_colour)
    $("h1").css("color", background_colour)

}
);   
    
    
     
    
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

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    comsole.log("worked")
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}


function CanvasUpdate(){
var colour = document.getElementById("c").value;
var canvas = document.getElementById("AlbumCanvas");
var input = document.getElementById("inputtitle").value;
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = colour;
ctx.font = "45px Arial Black";
ctx.fillText(input,30,100);

}

function CanvasColour(){
  document.getElementById("c").focus();
  document.getElementById("c").click();
  var colour = document.getElementById("c").value;
  return colour;
}
    
function ShowColour1(){
    
  document.getElementById("CC1").focus();
  document.getElementById("CC1").click();
  var colour = document.getElementById("CC1").value;
  return colour;
    
}

function ChangeColour1(){
    var inputcolour = document.getElementById("CC1").value;
    document.getElementById("head").style.fill = inputcolour;
}

function ShowColour2(){
    
  document.getElementById("CC2").focus();
  document.getElementById("CC2").click();
  var colour = document.getElementById("CC2").value;
  return colour;
    
}

function ChangeColour2(){
    var inputcolour = document.getElementById("CC2").value;
    document.getElementById("eyes").style.fill = inputcolour;
}

function ShowColour3(){
    
  document.getElementById("CC3").focus();
  document.getElementById("CC3").click();
  var colour = document.getElementById("CC3").value;
  return colour;
    
}

function ChangeColour3(){
    var inputcolour = document.getElementById("CC3").value;
    document.getElementById("path0").style.fill = inputcolour;
}



var data = {"total":0,"rows":[]};
		var totalCost = 0;
		
		$(function(){
            
            if(localStorage && window.localStorage.length != 0){
                
                var test1 = localStorage.getItem('data');
                var test2 = localStorage.getItem('tdata');
            
                var testparse = JSON.parse(test1);
                
            }
                
                else{
                    
                console.log("NO LOCAL STORAGE");    
                }
            
			$('#cartcontent').datagrid({
				singleSelect:true
			});
			$('.item').draggable({
				revert:true,
				proxy:'clone',
				onStartDrag:function(){
					$(this).draggable('options').cursor = 'not-allowed';
					$(this).draggable('proxy').css('z-index',10);
				},
				onStopDrag:function(){
					$(this).draggable('options').cursor='move';
				}
			});
			$('.cart').droppable({
				onDragEnter:function(e,source){
					$(source).draggable('options').cursor='auto';
				},
				onDragLeave:function(e,source){
					$(source).draggable('options').cursor='not-allowed';
				},
				onDrop:function(e,source){
					var name = $(source).find('p:eq(0)').html();
					var price = $(source).find('p:eq(1)').html();
					addProduct(name, parseFloat(price.split('£')[1]));
				}
			});
		});
		
		function addProduct(name,price){
			function add(){
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					if (row.name == name){
						row.quantity += 1;
						return;
					}
                    
                
                    
                    
				}
				data.total += 1;
				data.rows.push({
					name:name,
					quantity:1,
					price:price
				});
                
                var jsonstring = JSON.stringify(data);
                
                console.log(data);
                
                localStorage.setItem('data', jsonstring);
                
                
			}
			add();
			totalCost += price;
			$('#cartcontent').datagrid('loadData', data);
			$('div.cart .total').html('Total: £'+totalCost);
            
            var jsonstring = JSON.stringify(data);
                
            console.log(data);
                
            localStorage.setItem('data', jsonstring);
            localStorage.setItem('tdata', totalCost);
		}

$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});

$(function(){
    
    var getjson = localStorage.getItem('data');
    var totjson = localStorage.getItem('tdata');
    
   var parsejson = JSON.parse(getjson);
    
    console.log(getjson);
    console.log(parsejson);
    
    $('#cartcontent').datagrid('loadData', parsejson);
    $('div.cart .total').html('Total: £'+totjson);
    

        
});


  
function addcustom(){
    
    window.open('store.html','_self',false);
    var price = "£40";
    addProduct("CUSTOM ALBUM", parseFloat(price.split('£')[1]));
}

































































