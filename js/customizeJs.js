// JavaScript Document
$(document).ready(function () {
    $("#sendMail").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#Name').val(), subject: $('#Subject').val(), email: $('#Email').val(), message: $('#Message').val(), telephone: $('#Telephone').val(), mailSubject: "Request from Good Night Interiors", toMail: "goodnightmosquito@gmail.com"};
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxdQUSLUHH1g9V3qlYqzd3ZPCBXjIIkD_QOqAsNOEsyLNWRADXI/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#error-msg').css('color', 'green');
                $('#error-msg').html('Email sent successfully.');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            });
            setTimeout(function(){
				location.reload();
		},10000);

    });
});