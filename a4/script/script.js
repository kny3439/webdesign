$('.main-menu').mouseenter(function () {
    $('.sub-menu').stop().slideDown()
    $('header').addClass('on')
})
$('.main-menu').mouseleave(function () {
    $('.sub-menu').stop().slideUp()
    $('header').removeClass('on')
})

$('slide').eq(0).siblings().hide()
let idx = 0
setInterval(function () {
    idx++
    if (idx === 3) {
        idx = 0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
},3000)

$('.notice li:first').click(function(){
    $('.popup').addClass('on')
})

$('.popup button').click(function(){
    $('.popup').removeClass('on')
})