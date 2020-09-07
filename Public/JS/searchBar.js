$('.js-search').on('input', async function(e) {
    let searchStr = $(this).val().trim();
    if (searchStr === '') {
        $(".result").addClass('hidden')
    } else {
        let url = '/search-bar/' + searchStr;
        fetch(url, {
            mode: 'no-cors',
            method: 'get'
        }).then(function(res) {
            return res.text();
        }).then(data => {
            $(".result").removeClass('hidden')
            $(".js-search-result").html(data);
        });
    }

});

$(".js-search").on('blur', function() {
    $(".result").addClass('hidden')
});

$(".js-search").on('focus', function() {
    let searchStr = $(this).val();
    if (searchStr.trim().length > 0)
        $(".result").removeClass('hidden')
});