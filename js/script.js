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

    $('.img-container').mouseenter(function(){
        $(this).find('.store').show();
    })
    $('.img-container').mouseleave(function(){
        $(this).find('.store').hide();
    })

    $('button').click(function(){
        swal("Item added to cart", "click anywhere on the page to continue", "success");
    })
})