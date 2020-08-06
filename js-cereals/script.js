//show cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
})();

// function for showing add to cart button

$(document).ready(function(){
    $('.card-body').mouseenter(function(){
        $(this).find('.add-to-cart').show();
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
    })
    $('.card-body').mouseleave(function(){
        $(this).find('.add-to-cart').hide();
    })
    $('.add-to-cart').click(function(){
        swal("Item added to cart", "continue with your shopping", "success");
    })
})

