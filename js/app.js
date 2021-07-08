
$(document).ready(function(){
$(window).on('scroll',function(){
var scroll = $(window).scrollTop();
if(scroll>=50){
$('.sticky').addClass("stickyadd");
}else{
    $('.sticky').removeClass("stickyadd");
}
});



    //typed
var typed= new Typed(".element",{
    strings: ["Sahil Rajput","a Developer","a Designer"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    startDelay:1000,
    
  
});
//progressbar

$('.clickme').click(function(){
   
    swal("Done!", "You will get response soon", "success");
});
$('#cv').click(function(){
    swal("Sorry!","it will be added soon", "info");
});

var waypoint = new Waypoint({
    element: document.getElementById('exp-class'),
    handler: function() {
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style","width:80%;transition:1a all");
        p[1].setAttribute("style","width:75%;transition:1a all");
        p[2].setAttribute("style","width:83%;transition:1a all");
        p[3].setAttribute("style","width:90%;transition:1a all");
        p[4].setAttribute("style","width:78%;transition:1a all");
        p[5].setAttribute("style","width:85%;transition:1a all");
        p[6].setAttribute("style","width:76%;transition:1a all");
    },offset:'90%'
  });
  });
