$(".js-create-list").focus(function() {
    $('.add-list .fa-plus').hide();
    $(this).removeClass('pl-10')
    $(this).addClass('pl-4')
    $('.add-list').addClass('h-28 rounded bg-gray-100 w-68')
    $('.js-add-list-button').removeClass('hidden')
});

$(".js-create-card").focus(function() {
    $(this).siblings('.add-card .fa-plus').hide();
    $(this).removeClass('pl-8 bg-gray-200')
    $(this).addClass('h-20 px-4 w-60 resize bg-white')
    $(this).siblings('.js-add-card-button').removeClass('hidden');
    lastList = $(this).parent().parent().parent().attr('id');
});


let lastList;

$(document).click(function(e) {
    var target = e.target;
    var lastElement = '#' + lastList;

    if (!$(target).is(lastElement) && !$(target).parent().parent().is(lastElement) && !$(target).parent().parent().parent().is(lastElement)) {
        console.log(lastList);
        $('.add-card .fa-plus').show();
        $(lastElement).children().children().children('textarea').addClass('pl-8 bg-gray-200')
        $(lastElement).children().children().children('textarea').removeClass('h-20 px-4 w-60 resize bg-white')
        $('.js-add-card-button').addClass('hidden')
    }
});



//function

$(".js-create-list").blur(function() {
    $('.add-list .fa-plus').show();
    $(this).addClass('pl-10')
    $(this).removeClass('pl-4')
    $('.add-list').removeClass('h-28 rounded bg-gray-100 w-68')
    $('.js-add-list-button').removeClass('hidden')
});


$(".js-add-card-button").on("click", function() {
    let text = $(this).siblings('textarea').val();
    addCard('312', text);
});

$(".js-create-card").on("keypress", function(e) {
    let text = $(this).val();
    // If the user has pressed enter
    if (e.keyCode == 13) {
        addCard('312', text);
        e.preventDefault();
    }
});

async function addCard(listID, text) {
    if (!text) {
        text = " "
    }
    $('#' + listID + ' ul ').append(`<li class="bg-white rounded h-8 mx-auto my-2 px-2 py-1">${text}</li>`)
}