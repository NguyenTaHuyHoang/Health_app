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

    alert(notification);
    $(`#${modalName}`).modal('hide');
}

function updateContentOnConfirmModal(title, content, btnID) {
    $("#confirmModalLabel").html(`${title}`);
    $("#confirmModalBody").html(`${content}`);
    $('.confirm').addClass('displayNone');
    $(`#${btnID}`).removeClass("displayNone");
}