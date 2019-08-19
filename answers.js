document.addEventListener("DOMContentLoaded", function(e) {
    let head = document.querySelector('head')
    head.innerHTML("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>")
    $('h1.highlight').html("<div>New TEXT </div>")
    $('.profile-image').attr('src', "https://www.denverzoo.org/wp-content/uploads/2018/09/Grizzly-Bear_Thumb.jpg") 
    $('.portfolio-image img').attr('src' , "https://66.media.tumblr.com/2f14f2062c1a9c5cc834aa88140d944c/tumblr_mw8evbd6t71r2yc90o1_400.png")
    
}); 