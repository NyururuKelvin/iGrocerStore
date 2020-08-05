$(document).ready(function(){
    $('.veggies').mouseenter(function(){
        $(this).find('.add-to-cart').show();
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
    })
    $('.veggies').mouseleave(function(){
        $(this).find('.add-to-cart').hide();
    })
    $('.add-to-cart').click(function(){
        swal("Item added to cart", "click anywhere on the page to continue", "success");
    })
})