let id_ = "";
let dynamicForm = document.getElementById("dynamicForm");

const confirmModal = document.getElementById('confirmModal')
confirmModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    id_ = button.getAttribute('data-id')
    let type = button.getAttribute('data-type')


    if (id_ == undefined)
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
        id: id_,
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

    alert(`Xóa dịch vụ ${id_} thành công!`);
    $('#confirmModal').modal('hide');
});

$("#cfDisableClient").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
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

    alert(`Vô hiệu hóa tài khoản ${id_} thành công!`);
    $('#confirmModal').modal('hide');
});

$("#cfDisableEmployee").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
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

    alert(`Vô hiệu hóa tài khoản ${id_} thành công!`);
    $('#confirmModal').modal('hide');
});