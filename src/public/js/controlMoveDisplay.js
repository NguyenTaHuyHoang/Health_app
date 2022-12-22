
$('#moveToInvoiceBin').click(function (e) {
    e.preventDefault();
    $('#moveToInvoiceBin').addClass("displayNone");
    $('#returnToInvoiceList').removeClass("displayNone");

    $('.notBinInvoice').addClass("displayNone");
    $('.binInvoice').removeClass("displayNone");
});

$('#returnToInvoiceList').click(function (e) {
    e.preventDefault();
    $('#moveToInvoiceBin').removeClass("displayNone");
    $('#returnToInvoiceList').addClass("displayNone");

    $('.notBinInvoice').removeClass("displayNone");
    $('.binInvoice').addClass("displayNone");
});


$('#moveToAppointmentBin').click(function (e) {
    e.preventDefault();
    $('#moveToAppointmentBin').addClass("displayNone");
    $('#returnAppointmentList').removeClass("displayNone");

    $('.notBinAppointment').addClass("displayNone");
    $('.BinAppointment ').removeClass("displayNone");
});

$('#returnAppointmentList').click(function (e) {
    e.preventDefault();
    $('#moveToAppointmentBin').removeClass("displayNone");
    $('#returnAppointmentList').addClass("displayNone");

    $('.notBinAppointment').removeClass("displayNone");
    $('.BinAppointment').addClass("displayNone");
});