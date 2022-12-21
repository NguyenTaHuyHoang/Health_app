const exampleModal = document.getElementById('clientModal')
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let name = button.getAttribute('data-name')
    let address = button.getAttribute('data-address')
    let bd = button.getAttribute('data-dateOfBirth')
    let id = button.getAttribute('data-id')
    let SDT = button.getAttribute('data-SDT')
    let BHYT = button.getAttribute('data-BHYT')
    let gender = button.getAttribute('data-gender')
    let email = button.getAttribute('data-email')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    document.getElementById("name").value = name;
    document.getElementById("gender").value = gender;
    document.getElementById("BD").value = Date(bd);
    document.getElementById("address").value = address;
    document.getElementById("id").value = id;
    document.getElementById("email").value = email;
    document.getElementById("SDT").value = SDT;
    document.getElementById("BHYT").value = BHYT;

    $('#addCBtn').addClass("displayNone");
    $('#editCBtn').removeClass("displayNone");
    $('#clientModalLabel').html('Thay đổi thông tin cá nhân');
})

$('#editCBtn').click(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let gender = $("#gender").val();
    let id = $("#id").val();
    let email = $("#email").val();
    let BD = $("#BD").val();
    let address = $("#address").val();
    let BHYT = $("#BHYT").val();
    let SDT = $("#SDT").val();

    let dataSending = {
        name: name,
        gender: gender,
        CCCD_CMND: id,
        email: email,
        dateOfBirth: BD,
        address: address,
        BHYT: BHYT,
        SDT: SDT,
    }

    eventPOST(dataSending, window.location.href + "/updateInformation", "clientModal", "Cập nhật thành công!");
});