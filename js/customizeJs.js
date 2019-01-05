// JavaScript Document
$(document).ready( function () {
   $("#sendMail").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#Name').val(), subject: $('#Subject').val(), email: $('#Email').val(), message: $('#Message').val(), telephone: $('#Telephone').val(), mailSubject: "Request from Good Night Interiors", toMail: "goodnightmosquito@gmail.com" };
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
        setTimeout(function () {
            location.reload();
        }, 10000);

    });
    $("#enquiryMail").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#name').val(), email: $('#email').val(), message: $('#message').val(), telephone: $('#contact').val(), mailSubject: "Request from Good Night Interiors", toMail: "goodnightmosquito@gmail.com" };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxdQUSLUHH1g9V3qlYqzd3ZPCBXjIIkD_QOqAsNOEsyLNWRADXI/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#enquiry-error-msg').css('color', 'green');
                $('#enquiry-error-msg').html('Email sent successfully.');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            });
        setTimeout(function () {
            location.reload();
        }, 6000);

    });

});




function getMobileOperatingSystem(msgContent) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var msg = "I am interested in your product. Call me";
    if (msgContent) {
        msg = msgContent;
    }
    var os = "sms:+917092511553?body=" + msg;
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "sms:+917092511553&body=" + msg;
    }
    location.href = os;
}
