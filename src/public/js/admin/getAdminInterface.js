const exampleModal = document.getElementById('adminModal')
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let name = button.getAttribute('data-name')
    let address = button.getAttribute('data-address')
    let bd = button.getAttribute('data-dateOfBirth')
    let id = button.getAttribute('data-id')
    let SDT = button.getAttribute('data-SDT')
    let image = button.getAttribute('data-image')
    let gender = button.getAttribute('data-gender')
    let email = button.getAttribute('data-email')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    document.getElementById("nameA").value = name;
    document.getElementById("genderA").value = gender;
    document.getElementById("BD_A").value = Date(bd);
    document.getElementById("addressA").value = address;
    document.getElementById("idA").value = id;
    document.getElementById("emailA").value = email;
    document.getElementById("SDT_A").value = SDT;
    document.getElementById("imageA").value = image;
})

$('#updateInformationAdmin').click(function (e) {
    e.preventDefault();

    let name = $("#nameA").val();
    let gender = $("#genderA").val();
    let id = $("#idA").val();
    let email = $("#emailA").val();
    let BD = $("#BD_A").val();
    let address = $("#addressA").val();
    let image = $("#imageA").val();
    let SDT = $("#SDT_A").val();

    let dataSending = {
        name: name,
        gender: gender,
        CCCD_CMND: id,
        email: email,
        dateOfBirth: BD,
        address: address,
        image: image,
        SDT: SDT,
    }

    $.ajax({
        type: "POST",
        url: window.location.href + "/updateInformation",
        data: dataSending,
        dataType: "JSON",
        success: function (response) {
            console.log("update thành công!");
        }
    });

    alert("Thành công!");
    $('#adminModal').modal('hide');

});