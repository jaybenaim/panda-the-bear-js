document.addEventListener("DOMContentLoaded", function(e) {
    // Add jQuery 
    $('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>') 
    // test 
    $('h1.highlight').html("<div>New TEXT </div>") 
    // Question 1 
    $('.profile-image').attr('src', "https://www.denverzoo.org/wp-content/uploads/2018/09/Grizzly-Bear_Thumb.jpg") 
    // Question 2 
    $('.portfolio-image img').first().attr('src' , "https://i.pinimg.com/originals/61/e5/f2/61e5f286f62029ee0b42483031cd0e64.png")
    // Question 3 
    $('.bio-info-value').first().text('JayJay Benaim')
    // or $('.bio-info-name').text("Jay Benaim")
    // Question 4
    $('.info-inner-container h3').text('You got changed!')
    // Question 5 
    $('body').css('backgroundColor', 'cyan') 
    // Question 6 
    for(let i = 0; i < $('.highlight').length; i++){ 
        $('.highlight').css('color', 'black') 
    }
    // Question 7 
    $('h1').css('fontFamily', 'monospace') 
    // Question 8 
    $('.action-icon-container').css('backgroundColor', 'lightgreen')
    // Question 9 
    $('form #name').attr('placeholder', 'Identify Yourself')
    // Question 10 
    $('form #message').attr('placeholder', 'State Your Business')
    // Question 11 
    $('form #name').attr('value', 'your nemesis')
    
    

}); 