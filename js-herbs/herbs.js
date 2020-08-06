$(document).ready(function(){
    $('.herb').mouseenter(function(){
        $(this).find('.add-to-cart').show('slow');
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
    })
    $('.herb').mouseleave(function(){
        $(this).find('.add-to-cart').hide('slow');
    })
    $('.add-to-cart').click(function(){
        swal("Item added to cart", "Continue Shopping", "success");
    })
})

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
})();