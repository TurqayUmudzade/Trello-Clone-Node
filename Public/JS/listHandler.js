$(".js-create-list").focus(function() {
    $('.add-list .fa-plus').hide();
    $(this).removeClass('pl-10')
    $(this).addClass('pl-4')
    $('.add-list').addClass('h-28 rounded bg-gray-100 w-68')
    $('.js-add-list-button').removeClass('hidden')
});

$(".js-create-card").focus(function() {
    $('.add-card .fa-plus').hide();
    $(this).removeClass('pl-8')
    $(this).addClass('h-20 px-4 w-60 resize')
    $('.js-add-card-button').removeClass('hidden')
});

$(".js-create-card").blur(function() {
    $('.add-card .fa-plus').show();
    $(this).addClass('pl-8')
    $(this).removeClass('h-20 px-4 w-60 resize')
    $('.js-add-card-button').addClass('hidden')
});