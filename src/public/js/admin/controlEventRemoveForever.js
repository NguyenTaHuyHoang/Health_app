/* let _id = "";
let dynamicForm = document.getElementById("dynamicForm");

const confirmModal = document.getElementById('confirmModal')
confirmModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    _id = button.getAttribute('data-id')
    let type = button.getAttribute('data-type')


    if (_id == undefined)
        return;

    if (type == "removeService") {
        $("#confirmModalLabel").html("Xác nhận!");
        $("#confirmModalBody").html(`Bạn có chắc muốn xóa dịch vụ này không?`);
        $('.confirm').addClass('displayNone');
        $('#cfRemoveService').removeClass("displayNone");
    }
    else if (type == "disableClient") {
        $("#confirmModalLabel").html("Xác nhận!");
        $("#confirmModalBody").html(`Bạn có chắc muốn vô hiệu hóa tài khoản này không?`);
        $('.confirm').addClass('displayNone');
        $('#cfDisableClient').removeClass("displayNone");
    }
    else if (type == "disableEmployee") {
        $("#confirmModalLabel").html("Xác nhận!");
        $("#confirmModalBody").html(`Bạn có chắc muốn vô hiệu hóa tài khoản này không?`);
        $('.confirm').addClass('displayNone');
        $('#cfDisableEmployee').removeClass("displayNone");
    }
});

$("#cfRemoveService").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: _id,
    }

    $.ajax({
        type: "POST",
        url: `removeService`,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("Xóa!");
        }
    });

    alert(`Xóa dịch vụ ${_id} thành công!`);
    $('#confirmModal').modal('hide');
});

$("#cfDisableClient").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: _id,
    }

    $.ajax({
        type: "POST",
        url: `disableClient`,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    alert(`Vô hiệu hóa tài khoản ${_id} thành công!`);
    $('#confirmModal').modal('hide');
});

$("#cfDisableEmployee").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: _id,
    }

    $.ajax({
        type: "POST",
        url: `disableEmployee`,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    alert(`Vô hiệu hóa tài khoản ${_id} thành công!`);
    $('#confirmModal').modal('hide');
}); */