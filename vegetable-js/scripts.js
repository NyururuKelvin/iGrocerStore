$(document).ready(function(){
    $('.class').mouseenter(function(){
        $(this).find('.add-to-cart').show("slow");
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
    })
    $('.class').mouseleave(function(){
        $(this).find('.add-to-cart').hide("slow");
    })
    $('.add-to-cart').click(function(){
        swal("Item added to cart", "click anywhere on the page to continue", "success");
    })
})