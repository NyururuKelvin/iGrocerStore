// function for showing add to cart button

$(document).ready(function(){
    $('.deal').mouseenter(function(){
        $(this).find('button').show();
        $('button').css('background-color', 'red');
        $('button').mouseenter(function(){
            $('button').css('background-color', 'green')
        })
        // add this
        $('button').mouseleave(function(){
            $('button').css('background-color', 'red')
        })
        // ends here
    })
    $('.deal').mouseleave(function(){
        $(this).find('button').hide();
    })
})