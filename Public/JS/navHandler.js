let open = false;
$('nav .fa-bars').on('click', function() {
    if (!open) {
        $('nav .nav-links').show();
        $('nav .nav-links').addClass('nav-links-sm');
        $('nav .search-bar').addClass('nav-search-sm');
        open = true;
    } else {
        $('nav .nav-links').hide();
        $('nav .nav-links').removeClass('nav-links-sm');
        $('nav .search-bar').removeClass('nav-search-sm');
        open = false;
    }

});