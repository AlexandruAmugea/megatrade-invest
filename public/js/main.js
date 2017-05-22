$(document).ready(function(){

    // Generate the owl carousel from homepage

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Change the action link for account form
    // Either demo register account or request real link

    $('#form-demo').on('click', function(e) {
        // TODO: insert the link for demo account register action
        $('#account-form').attr('action', 'demo_account_link');
        setTimeout(function(){
            $('#account-form').submit();
        }, 500);
        e.stopPropagation();
        e.preventDefault();
    });

    $('#form-real').on('click', function(e) {
        // TODO: insert the link for real account request action
        $('#account-form').attr('action', 'real_account_link');
        setTimeout(function(){
            $('#account-form').submit();
        }, 500);
        e.stopPropagation();
        e.preventDefault();
    });

});