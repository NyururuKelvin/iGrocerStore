$(document).ready(function(){
    $('.herb').mouseenter(function(){
        $(this).find('.add-to-cart').show();
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
    })
    $('.herb').mouseleave(function(){
        $(this).find('.add-to-cart').hide();
    })
    $('.add-to-cart').click(function(){
        alert("Item added to cart", "click anywhere on the page to continue", "success");
    })
})