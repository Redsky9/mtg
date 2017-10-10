// START
$(() => {

    // Show/Hide dropdown menu
    let arrow = $('.dropdown-arrow');
    let menu = $('.drop-menu');

    $(arrow).on('click', () => {
        if ($(arrow).hasClass('fa-chevron-circle-down')) {
            $(arrow).removeClass('fa-chevron-circle-down');
            $(arrow).addClass('fa-chevron-circle-up');
        } else {
            $(arrow).removeClass('fa-chevron-circle-up');
            $(arrow).addClass('fa-chevron-circle-down');
        }
    });

    
});