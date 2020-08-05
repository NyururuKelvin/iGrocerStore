// $(document).ready(function(){
//     $('.add-to-cart').mouseenter(function(){
//         $(this).find('button').show();
//         $('button').css('background-color', 'red');
//         $('button').mouseenter(function(){
//             $('button').css('background-color', 'green')
//         })
//     })
//     $('.add-to-cart').mouseleave(function(){
//         $(this).find('button').hide();
//     })
// })

// function for showing add to cart button

$(document).ready(function(){
    $('.deal').mouseenter(function(){
        $(this).find('.add-to-cart').show();
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
    })
    $('.deal').mouseleave(function(){
        $(this).find('.add-to-cart').hide();
    })
    $('.add-to-cart').click(function(){
        swal("Item added to cart", "continue with your shopping", "success");
    })
})