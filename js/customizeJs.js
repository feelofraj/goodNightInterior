// JavaScript Document
$(document).ready(function () {
    $("#sendMail").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#Name').val(), subject: $('#Subject').val(), email: $('#Email').val(), message: $('#Message').val(), telephone: $('#Telephone').val() };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxrcGdPjBezMh3x69vM1vx70SoLfs81lHYeG2hla2o-kF854_c/exec",
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

    });
});