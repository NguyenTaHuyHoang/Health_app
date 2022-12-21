function eventPOST(dataSending, url, modalName, notification) {

    $.ajax({
        type: "POST",
        url: `${url}`,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    if (notification != null)
        alert(notification);
    if (modalName != null)
        $(`#${modalName}`).modal('hide');
    $('.notification').html('');
}

function validationDate(date) {
    let currentDate = new Date();

    // Convert the date argument to a Date object if it's a string
    if (typeof date === 'string') {
        date = new Date(date);
    }

    // Check if the date argument is a valid Date object
    if (date instanceof Date && !isNaN(date)) {
        if (date.getTime() > currentDate.getTime()) return true;
        return false;
    }

    // If the date argument is not a valid Date object, return false
    return false;
}

function updateContentOnConfirmModal(title, content, btnID) {
    $("#confirmModalLabel").html(`${title}`);
    $("#confirmModalBody").html(`${content}`);
    $('.confirm').addClass('displayNone');
    $(`#${btnID}`).removeClass("displayNone");
}