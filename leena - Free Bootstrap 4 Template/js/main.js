$(document).ready(function(){

    //=== Animating the carousel Item ===\\
        

    $("#carouselOffer .carousel-item").addClass('animated slideInUp');


    //=== Hide all Talent Details and showing one ==\\

    $(".talent-details").hide();


    //=== Firstly showing one ===\\

    $("#talents_1").show();

    /*
        ======================================
        Image Clicking Function
        ======================================
    */

    $(".img-container").click(function(){


        /*
            ======================================
            Taking the value of this attribute
            ======================================
        */

        var id = $(this).attr('id');

        /*
            ======================================
            Removing all Class to add one
            ======================================
        */

        $(".talent-img").removeClass('talent-active');


        /*
            ======================================
            Find the near talent-img and active it 
            ======================================
        */

        $(this).find(".talent-img").addClass('talent-active'); 


        /*
            ======================================
            Hiding all the talent details
            ======================================
        */

        $(".talent-details").hide();


        /*
            ======================================
            Concat the variable ID which taken above
            ======================================
        */

        $("#talents_"+id).addClass('animated slideInRight');

        /*
            ======================================
            Showing the specific one
            ======================================
        */

        $("#talents_"+id).show();
        
    });


    /*
        ======================================
        News Section JS
        ======================================
    */

    $(".big-news .row").hide(); // Hiding all blogs


    $(".big-news .news-1").show(); // Showing news-titles-1 for the first time

    $(".news-titles-1").addClass('news-active'); //Add active class for title1 in first load

    //=== For First Title Click Function .news-titles-1 ===\\
    $(".news-titles-1").click(function(){

        $(".news-titles-1").addClass('news-active'); //Add active class for title
        $(".news-titles-2").removeClass('news-active'); //Remove active class for title 2 
        $(".news-titles-3").removeClass('news-active'); //Remove active class for title 3       

        $(".big-news .row").hide(); // Hiding all blogs

        $(".news-1").addClass('animated zoomIn');

        $(".news-1").show();

    });

    //=== For First Title Click Function .news-titles-2 ===\\
    $(".news-titles-2").click(function(){

        $(".news-titles-1").removeClass('news-active'); //Remove active class for title
        $(".news-titles-2").addClass('news-active'); //Add active class for title 2 
        $(".news-titles-3").removeClass('news-active'); //Remove active class for title 3 

        $(".big-news .row").hide(); // Hiding all blogs

        $(".news-2").addClass('animated zoomIn');

        $(".news-2").show();

    });

    //=== For First Title Click Function .news-titles-3 ===\\
    $(".news-titles-3").click(function(){

        $(".news-titles-1").removeClass('news-active'); //Remove active class for title
        $(".news-titles-2").removeClass('news-active'); //Remove active class for title 2 
        $(".news-titles-3").addClass('news-active'); //Add active class for title 3 

        $(".big-news .row").hide(); // Hiding all blogs

        $(".news-3").addClass('animated zoomIn');

        $(".news-3").show();

    });






    
});