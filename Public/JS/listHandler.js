$(".js-create-list").focus(function() {
    $('.fa-plus').hide();
    $(this).removeClass('pl-10')
    $(this).addClass('pl-4')
    $('.add-list').addClass('h-28 rounded bg-gray-100 w-68')
    $('.js-add-list-button').removeClass('hidden')
});