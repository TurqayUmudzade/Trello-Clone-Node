$('.js-search').on('input', async function(e) {
    let searchStr = $(this).val();
    let url = '/search-bar/' + searchStr;
    // const res = await fetch(, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'text/html' }
    // })
    // const data = await res;

    fetch(url, {
        mode: 'no-cors',
        method: 'get'
    }).then(function(res) {
        return res.text();
    }).then(data => {
        $(".boards-list").html(data);
    });
    // console.log(data);
    // $(".boards-list").html(data);
});