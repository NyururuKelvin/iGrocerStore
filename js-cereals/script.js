$(document).ready(function(){
    $('.add-to-cart').mouseenter(function(){
        $(this).find('button').show();
        $('button').css('background-color', 'red');
        $('button').mouseenter(function(){
            $('button').css('background-color', 'green')
        })
    })
    $('.add-to-cart').mouseleave(function(){
        $(this).find('button').hide();
    })
})