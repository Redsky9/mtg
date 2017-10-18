// START
$(() => {
    var finalData = [];
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

    // Autocomplete Card Names
    $.ajax({
        type: 'GET',
        url: '/auto',
        data: {},
        async: false,
        dataType: 'json',
        success: function (data) {
            finalData = data;
        }
      });


    $( "#tags" ).autocomplete({
        source: finalData,
        select: function( event, ui ) {
            console.log(event);
            console.log(ui);
        }
      }); 
});