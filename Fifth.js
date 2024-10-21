$(document).ready(function(){
    $(".text").textillate({
        loop:true,
        in:{
            effect:"fadeInDownBig",//effect name 
            delayScale:3,//set the delat to the each consecutive character 
            delay:20,//set delat between each character 
            //shuffle:true
        },
        out:{
            effect:"bounceOut",
            delatScale:2,
            delay:20,
            reverse:true
        }
    });
});