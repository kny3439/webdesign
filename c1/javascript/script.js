$('.main-menu').mouseenter(function () {
    $(this).children('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).children('.sub-menu').stop().slideUp()
})

$('#notice li').click(function () {
    $('.popup').fadeIn()
})

$('.popup button').click(function () {
    $('.popup').fadeOut()
})

$('.slide').eq(0).siblings().hide()
idx = 0
setInterval(function () {

    idx++
    if (idx === 3) { idx = 0 }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 3000)

$('.tab-menu li a').click(function(e){
    e.preventDefault()
    $('.tab-menu li a').removeClass('on')
    $(this).addClass('on')
    let href=$(this).attr('href')
    $('.tab').hide()
    $(href).show()
})