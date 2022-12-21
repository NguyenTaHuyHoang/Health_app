let name = "";
let email = "";
let SDT = "";

let regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// code kiểm tra phone
var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

function validateAP(nameC, emailC, SDTC) {
    if (nameC == "") {
        $('.notification').html("Vui lòng nhập tên khách hàng!");
        return false;
    }
    else if (emailC == "") {
        $('.notification').html("Vui lòng nhập email khách hàng!");
        return false;
    }
    else if (SDTC == "") {
        $('.notification').html("Vui lòng nhập SDT khách hàng!");
        return false;
    }
    else if (!regexMail.test(emailC)) {
        $('.notification').html("Vui lòng nhập đúng định dạng email!");
        return false;
    }
    else if (!regexPhone.test(SDTC)) {
        $('.notification').html("Vui lòng nhập đúng định dạng số điện thoại!");
        return false;
    }
    return true;
}

const appointmentModal = document.getElementById('appointmentModal');
appointmentModal.addEventListener('show.bs.modal', event => {
    name = $('#getDataAccount').attr('data-name');
    email = $('#getDataAccount').attr('data-email');
    SDT = $('#getDataAccount').attr('data-SDT');

    $('.myInfo').html(`
        Name: ${name}, Email: ${email}, SDT: ${SDT}
    `);

    $('.nameC').removeClass('displayNone');
    $('.emailC').removeClass('displayNone');
    $('.SDTC').removeClass('displayNone');
})

$('#makeAppointment').click(function (e) {
    e.preventDefault();

    console.log("chay r ne");

    let nameC = $('#nameC').val();
    let emailC = $('#emailC').val();
    let SDTC = $('#SDTC').val();
    let dateOfCreation = $('#APdate').val();
    let note = $('#note').val();

    /* if (!validationDate(dateOfCreation))
        return $('.notification').html("Vui lòng chọn ngày sau hôm nay!"); */

    if (!validateAP(nameC, emailC, SDTC)) return;

    let dataSending = {
        client: {
            name: nameC,
            email: emailC,
            SDT: SDTC,
        },
        employee: {
            name: name,
            email: email,
            SDT: SDT,
        },
        dateOfCreation: dateOfCreation,
        note: note,
    }

    eventPOST(dataSending, "add/appointment", "appointmentModal", "Đặt lịch cuộc hẹn thành công!");
});