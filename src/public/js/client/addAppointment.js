let name = "";
let email = "";
let SDT = "";

const appointmentModal = document.getElementById('appointmentModal');
appointmentModal.addEventListener('show.bs.modal', event => {
    name = $('#getDataAccount').attr('data-name');
    email = $('#getDataAccount').attr('data-email');
    SDT = $('#getDataAccount').attr('data-SDT');

    $('.myInfo').html(`
        Name: ${name}, Email: ${email}, SDT: ${SDT}
    `);
})

$('#makeAppointment').click(function (e) {
    e.preventDefault();

    let dateOfCreation = $('#APdate').val();
    let note = $('#note').val();

    if (!validationDate(dateOfCreation))
        return $('.notification').html("Vui lòng chọn ngày sau hôm nay!");

    let dataSending = {
        client: {
            name: name,
            email: email,
            SDT: SDT,
        },
        employee: {
            name: "",
            email: "",
            SDT: "",
        },
        dateOfCreation: dateOfCreation,
        note: note,
    }

    eventPOST(dataSending, "add/appointment", "appointmentModal", "Đặt lịch cuộc hẹn thành công!");
});