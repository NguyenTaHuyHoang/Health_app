$('.makeAppointment').click(function (e) {
    e.preventDefault();
    const targetDiv = document.getElementById('makeAppointmentSection');

    // Sử dụng scrollIntoView() để cuộn trang web đến div mục tiêu
    targetDiv.scrollIntoView({ behavior: 'smooth' });
});

//code kieemr tra mail
let regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// code kiểm tra phone
var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

$('#makeA').click(function (e) {
    e.preventDefault();
    let name = $('.name_').val();
    let email = $('.email_').val();
    let sdt = $('.sdt_').val();

    let note = $('.note').val();
    let date = $('#date').val();
    let notification = $('.notification');
    console.log(name, email, sdt, note);

    if (!regexMail.test(email)) { notification.html("Vui lòng nhập đúng đinh dạng email của bạn!"); }
    else if (!regexPhone.test(sdt)) { notification.html("Vui lòng nhập đúng định dạng số điện thoại của bạn!"); }
    else if (date == "") {
        notification.html("Vui lòng chọn ngày khám!");
    }
    else {
        let dataSending = {
            client: {
                name: name,
                email: email,
                SDT: sdt,
            },
            employee: {
                name: "",
                email: "",
                SDT: "",
            },
            dateOfCreation: date,
            note: note,
        }

        $.ajax({
            type: "POST",
            url: "client/add/appointment",
            data: dataSending,
            dataType: "JSON",
            success: function (response) {
                console.log("update thành công!");
            }
        });

        notification.html("Đặt lịch khám thành công!");
    }
});