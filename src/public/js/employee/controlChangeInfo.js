const employeeModal = document.getElementById('employeeModal');
employeeModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let name = button.getAttribute('data-name')
    let address = button.getAttribute('data-address')
    let bd = button.getAttribute('data-dateOfBirth')
    let id = button.getAttribute('data-id')
    let SDT = button.getAttribute('data-SDT')
    let gender = button.getAttribute('data-gender')
    let email = button.getAttribute('data-email')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    document.getElementById("nameE").value = name;
    document.getElementById("genderE").value = gender;
    document.getElementById("BD_E").value = Date(bd);
    document.getElementById("addressE").value = address;
    document.getElementById("idE").value = id;
    document.getElementById("emailE").value = email;
    document.getElementById("SDT_E").value = SDT;

    $('#departmentStyle').addClass('displayNone');
    $('#positionStyle').addClass('displayNone');

    $('#addEmployeeBtn').addClass("displayNone");
    $('#editEmployeeBtn').removeClass("displayNone");
    $('#employeeModalLabel').html('Thay đổi thông tin cá nhân');
})

$('#editEmployeeBtn').click(function (e) {
    e.preventDefault();

    let name = $("#nameE").val();
    let gender = $("#genderE").val();
    let id = $("#id").val();
    let email = $("#emailE").val();
    let BD = $("#BD_E").val();
    let address = $("#addressE").val();
    let SDT = $("#SDT_E").val();

    let dataSending = {
        name: name,
        gender: gender,
        CCCD_CMND: id,
        email: email,
        dateOfBirth: BD,
        address: address,
        SDT: SDT,
    }

    eventPOST(dataSending, window.location.href + "/updateInformation", "employeeModal", "Cập nhật thành công!");
});