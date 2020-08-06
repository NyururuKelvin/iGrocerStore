// function for showing add to cart button

$(document).ready(function(){
    $('.deal').mouseenter(function(){
        $(this).find('.add-to-cart').show('slow');
        $('.add-to-cart').css('background-color', 'red');
        $('.add-to-cart').mouseenter(function(){
            $('.add-to-cart').css('background-color', 'green')
        })
        // add this
        $('.add-to-cart').mouseleave(function(){
            $('.add-to-cart').css('background-color', 'red')
        })
        // ends here
    })
    $('.deal').mouseleave(function(){
        $(this).find('.add-to-cart').hide('slow');
    })

    $('.img-container').mouseenter(function(){
        $(this).find('.store').show('slow');
    })
    $('.img-container').mouseleave(function(){
        $(this).find('.store').hide('slow');
    })

    $('.add-to-cart').click(function(){
        swal("Item added to cart", "click anywhere on the page to continue", "success");
    })
})

// $(document).ready(function(){
//     $('.add-to-cart').click(function(){
//         event.preventDefault();
//         var item = getElementById('#name').val();
//         var price = parseInt(getElementById('#price').val());
//         if (item == '' || price == ''){
//             alert('Confirm you have selected your choices')
//         } else {
//             $('#post').html('Your choice is ' + item + ' ' + price)
//         }
//     })
// })