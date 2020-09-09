$('.js-modal .js-cancel').on('click', function() {
    $('.js-modal').addClass('pointer-events-none hidden');
})
$('.js-create-board').on('click', function() {
    $('.js-modal').removeClass('pointer-events-none hidden');
})

//FOR THIS TO WORK BG CLASSED NEED TO BE AND THE END OF JS-COLOR-PALLETTE
$('.js-color-palette').on('click', function() {
    let color = $(this).attr('class').split(" ").pop();
    let lastClass = $('.js-board-creator').attr('class').split(' ').pop();
    $('.js-board-creator').removeClass(lastClass)
    $('.js-board-creator').addClass(color);
    $('.js-create-board-form input[type=hidden]').val(color);
})


//star

$(document).on('click', '.js-add-fav', async function(e) {
    let boardID = $(this).parent().attr('id')
    let boardColor = $(this).parent().attr('class').split(' ').pop()
    let boardName = $(this).siblings('h6').text()
    if ($(this).attr('class').split(' ').includes('text-yellow-300')) {

        try {
            const res = fetch('/my-boards/RemoveFromFav', {
                method: 'POST',
                body: JSON.stringify({ id: boardID }),
                headers: { 'Content-Type': 'application/json' }
            })
            $('#starred .boards #' + boardID).remove()
            $('#' + boardID + ' .fa-star').addClass('right text-gray-400')
            $('#' + boardID + ' .fa-star').removeClass('text-yellow-300 hover:text-yellow-400')
        } catch (error) {
            console.log(error);
        }

    } else {

        try {
            const res = fetch('/my-boards/AddToFav', {
                method: 'POST',
                body: JSON.stringify({ id: boardID }),
                headers: { 'Content-Type': 'application/json' }
            })
            $('#' + boardID + ' .fa-star').removeClass('right text-gray-400')
            $('#' + boardID + ' .fa-star').addClass('text-yellow-300 hover:text-yellow-400')
            $('#starred .boards').append(` <div id="${boardID}" class="board border w-40 h-24 rounded mx-4 my-2 relative overflow-hidden ${boardColor}">
        <h6 class="font font-semibold text-base p-2">${boardName}</h6><i class="js-add-fav far fa-star  text-yellow-300 absolute bottom-0 right-0 p-3 hover:text-yellow-400"></i></div>`);
        } catch (error) {
            console.log(error);
        }

    }
});

$('.board').on('click', function() {
    let id = $(this).attr('id');
    window.location.href = '/my-boards/' + id;
});