$(document).ready(function(){
setInterval(function(){
    $('#slides>div:first')
    .fadeOut(1000)
    
    .fadeIn(1000)
    .end()
    .appendTo('#slides');
},3000);
});
