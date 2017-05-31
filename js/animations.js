$(document).ready(function() {

    var charEnter = 140;


    $('.tweet-compose').on('click', function() {
        $('.tweet-compose').css('height', '5em')
        $('#tweet-controls').css('display', 'block')  
    })

    $('.tweet-compose').keydown(function () {
        var textLength = $(this).val().length;
        var count = charEnter - textLength;
        $('#char-count').html(count);
        if (count <= 10){
            $('#char-count').css('color', 'red');
        } else
            $('#char-count').css('color', 'blue');
        if (count <= 0){
            $('#tweet-submit').prop('disabled', true);
        }
    })

    

    $('#tweet-submit').on('click', function() {
        var clonedTweet = $('.tweet').clone()[0];
        $(clonedTweet).find('.fullname').html('DRock');
        $(clonedTweet).find('.username').html('@drock');
        $(clonedTweet).find('.tweet-text').html($('.tweet-compose').val())
        $(clonedTweet).find('.avatar').attr('src', 'img/alagoon.jpg');
        
        $('#stream').prepend(clonedTweet);

        $('.tweet').mouseenter(function() {$(this).find('.tweet-actions').css('display', 'block')})
        $('.tweet').mouseleave(function() {$(this).find('.tweet-actions').css('display', 'none')})

        $('.tweet-compose').css('height', '2.5em')
        $('#tweet-controls').css('display', 'none')
    })

    $('.tweet-actions').css('display', 'none');

    $('.tweet').mouseenter(function() {$(this).find('.tweet-actions').css('display', 'block')})
    $('.tweet').mouseleave(function() {$(this).find('.tweet-actions').css('display', 'none')})

    //retweets/timestamp/reply should show hidden. Should only expand if you click on the tweet
    $('.tweet').on('click', function() {$('.stats').show(this.slideUp())})
    $('.tweet').on('click', function() {$('.stats').hide(this.slideDown())})
    //$('.tweet').on('click', function() {$(this).slidedown()})


})