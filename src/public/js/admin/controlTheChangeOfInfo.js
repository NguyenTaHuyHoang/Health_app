let serviceInfo = document.getElementById("serviceModal");
let idS = "";
function showInforServiceInModal(serviceName, price) {
    $('#nameS').val(serviceName);
    $('#price').val(price);
}

function hideInforServiceInModal() {
    $('#nameS').val("");
    $('#price').val("");
}

$('.changeServiceInfo').click(function (e) {
    e.preventDefault();
    $('#serviceModalLabel').html("Chỉnh xửa thông tin dịch vụ!");
    $('#editServiceBtn').removeClass('displayNone');
    $('#addServiceBtn').addClass('displayNone');

    const button = this;
    let name = button.getAttribute('data-name')
    let price = button.getAttribute('data-price')
    idS = button.getAttribute('data-id')
    showInforServiceInModal(name, price);
});

serviceInfo.addEventListener('hide.bs.modal', event => {
    hideInforServiceInModal();
    $('#editServiceBtn').addClass('displayNone');
    $('#addServiceBtn').removeClass('displayNone');
})

$('#editServiceBtn').click(function (e) {
    e.preventDefault();

    let name = $("#nameS").val();
    let price = $("#price").val();

    let dataSending = {
        name: name,
        price: price,
    }

    $.ajax({
        type: "POST",
        url: "editService/" + idS,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    alert("Thành công!");
    $('#serviceModal').modal('hide');

});

// Event change position of Employee
let idE = "";
$('.EPBtn').click(function (e) {
    e.preventDefault();

    const button = this;
    idE = button.getAttribute('data-id');
    let name = button.getAttribute('data-name');
    let position = button.getAttribute('data-position');
    let specialist = button.getAttribute('data-specialist');
    $("#editPositionModalLabel").html(`Đổi vị trí làm việc của ${position} ${specialist} ${name}`);
});

$('#changePosition').click(function (e) {
    e.preventDefault();

    let editDepartment = $("#editDepartment").val();
    let editPosition = $("#editPosition").val();

    let dataSending = {
        specialist: editDepartment,
        position: editPosition,
    }

    $.ajax({
        type: "POST",
        url: "editEmployee/" + idE,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    alert("Thành công!");
    $('#editPositionModal').modal('hide');

});

// Event change position of Employee
let idC = "";
$('.ECBtn').click(function (e) {
    e.preventDefault();

    const button = this;
    idC = button.getAttribute('data-id');
    let name = button.getAttribute('data-name');
    let rank = button.getAttribute('data-rank');
    $("#editRankModalLabel").html(`Đổi xếp hạng của ${name} (${rank})`);
});

$('#changeRank').click(function (e) {
    e.preventDefault();

    let rank = $("#rank").val();

    let dataSending = {
        rank: rank,
    }

    $.ajax({
        type: "POST",
        url: "editClient/" + idC,
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    alert("Thành công!");
    $('#editRankModal').modal('hide');

});