$(document).ready(function(){
    $('.herb').mouseenter(function(){
        $(this).find('button').show();
        $('button').css('background-color', 'red');
        $('button').mouseenter(function(){
            $('button').css('background-color', 'green')
        })
    })
    $('.herb').mouseleave(function(){
        $(this).find('button').hide();
    })
})