$('.js-modal').hide();

$('.js-modal .js-cancel').on('click', function() {
    $('.js-modal').hide();
    $('.js-modal').addClass('pointer-events-none');
})
$('.js-create-board').on('click', function() {
    $('.js-modal').show();
    $('.js-modal').removeClass('pointer-events-none');
})

//FOR THIS TO WORK BG CLASSED NEED TO BE AND THE END OF JS-COLOR-PALLETTE
$('.js-color-palette').on('click', function() {
    let color = $(this).attr('class').split(" ").pop();
    let lastClass = $('.js-board-creator').attr('class').split(' ').pop();
    $('.js-board-creator').removeClass(lastClass)
    $('.js-board-creator').addClass(color);
    $('.js-create-board-form input[type=hidden]').val(color);
})