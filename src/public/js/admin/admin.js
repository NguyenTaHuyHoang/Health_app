$('#binClient').addClass("displayNone");
$('#binEmployee').addClass("displayNone");
$('#binService').addClass("displayNone");

// click on Client Bin Button
$('#moveToClientBin').click(function (e) {
    e.preventDefault();
    $('#moveToClientBin').addClass("displayNone");
    $('#returnToClientList').removeClass("displayNone");

    $('#notBinClient').addClass("displayNone");
    $('#binClient').removeClass("displayNone");
});

// click return Client List
$('#returnToClientList').click(function (e) {
    e.preventDefault();
    $('#moveToClientBin').removeClass("displayNone");
    $('#returnToClientList').addClass("displayNone");

    $('#notBinClient').removeClass("displayNone");
    $('#binClient').addClass("displayNone");
});

// click on Employee Bin Button
$('#moveToEmployeeBin').click(function (e) {
    e.preventDefault();
    $('#moveToEmployeeBin').addClass("displayNone");
    $('#returnToEmployeeList').removeClass("displayNone");

    $('#notBinEmployee').addClass("displayNone");
    $('#binEmployee ').removeClass("displayNone");
});

// click return Employee List
$('#returnToEmployeeList').click(function (e) {
    e.preventDefault();
    $('#moveToEmployeeBin').removeClass("displayNone");
    $('#returnToEmployeeList').addClass("displayNone");

    $('#notBinEmployee').removeClass("displayNone");
    $('#binEmployee').addClass("displayNone");
});

// click on Service Bin Button
$('#moveToServiceBin').click(function (e) {
    e.preventDefault();
    $('#moveToServiceBin').addClass("displayNone");
    $('#returnToServiceList').removeClass("displayNone");

    $('#notBinService').addClass("displayNone");
    $('#binService ').removeClass("displayNone");
});

// click return Service List
$('#returnToServiceList').click(function (e) {
    e.preventDefault();
    $('#moveToServiceBin').removeClass("displayNone");
    $('#returnToServiceList').addClass("displayNone");

    $('#notBinService').removeClass("displayNone");
    $('#binService').addClass("displayNone");
});