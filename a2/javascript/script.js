$('.main-menu').mouseenter(function () {
    $('.sub-menu').stop().slideDown()
    $('header').addClass('on')
})
$('.main-menu').mouseleave(function () {
    $('.sub-menu').stop().slideUp()
    $('header').removeClass('on')
})


setInterval(function () {
    $('.slide-wrap').animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'left': '0%' })

    })

}, 3000)

$('.tab-menu li a').click(function (e) {
    e.preventDefault()
    $('.tab-menu li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.tab').hide()
    $(href).show()
})

$('#notice li:first').click(function(){
    $('.pop-dim').fadeIn()
})
$('.pop button').click(function(){
    $('.pop-dim').fadeOut()
})